const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: String,
    password: String,
    admin: Boolean
})

const Admin = mongoose.model('Admin', schema)

module.exports =  Admin
