const User = require("./src/model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {
  registerValidation,
  loginValidation,
  carValidation,
} = require("./src/controllers/validation")

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

module.exports = { register, login }
