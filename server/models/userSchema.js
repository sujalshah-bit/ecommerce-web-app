const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    // Hash the password using bcrypt
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Generate and save a token for the user
UserSchema.methods.saveToken = async function () {
  const maxAge = 3 * 24 * 60 * 60;

  try {
    // Generate a JSON Web Token (JWT) using the user's _id and a secret key
    const token = jwt.sign({ _id: this._id }, process.env.SEC_KEY, {
      expiresIn: maxAge,
    });

    // Add the token to the user's tokens array
    this.tokens = this.tokens.concat({ token: token });

    // Save the updated user with the new token
    await this.save();

    return token;
  } catch (error) {
    console.log(error);
  }
};

// Create the User model based on the UserSchema
const User = mongoose.model('User', UserSchema);

module.exports = User;
