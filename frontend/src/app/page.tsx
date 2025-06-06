'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Card from '@/lib/components/Card';
import EmptyState from '@/lib/components/EmptyState';
import { IconLoader2 } from '@tabler/icons-react';
import { useAPI } from '@/lib/hooks/useAPI';

export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const [traitSearchTerm, setTraitSearchTerm] = useState('');
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const { houses = [], loading, error, fetchHouses } = useAPI();

  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setTraitSearchTerm(inputValue);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [inputValue]);

  const handleClearSearch = () => {
    setInputValue('');
    setTraitSearchTerm('');
  };

  const filteredHouses = useMemo(() => {
    if (!traitSearchTerm.trim()) {
      return houses;
    }

    const searchTerm = traitSearchTerm.toLowerCase();

    return houses.filter((house) =>
      house.name.toLowerCase().includes(searchTerm)
    );
  }, [houses, traitSearchTerm]);

  const renderedCards = useMemo(() => {
    return filteredHouses.map((house) => (
      <Card key={house.id} house={house} searchTerm={traitSearchTerm} />
    ));
  }, [filteredHouses, traitSearchTerm]);

  const resultCount = filteredHouses.length;

  return (
    <div
      className="min-h-screen bg-gray-50 py-8 px-4"
      style={{ fontFamily: 'Verdana, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Wizard Houses
        </h1>

        <div className="max-w-md mb-8 mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search houses"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         bg-white shadow-sm text-gray-900 placeholder-gray-500
                         transition-colors duration-200"
              style={{ fontFamily: 'Verdana, sans-serif' }}
            />
            {inputValue && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                           text-gray-400 hover:text-gray-600 cursor-pointer
                           w-5 h-5 flex items-center justify-center"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {!loading && traitSearchTerm && (
            <div
              className="mt-2 text-sm text-gray-600"
              style={{ fontFamily: 'Verdana, sans-serif' }}
            >
              <span>
                {resultCount} {resultCount === 1 ? 'house' : 'houses'} found
                {traitSearchTerm && ` for "${traitSearchTerm}"`}
              </span>
            </div>
          )}
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            <strong>Error:</strong> {error}
          </div>
        )}

        {loading ? (
          <div className="flex flex-col justify-center items-center py-12">
            <IconLoader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
            <p
              className="text-gray-600"
              style={{ fontFamily: 'Verdana, sans-serif' }}
            >
              Loading houses...
            </p>
          </div>
        ) : (
          <>
            {filteredHouses.length === 0 ? (
              <EmptyState
                title={
                  traitSearchTerm ? 'No houses found' : 'No houses available'
                }
                description={
                  traitSearchTerm
                    ? `No houses have traits matching "${traitSearchTerm}". Try a different search term.`
                    : 'There might be an issue with the data source.'
                }
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {renderedCards}
              </div>
            )}
          </>
        )}

        {!loading && houses.length > 0 && (
          <div
            className="mt-8 text-center text-sm text-gray-500"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Showing {filteredHouses.length} of {houses.length} houses
          </div>
        )}
      </div>
    </div>
  );
}
