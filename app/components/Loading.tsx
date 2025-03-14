import React, { useEffect } from "react";
import { Image, Text, Animated, Easing } from "react-native";

export default function Loading() {
  const rotateAnim = new Animated.Value(0);
  
  const startShakeAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 400,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  
  useEffect(() => {
    startShakeAnimation();
  }, []);
  
  const rotation = rotateAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-10deg', '0deg', '10deg']
  });
  
  return (
    <>
      <Animated.Image 
        source={require("../../assets/images/pokeball.svg")} 
        style={{ 
          width: 70, 
          height: 70, 
          marginTop: 20,
          transform: [{ rotate: rotation }]
        }}
        alt="Carregando habilidades..."
      />
      <Text>Carregando...</Text>
    </>
  )
}
