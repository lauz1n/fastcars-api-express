const router = require("express").Router()
const verify = require("../middlewares/verifytoken")
const { register, login } = require("../../user")

//Registering User
router.post("/register", register)
//Login
router.post("/login", verify, login)

module.exports = router
