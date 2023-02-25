const User = require("../models/user");
const bcrypt = require("bcrypt");


exports.createUser= async (req,res)=>{
   // console.log(req.body);
    const user = await User.create({
        name:req.body.name,
        userId:req.body.userId,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,5)
    })

    if(!User){
        return res.status(400).send({message:"Invalid details"})
    }else{
        return res.status(201).send(user);
    }
}


exports.getAllUsers = async (req,res)=>{

    try{
        const users = await User.find({});

        return res.status(200).send(users);

    }catch(e){
            return res.status(500).send({message:"Internal server error"});
    }
}


exports.getUserById = async (req,res) =>{
    try{
        const id = req.params.id;

        const user = await User.find({_id:id});

        if(!User || !(user.lenght)){
            return res.status(400).send({message:"Invalid details"})
        }

        return res.status(200).send(user);
    }catch(e){
        return res.status(500).send({message:"Internal server error"+e}); 
    }
}