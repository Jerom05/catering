const express = require('express')

const Order = require('../model/order')
const UserOrder = require('../model/userOrder')
const DecorationBook = require('../model/decorationBook')
const PhotographyBook = require('../model/photographyBook')
const CancelOrder = require('../model/cancelOrder')
const Feedback = require('../model/feedback')

const auth = require('../middleware/auth')
const router = express.Router()

// Order Food
router.post('/order',auth, async(req,res)=>{   
    const date = Date().toString()
    let order = new Order(req.body)
    let newUserOrder = new UserOrder(req.body)
    console.log(date)
    await order.save()
    await newUserOrder.save()
    res.send(order)
})

// Get All Order For Admin
router.get('/order', async(req,res)=>{
    const order = await Order.find()
    res.status(200).send(order)
})

//GeT my order
router.get('/myorder',auth,async (req,res)=>{
    const orders = await Order.find().sort({date:-1})
    const myorders = orders.filter(user=>user.user_id.toString()===req.user._id)
    
    res.status(200).send(myorders)
})

router.get('/cancelorder',auth,async (req,res)=>{
    const orders = await CancelOrder.find().sort({date:-1})
    const myorders = orders.filter(user=>user.user_id.toString()===req.user._id)
    
    res.status(200).send(myorders)
})


// Decoration Booking 
router.post('/bookDecoration',async (req,res)=>{
    const bookingObj = req.body
    let booking = new DecorationBook(bookingObj)
    await booking.save()
    res.status(200).send(booking)
})

router.get('/bookDecoration', async(req,res)=>{
    const order = await DecorationBook.find()
    res.status(200).send(order)
})

// Book PhotoGrapahy
router.post('/bookPhotography',async (req,res)=>{
    const bookingObj = req.body
    let booking = new PhotographyBook(bookingObj)
    await booking.save()
    res.status(200).send(booking)
})


//Feedback
router.post('/feedback', async(req,res)=>{
    const FeedbackObj = req.body
    let feedback = new Feedback(FeedbackObj)
    await feedback.save()
    res.status(200).send(feedback)
})

router.get('/feedback', async(req,res)=>{
    const feedback = await Feedback.find()
    const re = feedback.filter(r=>(
        r.approve===true
    ))
    res.status(200).send(feedback)
}) 
router.put('/feedback/:id', async(req,res)=>{
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, {
        approve:true
    },
    { new: true })
    
    res.status(200).send(feedback)
}) 


module.exports = router