import React from "react";
import { Button, Image, Text, VStack } from "@chakra-ui/react";

const Card = ({ amount, img, handleCheckout }) => {
  return (
    <div>
      {" "}
      <VStack>
        <Image src={img} boxSize={"64"} objectFit="cover" />
        <Text>₹{amount}</Text>
        <Button onClick={() => handleCheckout(amount)}>Buy Now</Button>
      </VStack>
    </div>
  );
};

export default Card;
