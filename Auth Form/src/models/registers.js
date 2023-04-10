const mongoose = require('mongoose')


// const nameSchema = new mongoose.Schema ({
//     firstname: {
//         type: String,
//     },
//     lastname: {
//         type: String,
//     },
// })

const registerSchema = new mongoose.Schema({
    // name: {
    //     type: nameSchema,
    //     required: true,
    // },
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true,

    },
    number: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    gender: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    confirmpassword: {
        type: String,
        required: true,

    }
}, {timestamps: true})


module.exports = new mongoose.model("Register", registerSchema)