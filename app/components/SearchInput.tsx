import React from "react";
import { View, TextInput as RNTextInput, Keyboard } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch?: () => void;
}

export default function SearchInput({ value, onChangeText, onSearch }: SearchInputProps) { 
  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Enter' && onSearch) {
      onSearch();
      Keyboard.dismiss();
    }
  };

  return (
    <InputContainer>
      <SearchIcon name="search" size={20} color="#757575" />
      <TextInput
        placeholder="Pesquise um Pokémon..."
        placeholderTextColor={props => props.theme.colors.lightText}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSearch}
        onKeyPress={handleKeyPress}
        returnKeyType="search"
      />
    </InputContainer>
  );
}

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 85%;
  max-width: 500px;
  height: 44px;
  background-color: ${props => props.theme.colors.background};
  margin: 20px 0;
  padding: 0 16px;
  border-radius: ${props => props.theme.borderRadius.lg}px;
  border-width: 1px;
  border-color: #dfe1e5;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  shadow-color: ${props => props.theme.colors.shadow};
  shadow-offset: 0px 1px;
  elevation: 2;
`;

const SearchIcon = styled(Ionicons)`
  margin-right: 8px;
`;

const TextInput = styled(RNTextInput)`
  flex: 1;
  font-size: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.theme.colors.text};
`;
