import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

interface PokemonData {
  name: string;
  image: string;
  abilities: Array<{ name: string }>;
}

export function useSearchAbilities(searchQuery: string) {
  return useQuery({
    queryKey: ['abilities', searchQuery],
    queryFn: async (): Promise<PokemonData | null> => {
      if (!searchQuery) return null;
      const response = await api.get(`/abilities/${searchQuery}`);
      return response.data;
    },
    enabled: false,
  });
}
