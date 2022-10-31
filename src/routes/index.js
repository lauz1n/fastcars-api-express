const router = require("express").Router()
const verify = require("../middlewares/verifytoken")
const { register, login } = require("../../user")
const { upload, create } = require("../../cars")

//Registering User
router.post("/register", register)
//Login
router.post("/login", verify, login)
//Car post
router.post("/cars", verify, upload.single("carImg"), create)

module.exports = router
