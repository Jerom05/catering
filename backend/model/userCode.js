const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    email: String,
    code: String
})

const UserCode = mongoose.model('UserCode', schema)

module.exports =  UserCode
