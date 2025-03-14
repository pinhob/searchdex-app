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
        style={{ width: 270, height: 200 }} 
        resizeMode="contain"
      />
      <AbilitiesWrapper>
        <AbilitiesTitle>Habilidades</AbilitiesTitle>
        <AbilitiesList abilities={abilities} />
      </AbilitiesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  margin-top: 20px;
  min-width: 300px;
  background-color: #FABC05;
  border-radius: 12px;
  padding: 20px 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const Name = styled.Text`
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  background-color: #FDE49B;
  padding: ${props => props.theme.spacing.sm}px 0;
  border-radius: ${props => props.theme.borderRadius.md}px;
  margin-bottom: 15px;
  text-transform: capitalize;
`;

const PokemonImage = styled.Image`
  margin-bottom: 20px;
  background-color: #4385F5;
  border-radius: ${props => props.theme.borderRadius.lg}px;
`;

const AbilitiesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  align-self: flex-start;
  margin-left: 10px;
`;


const AbilitiesWrapper = styled.View`
  width: 100%;
  background-color: #FDE49B;
  padding: ${props => props.theme.spacing.md}px 0;
  border-radius: ${props => props.theme.borderRadius.md}px;
`; 