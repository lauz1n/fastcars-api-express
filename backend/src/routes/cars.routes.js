const router = require("express").Router()
const { upload, create, get, getAll, update, carDelete } = require("../../cars")
const verify = require("../middlewares/verifytoken")

//Car post
router.post("/create", upload.single("carImg"), create)
//Car get all cars
router.get("/cars", getAll)
//Car get car
router.get("/cars/:id", get)
//Car update
router.patch("/cars/:id", update)
//Car Delete
router.delete("/cars/:id", carDelete)

module.exports = router
