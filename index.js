require('dotenv').config()//to use env file

const express = require('express')//import express
const {router} = require('./router/router')//import/use router.js
const { connectToMongo } = require('./db');
const app = express()//create app
const port = process.env.PORT;//use env file

connectToMongo()
app.use(express.json())
app.use(router);//app using router file
//http://localhost:3000/hii


app.listen(port,()=>{
    console.log("APP STARTED")
})