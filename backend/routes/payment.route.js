import checkout from "../controllers/payment.controller.js";
import express from "express"
import {paymentConfirmation} from "../controllers/payment.controller.js"

const router = express.Router()

router.post("/checkout",checkout)

router.post("/paymentconfirmation", paymentConfirmation)

export default router