const Cars = require("./src/model/Cars")
const multer = require("multer")
const fs = require("fs")

//DiskStorage multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
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
      contentType: "image/jpg",
    },
  })
  try {
    const savedCar = await car.save()

    res.send({ car: car._id })
  } catch (err) {
    res.status(400).send(err)
  }
}
//Car GET All
const getAll = async (req, res) => {
  const cars = await Cars.find()
  return res.status(200).json(cars)
}
//Car GET 1
const get = async (req, res) => {
  const { id } = req.params
  const cars = await Cars.findOne({ id })
  return res.status(200).json(cars)
}
//Car UPDATE
const update = async (req, res) => {
  const carConverted = {
    ...req.body,
  }

  Object.keys(carConverted).forEach((key) => {
    if (carConverted[key] === undefined) {
      delete carConverted[key]
    }
  })
  console.log(req.body)
  try {
    const updatedCar = await Cars.findOneAndUpdate(
      { id: req.params.id },

      carConverted,

      { new: true }
    )
    res.json(updatedCar)
  } catch (err) {
    res.status(404).send("Error updating car", err)
  }
  console.log(req.body)
}

//Car DELETE
const carDelete = async (req, res) => {
  console.log(req.params)
  try {
    const removedCar = await Cars.deleteOne({ id: req.params.id })
    res.json(removedCar)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { create, upload, get, getAll, update, carDelete }
