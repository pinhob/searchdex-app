import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AbilitiesList from "./AbilitiesList";

interface Ability {
  name: string;
}

interface PokemonDetailProps {
  name: string;
  imageUrl: string;
  abilities: Ability[];
}

export default function PokemonDetail({ name, imageUrl, abilities }: PokemonDetailProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{name}</Text>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
        resizeMode="contain"
      />
      <Text style={styles.abilitiesTitle}>Abilities:</Text>
      <AbilitiesList abilities={abilities} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 20,
    width: "80%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  abilitiesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  }
});
