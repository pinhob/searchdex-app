import React from "react";
import { Image } from "react-native";
import LogoImage from "../../assets/images/SearchDex.webp";

export default function Logo() {
  return (
    <>
      <Image
        source={LogoImage}
        alt="SearchDex"
      />
    </>
  );
};
