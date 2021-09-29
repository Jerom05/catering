const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        name:String,
        mobile:String,
        email:String,
        event:String,
        year:String,
        day:String,
        month:String,
        description:String,

})


const Contact = mongoose.model('Contact', schema)

module.exports =  Contact
