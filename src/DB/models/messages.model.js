import { model, Schema, Types } from "mongoose";
// Schema
const massagesSchema=new Schema({
    body:{
        type:String,
        required:true,
    },
    sender:{
        type:Types.ObjectId, ref:"User"
    },
    receiver:{
        type:Types.ObjectId, ref:"User"
    }

},{timestamps:true})

//Model
const Massages = model("Massages", massagesSchema)
export default Massages