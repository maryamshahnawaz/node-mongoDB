const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 userId: {
  type: String,
  required: true,
  unique: true, // Ensure uniqueness
 },
 name: {
  type: String,
  required: true,
  trim: true,
 },
 age: {
  type: Number,
  default: 0,
  validate(value) {
   if (value < 0) {
    throw new Error("Age must be a postive number");
   }
  },
 },
});

userSchema.index({ userId: 1 }, { unique: true }); // Add unique index

const User = mongoose.model("User", userSchema);

module.exports = User;











// const mongoose = require("mongoose");
// const validator = require("validator");

// const User = mongoose.model("users", {
//  name: {
//   type: String,
//   required: true,
//   trim: true,
//  },
//  age: {
//   type: Number,
//   default: 0,
//   validate(value) {
//    if (value < 0) {
//     throw new Error("Age must be a positive number");
//    }
//   },
//  },
//  email: {
//   type: String,
//   required: true,
//   trim: true,
//   lowercase: true,
//   validate(value) {
//    if (!validator.isEmail(value)) {
//     throw new Error("Invalid email address")
//    }
//   },
//  },
//  address: {
//   type: String,
//   trim: true,

//  },

// });

// module.exports = User;