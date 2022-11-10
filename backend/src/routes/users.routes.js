const router = require("express").Router()
const { register, login } = require("../../user")

//Registering User
router.post("/register", register)
//Login
router.post("/login", login)

module.exports = router
