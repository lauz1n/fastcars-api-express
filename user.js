const User = require("./src/model/User")
const Cars = require("./src/model/Cars")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const fs = require("fs")
const Image = require("./src/model/ImgSchema")
const {
  registerValidation,
  loginValidation,
  carValidation,
} = require("./src/controllers/validation")

//Image config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

//Registering User
const register = async (req, res) => {
  {
    //Validating Data
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Checking if user already exists
    const usernameExists = await User.findOne({ username: req.body.username })
    if (usernameExists) return res.status(400).send("Username already exists")

    //Hashing Password
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Creating new user
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    })
    try {
      const savedUser = await user.save()
      res.send({ user: user._id })
    } catch (err) {
      res.status(400).send(err)
    }
  }
}
//Logging in
const login = async (req, res) => {
  {
    //Validating Data
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Checking if name exists
    const name = await User.findOne({ name: req.body.name })
    if (!name) return res.status(400).send("Name is wrong")

    //Checking if username exists
    const user = await User.findOne({ username: req.body.username })
    if (!user) return res.status(400).send("Username or password is wrong")

    //Comparing given password to password in Database
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword)
      return res.status(400).send("Username or password is wrong")

    //Creating Token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header("Auth-token", token)

    res.send("Logged In!")
  }
}
//Posting Cars
const postCar = async (req, res) => {
  //Validating data
  const { error } = carValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const car = new Cars({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
  })
  try {
    car.save()
    res.send({ car: car._id })
  } catch (err) {
    res.status(400).send(err)
  }
}
//Posting Images
const postImg = async (req, res) => {
  //Image post
  const saveImg = new Image({
    name: req.body.name,
    img: {
      data: fs.readFileSync("./src/uploads/" + req.file.filename),
      contentType: "image/png",
    },
  })
  //Assigning token to image post
  const token = jwt.sign({ _id: Image._id }, process.env.TOKEN_SECRET)
  res.header("Auth-token", token)
  try {
    saveImg.save()
    res.send("Image uploaded successfully")
  } catch (err) {
    res.status(400).send("Error uploading image")
  }
}
module.exports = { register, login, postImg, postCar, upload }
