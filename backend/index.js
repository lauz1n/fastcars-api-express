const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")

dotenv.config()

//Import routes
const authRoute = require("./src/routes/users.routes")
const carRoute = require("./src/routes/cars.routes.js")
//Connect to db
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Connected to DB")
})

app.use(cors())
app.use(express.json())
app.use("/api/user", authRoute)
app.use("/api/product", carRoute)

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running")
})
