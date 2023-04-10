const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const Person = require("./routes/person")


// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/person", Person)


app.get('/', (req, res) => {
    res.send("You have landed on Sayan's Server !")
})


// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err)
})




app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`)
})