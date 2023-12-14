const express=require('express')//import express
const authrouter=express.Router();//create router
const {login,logout, signup}=require('../function/auth')//import function from auth
const {checkCreds} = require('../middleware/checksCreds')
authrouter.get('/login',login)
authrouter.get('/logout',logout)
authrouter.post('/signup',checkCreds,signup)

module.exports={authrouter}