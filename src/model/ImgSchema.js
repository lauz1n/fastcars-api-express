const mongoose = require("mongoose")

const imgSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = mongoose.model("Image", imgSchema)
