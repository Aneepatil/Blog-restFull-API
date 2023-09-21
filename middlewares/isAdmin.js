import { UserModel } from "../models/UserModel.js"

export const isAdmin=async(req,res,next)=>{
    console.log(req)
    const user= await UserModel.findById(req.userId)
    if(!user.isAdmin){
        return res.json({message:"Access Denied, Admin Only..."})
    }
    next()
}