import { model, Schema } from "mongoose";

// Schema
const userSchema=new Schema({
    userName:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:[true, "Email is exists!"],
        required:true,
         match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email"]
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["male", "female"],
    },
    isActivated:{
        type:Boolean,
    }
},{timestamps:true})

//Model
const User = model("User", userSchema)

export default User;