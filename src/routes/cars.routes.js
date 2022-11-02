const router = require("express").Router()
const { upload, create, getCar, getAll } = require("../../cars")
const verify = require("../middlewares/verifytoken")

//Car post
router.post("/create", verify, upload.single("carImg"), create)
//Car get all cars
router.get("/cars", getAll)
//Car get car
router.get("/cars/:id", getCar)

module.exports = router
