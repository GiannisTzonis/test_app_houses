'use client';

import React, { useState } from 'react';
import Tag from './Tag';
import useHouseGradient from '../hooks/useGetHouseGradient';

interface Head {
  id: string;
  firstName: string;
  lastName: string;
}

interface Trait {
  id: string;
  name: string;
}

export interface House {
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

interface CardProps {
  house: House;
  searchTerm: string;
}

const Card: React.FC<CardProps> = ({ house }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const gradientClasses = useHouseGradient(house.houseColours);

  const filteredTraits = localSearchTerm
    ? house.traits.filter((trait) =>
        trait.name.toLowerCase().includes(localSearchTerm.toLowerCase())
      )
    : house.traits;

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">{house.name}</h2>
        <span className="text-gray-600 font-medium">{house.animal}</span>
      </div>

      <div
        className={`h-6 mx-4 rounded-md bg-gradient-to-r ${gradientClasses}`}
      />

      <div className="p-4">
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-700">Founder: </span>
          <span className="text-sm font-bold text-gray-900">
            {house.founder}
          </span>
        </div>
        <div className="relative">
          <input
            type="text"
            value={localSearchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLocalSearchTerm(e.target.value)
            }
            placeholder="Search house traits"
            className="block w-full max-w-70 px-2 py-3 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         bg-white shadow-sm text-gray-900 placeholder-gray-500
                         transition-colors duration-200"
          />
          {localSearchTerm && (
            <button
              onClick={() => setLocalSearchTerm('')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {filteredTraits.map((trait) => (
            <Tag key={trait.id} name={trait.name} />
          ))}
          {localSearchTerm && filteredTraits.length === 0 && (
            <p className="h-7 text-gray-500 text-sm italic w-full">
              No matching traits found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
