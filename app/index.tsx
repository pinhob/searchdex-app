import React, { useState } from "react";
import { View } from "react-native";
import SearchTitle from "./components/SearchTitle";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import Loading from "./components/Loading";
import PokemonDetail from "./components/PokemonDetail";
import { useSearchAbilities } from "./hooks/useSearchAbilities";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, refetch } = useSearchAbilities(searchQuery);

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

      {isLoading && <Loading />}

      {!isLoading && data?.name && (
        <PokemonDetail 
          name={data.name} 
          imageUrl={data.image} 
          abilities={data.abilities || []} 
        />
      )}
    </View>
  );
}