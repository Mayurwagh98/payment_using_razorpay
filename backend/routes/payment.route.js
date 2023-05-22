import checkout from "../controllers/payment.controller.js";
import express from "express"

const paymentRouter = express.Router()

paymentRouter.route("/checkout").post(checkout)


export default paymentRouter