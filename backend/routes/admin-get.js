const express = require('express')
const router = express()
const Order = require('../model/order')
const CompleteOrder = require('../model/completeOrder')
const CancelOrder = require('../model/cancelOrder')
const DecorationBook = require('../model/decorationBook')
const PhotographyBook = require('../model/photographyBook')
const Quotation = require('../model/quotation')

const { User } = require('../model/user')
const Contact = require('../model/contact')

router.get('/orders', async(req,res)=>{
    const order = await Order.find()
    res.status(200).send(order)
})

router.get('/users', async(req,res)=>{
    const users = await User.find().select("-password")
    res.status(200).send(users)
})

router.get('/cancelorder', async(req,res)=>{
    const order = await CancelOrder.find()
    res.status(200).send(order)
})

router.get('/completeorder', async(req,res)=>{
    const order = await CompleteOrder.find()
    res.status(200).send(order)
})


router.get('/decorationbook', async(req,res)=>{
    const order = await DecorationBook.find()
    res.status(200).send(order)
})

router.get('/photographybook', async(req,res)=>{
    const order = await PhotographyBook.find()
    res.status(200).send(order)
})

router.get('/quotation', async(req,res)=>{
    const order = await Quotation.find()
    res.status(200).send(order)
})

router.get('/contact', async(req,res)=>{
    const order = await Contact.find()
    res.status(200).send(order)
})


module.exports = router 


