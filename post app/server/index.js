const express = require("express")
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3001
const cors = require("cors")
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const routes = require("./routes/UserRoutes")



// middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/api", routes)

app.get("/", (req, res) => {
    res.send("You landed on the fake serverless server !!")
})



// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err)
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})