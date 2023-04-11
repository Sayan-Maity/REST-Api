const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema ({
    task: {
        type: String,
        require: true,
    },
}, {timestamps: true})



module.exports = mongoose.model("Task", taskSchema)