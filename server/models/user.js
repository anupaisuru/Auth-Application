const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
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
});

//generate jwt token
userSchema.methods.generateAuthToken = function () {
  try {
    const token = jwt.sign(
      {
        _id: this._id,
      },
      process.env.SECRET,
      { expiresIn: "1d" } // Token expires time
    );
    return token;
  } catch (error) {
    console.error("Error generating auth token:", error);
    throw new Error("Unable to generate auth token");
  }
};

module.exports = mongoose.model("users", userSchema);
