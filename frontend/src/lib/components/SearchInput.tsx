'use client';

import React, { useRef, useEffect } from 'react';
import { IconX } from '@tabler/icons-react';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onClear?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  onClear,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && document.activeElement === inputRef.current) {
      const cursorPosition = inputRef.current.selectionStart;
      setTimeout(() => {
        if (inputRef.current && cursorPosition !== null) {
          inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
        }
      }, 0);
    }
  }, [value]);

  const handleClear = () => {
    if (onClear) {
      onClear();
    }

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className="relative w-full max-w-70 mb-6">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 pr-10 text-sm text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {value && (
        <button
          onClick={handleClear}
          aria-label="Clear search input"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded cursor-pointer"
          type="button"
        >
          <IconX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
