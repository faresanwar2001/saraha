import mongoose from "mongoose"

const ConnectedDb=async ()=>{
    await mongoose.connect(process.env.CONNECT_SERVER_MONGOOSE)
    .then(()=>console.log("connected database successfully"))
    .catch((error)=>console.log(`Connected Database failed ${error.message}`))
}

export default ConnectedDb