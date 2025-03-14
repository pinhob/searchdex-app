import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

export function useSearchAbilities(searchQuery: string) {
  return useQuery({
    queryKey: ['abilities', searchQuery],
    queryFn: async () => {
      if (!searchQuery) return [];
      const response = await api.get(`/abilities/${searchQuery}`);
      return response.data;
    },
    enabled: false,
  });
}
