const mongoose = require('mongoose')



const personSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true,
        default : "Anonymous",
    },
    tech : {
        type : String,
        required : true,
    },
    status : {
        type : Boolean,
        required : true,
        default : false,
    }

})

module.exports = mongoose.model('Person', personSchema)