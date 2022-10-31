const Cars = require("./src/model/Cars")
const multer = require("multer")
const fs = require("fs")

//DiskStorage multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

//Create car func
const create = async (req, res) => {
  const car = new Cars({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    imgName: req.body.imgName,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  })
  try {
    car.save()
    res.send({ car: car._id })
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = { create, upload }
