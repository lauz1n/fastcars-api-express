const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  username: {
    type: String,
    required: true,
    min: 4,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("User", userSchema)
