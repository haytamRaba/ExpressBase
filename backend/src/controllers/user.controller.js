import {User} from "../models/user.model.js"

const registerUser = async (req,res)=>{
    try{
        const {username,email,password}=req.body;

        if(!username || !email || !password){
            return res.status(400).json({
                message:"all fields are required!"
            })
        }

        const isExisting = await User.findOne({email:email.toLowerCase()});
        if(isExisting){
            return res.status(400).json({
                message:"user already exist!"
            })
        }

        const user=await User.create({
            username,
            email:email.toLowerCase(),
            password

        });
        res.status(201).json({message:"user registred",
            user:{id:user._id, email:user.email}
        })
    }catch(error){
        res.status(500).json({message:"internal server error",error:error.message});

    }
}
export{
    registerUser
}