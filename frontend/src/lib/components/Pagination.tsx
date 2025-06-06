'use client';

import React from 'react';

interface PaginationProps {
  pagination: {
    currentPage: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onPageChange,
}) => {
  const { currentPage, totalPages } = pagination;

  const getPageNumbers = () => {
    const pages = [];

    pages.push(1);

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    if (startPage > 2) {
      pages.push(-1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push(-1);
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {pageNumbers.map((page, index) =>
        page === -1 ? (
          <span
            key={`ellipsis-${index}`}
            className="px-3 py-1 text-gray-500 cursor-default select-none"
          >
            &hellip;
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md transition-all duration-200 ${
              page === currentPage
                ? 'bg-blue-800 text-white font-bold cursor-default'
                : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
            }`}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        )
      )}

      <span className="text-gray-700 ml-4">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
