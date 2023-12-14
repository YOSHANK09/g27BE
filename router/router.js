const express=require('express')//import express
const router=express.Router();//create router

const{authrouter}=require('./auth')
const{noterouter}=require('./note')

router.use(authrouter)
router.use(noterouter)


module.exports={router}//exporting router