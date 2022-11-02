const router = require("express").Router()
const { upload, create, get, getAll, update, carDelete } = require("../../cars")
const verify = require("../middlewares/verifytoken")

//Car post
router.post("/create", verify, upload.single("carImg"), create)
//Car get all cars
router.get("/cars", getAll)
//Car get car
router.get("/cars/:id", get)
//Car update
router.patch("/cars/:id", verify, update)
//Car Delete
router.delete("/cars/:id", verify, carDelete)

module.exports = router
