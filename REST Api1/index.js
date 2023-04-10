const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const person = require('./routes/person')
const app = express()
dotenv.config();


// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/person", person)
app.get('/', (req, res) => {
    res.send("You have landed to Sayan's Server :), Well don't worry, just Enjoy !!")
})


// Database connection
mongoose.connect(process.env.DB_CONNECT)
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err)
})


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})