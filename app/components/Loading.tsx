import React from "react";
import { Image, Text } from "react-native";

export default function Loading() {
  
  return (
    <>
      <Image 
        source={require("../../assets/images/pokeball.svg")} 
        style={{ width: 70, height: 70, marginTop: 20 }}
        alt="Loading abilities..."
      />
    </>
  )
}
