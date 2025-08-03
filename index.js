import bootstrap from "./src/app.controller.js"
import express from "express"

const app = express()

// Bootstrap
await bootstrap(app, express)

const port =3000

app.listen(port, ()=> console.log(`Connected on ${port}`))