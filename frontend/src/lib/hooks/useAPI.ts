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

export const useAPI = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHouses = useCallback(async (name: string = '') => {
    setLoading(true);
    setError(null);

    try {
      const API_URL = await getAPIUrl();
      const url = new URL(`${API_URL.replace(/\/$/, '')}`);

      if (name.trim()) {
        url.searchParams.append('name', name.trim());
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: House[] = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Invalid API response format - expected array');
      }

      setHouses(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to fetch houses';
      setError(message);
      console.error('API Error:', message);
      setHouses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { houses, loading, error, fetchHouses };
};
