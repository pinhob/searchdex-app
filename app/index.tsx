import React, { useState } from "react";
import SearchTitle from "./components/SearchTitle";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import Loading from "./components/Loading";
import PokemonDetail from "./components/PokemonDetail";
import { useSearchAbilities } from "./hooks/useSearchAbilities";
import { ThemeProvider } from "./styles/styled";
import { theme } from "./styles/theme";
import styled from "./styles/styled";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, refetch } = useSearchAbilities(searchQuery);

  const handleSearch = () => {
    refetch();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
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
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;