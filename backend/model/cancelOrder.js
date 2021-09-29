const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    user_id: mongoose.Schema.Types.ObjectId,
    totalPrice: Number,
    cartItem: Array,
    date: String,
    address:String,
    eventDate: Object,
    mobile:String,
    payment:String,
    transactionId: String,
    year:String,
    day:String,
    month:String,
    cardNumber:String,
    messege:String
})

const CancelOrder = mongoose.model('CancelOrder', schema)

module.exports =  CancelOrder
