const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    comment: String,
    rating: Number,
    date: String,
    approve:Boolean
})


const Feedback = mongoose.model('Feedback', schema)

module.exports =  Feedback
