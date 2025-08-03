import ConnectedDb from "./DB/connection.db.js"
import router from "./modules/auth/auth.controller.js"

const bootstrap = async (app, express)=>{
    // Connected DB
    await ConnectedDb()
    
    // Parse
    app.use(express.json())

    // Router
    app.use("/auth", router)

}
export default bootstrap