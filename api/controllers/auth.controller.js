import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup=async(req,res,next)=>{
    try {
        const{username,email,password}=req.body
        if(!username || !email || !password){
            next(errorHandler(400,"Allfields are required"))
        }
        const hashedPassword=bcryptjs.hashSync(password,10)

       const user= await User.create({username,email,password:hashedPassword})
       res.json({message:"User created"})
    } catch (error) {
        next(error)
    }
}