import { useState, useCallback } from 'react';
import { getAPIUrl } from './useGetAPIUrl';

interface Head {
  id: string;
  firstName: string;
  lastName: string;
}

interface Trait {
  id: string;
  name: string;
}

interface House {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Head[];
  traits: Trait[];
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: number | null;
  previousPage: number | null;
}

interface APIResponse {
  data: House[];
  pagination?: Pagination;
  error?: string;
}

export const useAPI = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHouses = useCallback(
    async (page: number = 1, limit: number = 20, name: string = '') => {
      setLoading(true);
      setError(null);

      try {
        const API_URL = await getAPIUrl();
        const url = new URL(`${API_URL.replace(/\/$/, '')}/houses`);

        // Add query parameters
        const params = new URLSearchParams();
        params.append('page', Math.max(1, page).toString());
        params.append('limit', Math.min(100, Math.max(1, limit)).toString());

        if (name.trim()) {
          params.append('name', name.trim());
        }

        const response = await fetch(`${url.toString()}?${params}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const data: APIResponse = await response.json();

        if (!data.data) {
          throw new Error('Invalid API response format');
        }

        setHouses(data.data);
        setPagination(data.pagination || null);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to fetch houses';
        setError(message);
        console.error('API Error:', message);
        setHouses([]);
        setPagination(null);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { houses, pagination, loading, error, fetchHouses };
};
