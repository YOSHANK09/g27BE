const express = require('express')
const noterouter = express.Router();
const{createnote , deletenote , searchnote} = require('../function/note')
const {isLogin} = require('../middleware/isLogin')
noterouter.post('/createnote' , isLogin,createnote)
noterouter.get('/deletenote' , isLogin,deletenote)
noterouter.get('/searchnote' , isLogin,searchnote)

module.exports = {noterouter}