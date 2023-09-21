import { getTheTokenFromHeader } from "../utils/getTheTokenFromHeader.js"
import { verifyToken } from "../utils/verifyToken.js"

export const isLogin=(req,res,next)=>{
    const token = getTheTokenFromHeader(req)
    if(!token){
        res.json({message:'Token is not passed in the header'})
    }
    const verified=verifyToken(token)
    if(!verified){
        return res.json({message:'Invalid / Expired Token'})
    }else{
        req.userId = verified.id
        next()
    }
}