const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:true,
        default:()=>Date.now()
    },
    userTypes:{
        type:String,
        require:true,
        default: "CUSTOMER"
    },
    userStatus:{
        type:String,
        require:true,
        default:"APPROVED"
    }
})

module.exports = mongoose.model("User", userSchema);