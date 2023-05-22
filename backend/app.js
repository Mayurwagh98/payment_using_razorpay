import express, { urlencoded } from "express"
import cors from "cors"
import router from "./routes/payment.route.js"
import {config} from "dotenv"
config({path:"./.env"})


const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(cors())

app.use("/api/payment", router)



app.get("/", (req, res) =>{
    return res.send("<h1>Working</h1>")
})

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);





export default app