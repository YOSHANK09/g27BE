const mongooose = require('mongoose');

const noteschema={
    title:String,
    desc:String,
    status:String,
    //date:Date.now()
}

const NOTE = mongooose.model('NOTE',noteschema);

module.exports={NOTE}