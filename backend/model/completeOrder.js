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
    cardNumber:String
})

const CompleteOrder = mongoose.model('CompleteOrder', schema)


module.exports =  CompleteOrder
