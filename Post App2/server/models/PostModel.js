const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "Unknown"
    },
    description: {
        type: String,
        required: true,
        default: "Unknown"
    },
} )





module.exports = mongoose.model("PostModel", postSchema)