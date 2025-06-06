'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Card from '@/lib/components/Card';
import Pagination from '@/lib/components/Pagination';
import EmptyState from '@/lib/components/EmptyState';
import { IconLoader2 } from '@tabler/icons-react';
import { useAPI } from '@/lib/hooks/useAPI';

export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const { houses, pagination, loading, error, fetchHouses } = useAPI();

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setSearchTerm(inputValue);
      setCurrentPage(1);
    }, 800);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [inputValue]);

  useEffect(() => {
    fetchHouses(currentPage, itemsPerPage, searchTerm);
  }, [fetchHouses, currentPage, itemsPerPage, searchTerm]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleClearSearch = () => {
    setInputValue('');
    setSearchTerm('');
    setCurrentPage(1);
  };

  const renderedCards = useMemo(() => {
    return houses?.map((house, index) => (
      <Card
        key={`${house.id}-${index}`}
        house={house}
        searchTerm={searchTerm}
      />
    ));
  }, [houses, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-md mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search houses"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="block w-full px-2 py-3 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         bg-white shadow-sm text-gray-900 placeholder-gray-500
                         transition-colors duration-200"
            />
            {inputValue && (
              <button
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
          {!loading && searchTerm && (
            <div className="mt-2 text-sm text-gray-600">
              <span>
                {pagination?.totalItems || 0} result
                {pagination?.totalItems !== 1 ? 's' : ''} for &ldquo;
                {searchTerm}&rdquo;
              </span>
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading && !houses.length ? (
          <div className="flex justify-center items-center py-12">
            <IconLoader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <>
            {houses.length === 0 && searchTerm ? (
              <EmptyState
                title="No houses found"
                description="Try adjusting your search criteria."
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {renderedCards}
              </div>
            )}
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
