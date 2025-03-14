import React from "react";
import { Button } from "react-native";

interface SearchButtonProps {
  onPress: () => void;
}

export default function SearchButton ({ onPress }: SearchButtonProps) {
  return <Button title="Search" onPress={onPress} />;
};
