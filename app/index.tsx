import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchTitle from "./components/SearchTitle";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import { useSearchAbilities } from "./hooks/useSearchAbilities";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: abilities, isLoading, refetch } = useSearchAbilities(searchQuery);

  const handleSearch = () => {
    refetch();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchTitle />
      <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
      <SearchButton onPress={handleSearch} />

      {isLoading && (
        <Text style={{ marginTop: 20 }}>Loading abilities...</Text>
      )}

      {!isLoading && abilities?.length > 0 && (
        <View style={{ marginTop: 20 }}>
          {abilities.map((ability: { name: string }, index: number) => (
            <Text key={index} style={{ marginVertical: 5 }}>
              {ability.name}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}