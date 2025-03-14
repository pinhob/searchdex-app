import React, { useState } from "react";
import { View } from "react-native";
import SearchTitle from "./components/SearchTitle";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
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
    </View>
  );
}