import { hashSync } from "bcrypt";
import User from "../../DB/models/user.model.js"
import bcrypt from "bcryptjs";

// Register
export const register = async(req, res)=>{
    try {
        const {email, password, phone, userName, confirmedPassword}=req.body;

        if(password !== confirmedPassword) return res.status(500).json({success:false, message:"passwords not matched!"})

        const hashPassword=  hashSync(password, 8)

        const user =await User.create({email, password:hashPassword, phone, userName})

        return res.status(200).json({success:true, results:{user}})
    } catch (error) {
        return res.status(500).json({success:false, stack:error.stack})
    }
}

// Login
export const login = async(req, res)=>{
    try {
        // Check user
        const {email, password}=req.body

        const user = await User.findOne({email})

        if(!user) return res.status(404).json({success:false, message:"Invalid Email!"})

        // Check password
        const matchPassword=bcrypt.compareSync(password, user.password)

        if(!matchPassword) if(!user) return res.status(404).json({success:false, message:"Invalid Password!"})
        return res.status(200).json({success:true, results:{user}})
    } catch (error) {
        return res.status(500).json({success:false, stack:error.stack})
    }
}