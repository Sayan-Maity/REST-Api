const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
}, {timestamps: true})



module.exports = mongoose.model("UserModel", UserSchema)
