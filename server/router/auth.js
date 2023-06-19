const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')


// POST /signup - User signup endpoint
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body.variables;

  // Check if all required fields are provided
  if (!name || !email || !password) {
    return res.status(402).json({ message: "Please fill in all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    // Check if the user already exists
    if (userExist) {
      return res.status(422).json({ message: "User already exists" });
    } else {
      const user = new User({ name, email, password });
      await user.save();
      return res.status(201).json({ message: "User successfully signed up" });
    }
  } catch (error) {
    console.log(error);
  }
});

// GET /logout - User logout endpoint
router.get("/logout", async (req, res) => {
  res.clearCookie("jwt", { sameSite: "none", path: "/", secure: true });
  res.status(200).json({ message: "User logout" });
});

// POST /login - User login endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body.variables;
  console.log(0);
  // Check if all required fields are provided
  if (!email || !password) {
    console.log(1);
    console.log(email, password);
    return res.status(422).json({ message: "Please fill in all the fields properly" });
  }
  
  try {
    console.log(2);
    const userExist = await User.findOne({ email: email });
    
    // Check if the user exists
    if (userExist) {
      console.log(3);
      const isMatch = await bcrypt.compare(password, userExist.password);

      // Check if the password is correct
      if (isMatch) {
        const token = await userExist.saveToken();
        // res.setHeader("set-cookie", "newuser=false");
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 25892000000),
          sameSite: "none",
          secure: true,
          path:'/'
        });

        res.status(201).json({ userExist });
      } else {
        res.status(422).json({ message: "Invalid credentials" });
      }
    } else {
      return res.status(422).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

// GET /about - About endpoint with authorization middleware
router.get(
  "/contactus",
  async function (req, res, next) {
    if (!req.cookies.jwt) {
      // If no token is present, continue to the next middleware
      next();
    } else {
      try {
        const token = req.cookies.jwt;
        console.log(token);
        const verifyToken = jwt.verify(
          token,
          process.env.SEC_KEY
        );
        const rootUser = await User.findOne({
          _id: verifyToken._id,
          "tokens.token": token,
        });

        console.log(rootUser);
        if (!rootUser) {
          throw new Error("User Not Found");
        }
        console.log(rootUser);
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
      } catch (error) {
        res.status(401).send("Unauthorized: No token provided");
        console.log(error);
      }
    }
  },
  (req, res) => {
    if (!req.rootUser) {
      // If rootUser is not assigned, return an error
      res.status(402).json({ message: "Token is not assigned" });
    } else {
      res.send(req.rootUser);
    }
  }
);

module.exports = router;
