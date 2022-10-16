const express = require("express")
const app = express()
const methodOverride = require("method-override")
const connectDB = require("./config/database")
const mainRoutes = require("./routes/main")

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

//Connect To Database
connectDB()

//Using EJS for views
app.set("view engine", "ejs")

//Static Folder
app.use(express.static("public"))

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Use html forms for methods beyond POST
app.use(methodOverride("_method"))

//Setup Routes 
app.use("/", mainRoutes)

//LocalHost Port
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
