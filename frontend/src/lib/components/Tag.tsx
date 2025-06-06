'use client';

import React from 'react';

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
      {name}
    </span>
  );
};

export default Tag;
