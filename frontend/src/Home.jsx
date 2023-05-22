import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  let handleCheckout = async (amount) => {
    try {
      let {
        data: { order },
      } = await axios.post(`http://localhost:5000/api/payment/checkout`, {
        amount,
      });
      const {
        data: { key },
      } = await axios.get("http://www.localhost:5000/api/getkey");

      const options = {
        key: key, // fetching key from backend, using api
        amount: order.amount, // getting amount from line 10
        currency: "INR",
        name: "Mayur Wagh",
        description: "Payment using Razorpay",
        image: "https://avatars.githubusercontent.com/u/69896733?v=4", // profile pic
        order_id: order.id,
        callback_url: "http://localhost:5000/api/payment/paymentconfirmation", // backend api to redirect once the payment is done
        prefill: {
          name: "Mayur wagh",
          email: "mayur.wagh@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3d2121",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Box>
        <Stack
          h={"100vh"}
          alignItems="center"
          justifyContent="center"
          direction={["column", "row"]}
        >
          <Card
            amount={5000}
            img={
              "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"
            }
            handleCheckout={handleCheckout}
          />
          <Card
            amount={3000}
            img={
              "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
            }
            handleCheckout={handleCheckout}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
