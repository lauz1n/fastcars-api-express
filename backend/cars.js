const Cars = require("./src/model/Cars")
const dotenv = require("dotenv")
const multer = require("multer")
const S3 = require("aws-sdk/clients/s3")
const multerS3 = require("multer-s3")
const path = require("path")
const uuid = require("uuid").v4
dotenv.config()

const bucketName = process.env.AWS_BUCKET
const bucketRegion = process.env.AWS_BUCKET_REGION
const bucketAccessKey = process.env.AWS_ACCESS_KEY_ID
const bucketSecretKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3({
  bucketRegion,
  bucketAccessKey,
  bucketSecretKey,
})

const upload = multer({
  storage: multerS3({
    s3,
    bucket: bucketName,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      cb(null, `${uuid()}${ext}`)
    },
  }),
})

//Create car func
const create = async (req, res) => {
  const car = new Cars({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    imgName: req.body.imgName,
    img: req.file.location,
  })
  console.log(car)
  try {
    const savedCar = await car.save()
    res.send("Posted")
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
  const id = req.params.id
  const cars = await Cars.findOne({ _id: id })
  return res.status(200).json(cars)
}
//Car UPDATE
const update = async (req, res) => {
  try {
    const updatedCar = await Cars.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    res.json(updatedCar)
  } catch (err) {
    res.status(404).send("Error updating car", err)
  }
}

//Car DELETE
const carDelete = async (req, res) => {
  console.log(req.params)
  try {
    const removedCar = await Cars.deleteOne({ _id: req.params.id })
    res.json(removedCar)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { create, upload, get, getAll, update, carDelete }
