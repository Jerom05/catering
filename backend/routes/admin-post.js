const express = require('express')
const router = express.Router()
const Order = require('../model/order')
const CompleteOrder = require('../model/completeOrder')
const CancelOrder = require('../model/cancelOrder')
const Quotation = require('../model/quotation')
const { User } = require('../model/user')
const Contact = require('../model/contact')

// Admin Order Action
router.post('/complete/:id', async(req,res)=>{
    let complete =null
    const order = await Order.findByIdAndRemove(req.params.id)
    complete = new CompleteOrder({
        name:order.name,
        user_id: order.user_id,
        totalPrice: order.totalPrice,
        cartItem: order.cartItem,
        date: order.date,
        address:order.address,
        mobile:order.mobile,
        payment:order.payment,
        transactionId: order.transactionId

    })
    await complete.save()
    res.status(200).send(complete)
})

router.post('/cancel/:id', async(req,res)=>{
    let cancel =null
    const order = await Order.findByIdAndRemove(req.params.id)
    cancel = new CancelOrder({
        name:order.name,
        user_id: order.user_id,
        totalPrice: order.totalPrice,
        cartItem: order.cartItem,
        date: order.date,
        address:order.address,
        mobile:order.mobile,
        payment:order.payment,
        transactionId: order.transactionId,
        year: order.year,
        day: order.day,
        month: order.month,
    })
    await cancel.save()
    res.status(200).send(cancel)
})



router.put('/cancel/:id', async (req, res) => {
    const movie = await CancelOrder.findByIdAndUpdate(
      req.params.id,
      {
        messege:req.body.messege
      },
      { new: true }
    );
    if (!movie)
      return res.status(404).send("The movie with the given ID was not found.");
    res.send(movie);
  });

router.delete('/cancel', async (req, res) => {
    await CancelOrder.deleteMany({})
    res.send("delete");
  });


// Delete From Completed Orders
router.post('/complete-delete/:id', async(req,res)=>{
    const order = await CompleteOrder.findByIdAndRemove(req.params.id)
    if(!order) return res.status(400).send("Item not found")
    res.status(200).send(order)
})

// Delete From Canceled Orders
router.post('/cancel-delete/:id', async(req,res)=>{
    const order = await CancelOrder.findByIdAndRemove(req.params.id)
    if(!order) return res.status(400).send("Item not found")
    res.status(200).send(order)
})

//Delete user from Amdin
router.post('/delete-user/:id', async(req,res)=>{
    const user = await User.findByIdAndRemove(req.params.id)
    if(!user) return res.status(400).send("Item not found")
    res.status(200).send(user)
})


//Add a quotation
router.post('/quotation',async (req,res)=>{
    const bookingObj = req.body
    let booking = new Quotation(bookingObj)
    await booking.save()
    res.status(200).send(booking)
})

// Add a Contact
router.post('/contact',async (req,res)=>{
    const bookingObj = req.body
    let booking = new Contact(bookingObj)
    await booking.save()
    res.status(200).send(booking)
})





module.exports = router