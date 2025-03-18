import React, { useEffect, useState } from "react";
import { View, TextInput as RNTextInput, Keyboard } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch?: () => void;
  pokemonsList: string[];
}

export default function SearchInput({ value, onChangeText, onSearch, pokemonsList }: SearchInputProps) { 
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredPokemons, setFilteredPokemons] = useState<string[]>([]);

  useEffect(() => {
    if (value.trim() === "" ) {
      setFilteredPokemons([]);
      setShowSuggestions(false);
      return;
    }

    if (pokemonsList && pokemonsList.length > 0) {
      const fullMatch = pokemonsList.some((pokemon) => pokemon.toLowerCase() === value.toLowerCase());

      if (fullMatch) {
        setShowSuggestions(false);
        setFilteredPokemons([]);
        return;
      }

      const filtered = pokemonsList.filter((pokemon) => 
        pokemon.toLowerCase().includes(value.toLowerCase())
      )

      const firstFivePokemons = filtered.slice(0, 5);

      setFilteredPokemons(firstFivePokemons);
      setShowSuggestions(firstFivePokemons.length > 0);
    }
  }, [value, pokemonsList])

  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Enter' && onSearch) {
      onSearch();
      Keyboard.dismiss();
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (pokemon: string) => {
    onChangeText(pokemon);
    setShowSuggestions(false);
    Keyboard.dismiss();

    if (onSearch) {
      setTimeout(() => {
        onSearch();
      }, 0);
    }
  }

  return (
    <SearchContainer>
      <InputContainer>
        <SearchIcon name="search" size={20} color="#757575" />
        <TextInput
          placeholder="Pesquise um Pokémon..."
          placeholderTextColor={(props: { theme: { colors: { lightText: any; }; }; }) => props.theme.colors.lightText}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSearch}
          onKeyPress={handleKeyPress}
          onFocus={() => value.trim() !== '' && setShowSuggestions(true)}
          returnKeyType="search"
        />
      </InputContainer>
      {showSuggestions && (
        <SuggestionsContainer>
          {
            filteredPokemons.map((pokemon, index) => (
              <SuggestionItem
                key={index}
                onPress={() => handleSelectSuggestion(pokemon)}
              >
                <SuggestionText>{pokemon}</SuggestionText>
              </SuggestionItem>
            ))
          }
        </SuggestionsContainer>
      )}
    </SearchContainer>
  );
}
const SearchContainer = styled.View`
  width: 85%;
  max-width: 500px;
  z-index: 1;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: ${(props: { theme: { colors: { background: any; }; }; }) => props.theme.colors.background};
  margin: 20px 0 0 0;
  padding: 0 16px;
  border-radius: ${(props: { theme: { borderRadius: { lg: any; }; }; }) => props.theme.borderRadius.lg}px;
  border-width: 1px;
  border-color: #dfe1e5;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  shadow-color: ${(props: { theme: { colors: { shadow: any; }; }; }) => props.theme.colors.shadow};
  shadow-offset: 0px 1px;
  elevation: 2;
`;

const SearchIcon = styled(Ionicons)`
  margin-right: 8px;
`;

const TextInput = styled(RNTextInput)`
  flex: 1;
  font-size: ${(props: { theme: { fontSizes: { md: any; }; }; }) => props.theme.fontSizes.md}px;
  color: ${(props: { theme: { colors: { text: any; }; }; }) => props.theme.colors.text};
`;

const SuggestionsContainer = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  border-width: 1px;
  border-color: #dfe1e5;
  margin-top: 4px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  shadow-color: ${(props: { theme: { colors: { shadow: any; }; }; }) => props.theme.colors.shadow};
  shadow-offset: 0px 2px;
  elevation: 3;
  max-height: 200px;
`;

const SuggestionItem = styled.TouchableOpacity`
  padding: 12px 16px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

const SuggestionText = styled.Text`
  font-size: 16px;
  color: ${(props: { theme: { colors: { text: any; }; }; }) => props.theme.colors.text};
`;