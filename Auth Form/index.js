const express = require("express")
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const path = require("path")
const Register = require("./src/models/registers")
const Login = require("./src/models/logins")


// Middleware -->
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


// Routes -->
// Default route :
app.get("/", (req, res) => {
    res.render("index")
})

// Main pages routes :
app.get("/", (req, res) => {
    res.status(200).render("index")
})
app.get("/login", (req, res) => {
    res.status(200).render("login")
})
app.get("/register", (req, res) => {
    res.status(200).render("register")
})
app.get("/dashboard", (req, res) => {
    res.status(200).render("dashboard")
})

// CRUD routes :
// Register post route :
app.post("/register", async (req, res) => {
    const {
        firstname,
        lastname,
        number,
        email,
        gender,
        password,
        confirmpassword,
    } = req.body
    
    if (password !== confirmpassword) {
        res.status(400).send("Error: Passwords do not match !")
        return
    }

    try{
        const postRegister = await new Register ({
            firstname,
            lastname,
            number,
            email,
            gender,
            password,
            confirmpassword,
        }).save()
        
        // res.status(201).json(postRegister)
        res.status(201).render("login")
    }
    catch(err) {
        res.status(400).send("Error", err)
    }
})


// login post route :
app.post("/login", async (req, res) => {
    const {
        email,
        password,
    }=req.body

    try {
        const postLogin = await new Login({
            email,
            password,
        }).save()

        const userContent = await Register.findOne({email}) // find the email and password from user's register data
        if(userContent.password === password && userContent.email === email) {
            // res.status(201).json(postLogin)
            res.status(201).render("dashboard")
        }
        else {
            res.status(400).send("Please check email or password again !")
        }

    }
    catch(err) {
        res.status(400).send("Error", err)
    }
})





// Database connection -->
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