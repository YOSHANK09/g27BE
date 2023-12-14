//creating function for create and delete note

//create function
const {NOTE} = require('../models/NOTE')
const createnote=async(req,res)=>{
    const{desc,title,status}=Note
    const note = await Note({desc,title,status})
    note.save();
    res.send("hii i am createnote")
}

const searchnote=async(req,res)=>{
    const{title}=Note
    const note = await Note.find({title})
    res.send({status:true,notes})
}

//delete function
const deletenote=(req,res)=>{
    res.send("DELETE NOTE")
}

module.exports={createnote,deletenote,searchnote}//export file