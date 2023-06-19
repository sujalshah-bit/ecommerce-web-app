const express = require("express");
const cors = require("cors");
const db = require("./db/conn");
const router = require("./router/auth");
const User = require("./models/userSchema");
require("dotenv").config({path:'./config.env'});
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin:'https://ecommerce-web-app-j9h3.vercel.app/',
  credentials:true
}));
app.use(cookieParser());

// Connect to the database
db();

// Default route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Register the authentication routes
app.use("/auth", router);

// Start the server
app.listen(PORT, () => console.log(`App is listening at ${PORT}`));
