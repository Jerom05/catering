const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const config = require('config')
const {User} = require('../model/user')
const Admin= require('../model/admin')
const { invalid } = require('joi')
const nodemailer = require('nodemailer')
const atob =require('atob')
const btoa =require('btoa')
const lodash = require('lodash')
const UserCode = require('../model/userCode')

router.post('/', async(req,res)=>{
    // const {error} = validation(req.body)
    // if (error) return res.status(400).send(error.details[0].message);

    
    
    let user = await User.findOne({email:req.body.email})
    if(!user) {
        user = await User.findOne({phone:req.body.email})
        if(!user) return res.status(400).send('Invalid Email or Password')
    }
    
    const validPassword = await bcrypt.compare( req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Invalid Password')
    
    const token = jwt.sign({name:user.name, _id:user._id}, config.get('key'))
    
    res
        .status(200)
        .send(token)
        
})

router.post('/admin', async(req,res)=>{

    let admin = await Admin.findOne({username:req.body.name})
    console.log('a',admin)
    const validPassword = req.body.password === admin.password
    if(!validPassword) return res.status(400).send('Invalid Password.')
    
    const token = jwt.sign({name:admin.name}, config.get('key'))
    
    res
        .status(200)
        .send(token)
        
})


router.post('/ca', async(req,res)=>{

   let admin = new Admin({
       username: req.body.name,
       password: req.body.password,
       admin: true
   })

   await admin.save()
   const token = jwt.sign({name:admin.name}, config.get('key'))
    res
        .status(200)
        .send(token)
        
})

const validation = (value)=>{
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    })
    return schema.validate(value)
}



const parseForgotPasswordUrl = async (req, res, next, param) => {
  console.log("a",param)
    try {
      // logic to invalided the link after 30 min
      let prevTime= atob(param.split('unix=').pop())
      let currTime = Date.now()
      let duration = Math.ceil((currTime - prevTime) / (1000 * 60))
      if (duration > 30) {
        res.status(410).json({ msg: 'The link has been expired' })
      } else {
        req.email  = atob(param.slice(param.indexOf('=')+1,param.indexOf('_')))
        console.log("emai",req.email)
        next()
      }
    } catch (err) {
      console.error(err)
      return res.status(500).json({
        error: err,
        msg:"Internal Server Error"
      })
    }
  }

router.post('/forgot-password', async(req,res)=>{
    const {email} = req.body
    let user = await User.findOne({
        "email": email
      })
      
      if(!user){
        return res.status(404).json({
          msg: "Email not found"
        })
      }
      const random = Math.floor(1000 + Math.random() * 9000);
      user = await User.findByIdAndUpdate(user._id,{
        code:random,

      })

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "Baanthaii.Catering.BD@gmail.com",
          pass: "BaanthaiiR@N@",
          // user: "baanthaii.rana@gmail.com",
          // pass: "baanthaii321",
        },
      });

    const enCryptEmail = btoa(email)
    const timeStamp = btoa(Date.now().toString())
      
    const link = `https://baanthaii-rana.netlify.app/reset-password/:email=${enCryptEmail}_unix=${timeStamp}`
   
    const emailBody = `
      <h3>Reset Password</h3>
      <h4>Hey ${user.name}</h4>
      <p>Your password reset code: ${random}</p>
    `
    // <p>Please reset your password <h2><a href="${link}">Password reset link.</a></h2><br>Remember the link will be destroyed after 30 min</p>

      let mailOptions = {
        from: 'baanthaii.rana@gmail.com',
        to:  email,
        subject: 'Forgot Password',
        html: emailBody,
      };
      
      transporter.sendMail(mailOptions, async function (err, info) {
        if (err) {
          res.json({
              msg:"msg failed to sent"
          });
        } else {
          const usC = new UserCode({
            email:email,
            code: random
          })
          await usC.save()
          res.json({
              msg:"Email has sent"
          });
        }
      });
})


router.post('/reset-password/:param', async(req,res)=>{
  console.log('r')
  // let email = null
  //   try {
  //     // logic to invalided the link after 30 min
  //     let prevTime= atob(req.params.param.split('unix=').pop())
  //     let currTime = Date.now()
  //     let duration = Math.ceil((currTime - prevTime) / (1000 * 60))
  //     if (duration > 30) {
  //       res.status(410).json({ msg: 'The link has been expired' })
  //     } else {
  //       email  = atob(req.params.param.slice(req.params.param.indexOf('=')+1,req.params.param.indexOf('_')))
  //       console.log("emai",email)
  //       // next()
        
  //     }
  //   } catch (err) {
  //     console.error(err)
  //     return res.status(500).json({
  //       error: err,
  //       msg:"Internal Server Error"
  //     })
  //   }
  const email = req.params.param
    let user = await User.findOne({
    "email": email
    // "email": req.email
  })
 
  try {
    // const usC = await UserCode.findOne({
    //   "email": email
    // })

    if(user.code !== req.body.code){
      return res.status(400).json({
        error: "code not macth"
      })
    }

    console.log(user)
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    console.log(password)
    user.password = password
    await user.save()
    res.json({
      msg: "Password update successfully"
    })

  } catch (err) {
    console.log(err)
    return res.status(400).json({
      error: "password failed to reset"
    })
    
  }
})

router.get('/usc',async(req,res)=>{
  const r = await UserCode.find()
  res.send(r)
})

module.exports = router