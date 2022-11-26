const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
  },
  img: {
    type: String,
  },
})

module.exports = mongoose.model("Cars", carSchema)
