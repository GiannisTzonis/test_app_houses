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

export const useAPI = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHouses = useCallback(
    async (page: number, limit: number, name: string = '') => {
      setLoading(true);
      setError(null);
      setHouses([]);
      setPagination(null);

      try {
        const API_URL = await getAPIUrl();
        const url = new URL(API_URL);
        url.searchParams.append('page', page.toString());
        url.searchParams.append('limit', limit.toString());
        if (name) {
          url.searchParams.append('name', name);
        }

        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && data.pagination) {
          setHouses(data.data);
          setPagination(data.pagination);
        } else if (Array.isArray(data)) {
          setHouses(data);
          setPagination(null);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch houses');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { houses, pagination, loading, error, fetchHouses };
};
