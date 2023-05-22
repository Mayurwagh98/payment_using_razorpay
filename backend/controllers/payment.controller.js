import {instance} from "../server.js"


const checkout = async(req, res) =>{

    const options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };

      const order = await instance.orders.create(options);
      console.log(order)
      return res.status(200).json({
        status: true
      })

}

export default checkout