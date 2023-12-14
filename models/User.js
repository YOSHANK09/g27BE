const mongooose = require('mongoose');

const userschema={
    name:String,
    email:String,
    password:String,
}

const User = mongooose.model('User',userschema);

module.exports={User}