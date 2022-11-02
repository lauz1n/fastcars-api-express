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
    min: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  imgName: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = mongoose.model("Cars", carSchema)
