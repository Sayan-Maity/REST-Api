const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    id: {
        type: String,
        require: true,
        default: "#",
    },
    name: {
        type: String,
        require: true,
        default: "Unknown",
    },
    age: {
        type: String,
        require: true,
        default: "Unknown",
    },
    username: {
        type: String,
        require: true,
        default: "Unknown",
    },
}, {timestamps: true})



module.exports = mongoose.model("UserModel", UserSchema)
