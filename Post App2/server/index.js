const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors")
const Post = require( "./models/PostModel")



// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())



// Routes
app.get("/", (req, res) => {
    res.send("You have landed on Sayan's Server !!")
})

app.post("/create", async (req,res) => {
    // console.log("Post Created")

    const {
        title,
        description,
    } = req.body

    try {
        const newPost = await Post({
            title,
            description,
        }).save()

        res.status(201).json(newPost)
    }
    catch (err) {
        console.log("Error: ", err)
    }
})

app.get("/posts", async (req, res) => {

    try {
        const posts = await Post.find()
        res.status(201).json(posts)
    }
    catch (err) {
        console.log("Error: ", err)
        res.status(400).send("Error: ", err)
    }
})

app.delete("/delete/:id", (req, res) => {
    const deletePost = Post.findByIdAndDelete({_id: req.params.id})
    .then ((res) => {
        console.log(res)
    })
    .catch ((err) => {
        console.log(err)
    })
})


app.put("/update/:id", (req, res) => {

    const updatePost = Post.findByIdAndUpdate({
        _id: req.params.id},{
        title: req.body.title,
        description: req.body.description,
    })
    .then ((res) => {
        // console.log(res)
    })
    .catch ((err) => {
        console.log(err)
    })
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
    console.log(`Server started on port ${PORT}`)
})
