import checkout from "../controllers/payment.controller.js";
import express from "express"
import {paymentConfirmation} from "../controllers/payment.controller.js"

const router = express.Router()

router.route("/checkout").post(checkout)

router.route("/paymentconfirmation").post(paymentConfirmation);

export default router