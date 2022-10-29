const router = require("express").Router()
const verify = require("../middlewares/verifytoken")
const { register, login, postImg, postCar, upload } = require("../../user")

//Registering User
router.post("/register", register)
//Login
router.post("/login", verify, login)
//Car post
router.post("/cars", postCar)
//Image post
router.post("/upload", upload.single("testImg"), postImg)
//Image get

module.exports = router
