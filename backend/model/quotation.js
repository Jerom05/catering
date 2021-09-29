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
        guest:String,
        food:String,
        cutlery:String,
        waiter:String,
        button:Boolean

})


const Quotation = mongoose.model('Quotation', schema)

module.exports =  Quotation
