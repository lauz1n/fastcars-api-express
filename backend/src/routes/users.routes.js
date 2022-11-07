const router = require("express").Router()
const verify = require("../middlewares/verifytoken")
const { register, login, getUser } = require("../../user")

//Registering User
router.post("/register", register)
//Login
router.post("/login", login)
//Get one user
router.get("/:id", getUser)

module.exports = router
