import {instance} from "../server.js"
import {Payment} from "../models/payment.model.js"
import crypto from "crypto"

const checkout = async(req, res) =>{

  try {
    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
      };

      const order = await instance.orders.create(options);
      
      return res.status(200).json({
        status: true,
        order
      })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message:error.message
    })
  }

}

export const paymentConfirmation = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Storing in the database

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://127.0.0.1:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }

  console.log(req.body)

  return res.status(200).json({
    status: true
  })
};

export default checkout