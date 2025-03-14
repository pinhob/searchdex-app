import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "../styles/styled";

interface SearchButtonProps {
  onPress: () => void;
}

export default function SearchButton({ onPress }: SearchButtonProps) {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>Buscar habilidades</ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: #F2F7F2;
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius.lg}px;
  margin-top: 10px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  shadow-color: ${props => props.theme.colors.shadow};
  shadow-offset: 0px 1px;
  elevation: 2;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md}px;
  font-weight: 500;
`;
