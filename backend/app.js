import express from "express"
import cors from "cors"
import paymentRouter from "./routes/payment.route.js"
import {config} from "dotenv"
config({path:"./.env"})


const app = express()

app.use(cors())

app.use("/api/payment", paymentRouter)



app.get("/", (req, res) =>{
    return res.send("<h1>Working</h1>")
})





export default app