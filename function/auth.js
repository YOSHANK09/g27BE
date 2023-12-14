//creating functions for login and logout
const{Uaser} = require('../models/User')
//login function
const login = async(req,res)=>{
    const {email,password}=req.body
    const user = await user.find(email,password)
    if(user.length>0)
    {
        res.send ({status:true,user})
    }
    else
    {
        res.send({status:false,message:"Invalid Creds"})
    }
}

//logout function
const logout = (req,res)=>{
    res.send("LOGOUT PAGE")
}

//signup function
const signup =async(req,res)=>{
    const {name,email,password}=req.body
    const user = await User(name,email,password)
    user.save();
    req.send("hi i am signup")
}

module.exports={login,logout,signup}//export file