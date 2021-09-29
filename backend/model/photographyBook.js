const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: String,
    userid:mongoose.Schema.Types.ObjectId,
    decorationType: String,
    price:Number,
    eventDate: Object,
    bookingDate: String,
    address:String,
    mobile:String,
    email: String
})


const PhotographyBook = mongoose.model('PhotographyBook', schema)

module.exports =  PhotographyBook
