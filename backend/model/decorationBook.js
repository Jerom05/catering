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


const DecorationBook = mongoose.model('DecorationBook', schema)

module.exports =  DecorationBook
