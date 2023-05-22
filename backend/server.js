import app from "./app.js"
import connectDb from "./configs/db.js"
import Razorpay from "razorpay";
import {config} from "dotenv"

connectDb({path: "./configs/db.js"})

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,

  });


app.listen(process.env.port,() =>{
    console.log(`server running on ${process.env.PORT}`)
})