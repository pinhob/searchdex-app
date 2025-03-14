import React from "react";
import styled from "../styles/styled";

interface Ability {
  name: string;
}

interface AbilitiesListProps {
  abilities: Ability[];
}

export default function AbilitiesList({ abilities }: AbilitiesListProps) {
  return (
    <AbilitiesContainer>
      {abilities.map((ability, index) => (
        <AbilityItem key={index}>
          <AbilityText>{ability.name}</AbilityText>
        </AbilityItem>
      ))}
    </AbilitiesContainer>
  );
}

const AbilitiesContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const AbilityItem = styled.View`
  background-color: #F2F7F2;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  align-items: center;
`;

const AbilityText = styled.Text`
  font-weight: bold;
  text-transform: capitalize;
`;
