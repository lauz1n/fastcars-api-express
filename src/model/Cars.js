const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 24,
  },
  brand: {
    type: String,
    required: true,
    max: 24,
  },
  model: {
    type: String,
    required: true,
    min: 5,
    max: 24,
  },
  price: {
    type: Number,
    required: true,
    max: 24,
  },
})

module.exports = mongoose.model("Cars", carSchema)
