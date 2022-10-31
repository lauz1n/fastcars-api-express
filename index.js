const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

//Import routes
const authRoute = require("./src/routes/index")
//Connect to db
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Connected to DB")
})

app.use(express.json())
app.use(express.static("uploads"))
app.use("/api/user", authRoute)

app.listen(8000, () => {
  console.log("Server is running")
})
