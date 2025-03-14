import React from "react";
import { TextInput } from "react-native";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchInput ({ value, onChangeText }: SearchInputProps) {
  return (
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 10,
        width: '80%',
      }}
      placeholder="Type your search query"
      value={value}
      onChangeText={onChangeText}
    />
  );
};
