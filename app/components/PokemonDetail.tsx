import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
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
    <Wrapper>
      <Name>{name}</Name>
      <PokemonImage 
        source={{ uri: imageUrl }} 
        resizeMode="contain"
      />
      <AbilitiesTitle>Abilities:</AbilitiesTitle>
      <AbilitiesList abilities={abilities} />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  margin-top: 20px;
  width: 80%;
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
`;

const AbilitiesTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
