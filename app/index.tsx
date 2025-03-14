import React, { useState } from "react";
import { View } from "react-native";
import SearchTitle from "./components/SearchTitle";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import Loading from "./components/Loading";
import AbilitiesList from "./components/AbilitiesList";
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

      {isLoading && <Loading />}

      {!isLoading && abilities?.length > 0 && (
        <AbilitiesList abilities={abilities} />
      )}
    </View>
  );
}