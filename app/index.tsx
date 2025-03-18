import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import Loading from "./components/Loading";
import PokemonDetail from "./components/PokemonDetail";
import { useSearchAbilities } from "./hooks/useSearchAbilities";
import { ThemeProvider } from "./styles/styled";
import { theme } from "./styles/theme";
import styled from "./styles/styled";
import ErrorDetailsCard from "./components/ErrorDetailsCard";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError, refetch } = useSearchAbilities(searchQuery);

  const handleSearch = () => {
    refetch();
  };

  const { data: pokemonsList } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.get('/pokemons').then(response => response.data)
  }
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Logo />
        <SearchInput 
          value={searchQuery} 
          onChangeText={setSearchQuery} 
          onSearch={handleSearch}
          pokemonsList={pokemonsList}
        />
        <SearchButton onPress={handleSearch} />

        {isLoading && <Loading />}

        {!isLoading && isError && <ErrorDetailsCard />}

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
  background-color: ${(props: { theme: { colors: { background: any; }; }; }) => props.theme.colors.background};
`;