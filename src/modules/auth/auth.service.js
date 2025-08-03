import { hashSync } from "bcrypt";
import User from "../../DB/models/user.model.js"

export const register = async(req, res)=>{
    try {
        const {email, password, phone, userName, confirmedPassword}=req.body;

        if(password !== confirmedPassword){
            return res.status(201).json({success:false, massage:"passwords must match!"})
        }

        const hash =hashSync(password,8)
        
        const user = await User.create({email, password:hash, phone, userName})

        return res.status(201).json({success:true, results:{user}})
    } catch (error) {
        return res.status(500).json({success:false, stack:error.stack})
    }
}

export const login = async(req, res)=>{
    try {
        return res.status(201).json({success:true, results})
    } catch (error) {
        return res.status(500).json({success:false, stack:error.stack})
    }
}