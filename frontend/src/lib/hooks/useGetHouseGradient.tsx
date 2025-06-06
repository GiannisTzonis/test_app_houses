import { useMemo } from 'react';

// Pre-defined gradient combinations to ensure Tailwind includes these classes
const GRADIENT_MAP: Record<string, string> = {
  'scarlet-gold': 'from-red-600 to-yellow-500',
  'gold-scarlet': 'from-yellow-500 to-red-600',
  'blue-bronze': 'from-blue-600 to-yellow-600',
  'bronze-blue': 'from-yellow-600 to-blue-600',
  'yellow-black': 'from-yellow-400 to-gray-800',
  'black-yellow': 'from-gray-800 to-yellow-400',
  'green-silver': 'from-green-600 to-gray-300',
  'silver-green': 'from-gray-300 to-green-600',
  'red-gold': 'from-red-600 to-yellow-500',
  'gold-red': 'from-yellow-500 to-red-600',
  'blue-gray': 'from-blue-600 to-gray-500',
  'gray-blue': 'from-gray-500 to-blue-600',
  'green-black': 'from-green-600 to-gray-800',
  'black-green': 'from-gray-800 to-green-600',
  'white-black': 'from-white to-black',
  'black-white': 'from-black to-white',
};

const COLOR_MAP: Record<string, string> = {
  scarlet: 'red',
  gold: 'yellow',
  blue: 'blue',
  bronze: 'yellow',
  yellow: 'yellow',
  black: 'black',
  gray: 'gray',
  grey: 'gray',
  green: 'green',
  silver: 'gray',
  white: 'white',
};

const parseHouseColors = (colorsString: string): string => {
  const colorParts = colorsString.toLowerCase().split(/ and |,| & |\s+/);

  const validColors: string[] = [];
  for (const part of colorParts) {
    const trimmed = part.trim();
    if (trimmed && COLOR_MAP[trimmed]) {
      validColors.push(trimmed);
      if (validColors.length === 2) break;
    }
  }

  if (validColors.length >= 2) {
    const colorKey = `${validColors[0]}-${validColors[1]}`;
    if (GRADIENT_MAP[colorKey]) {
      return GRADIENT_MAP[colorKey];
    }
  }

  // Fallback to white-black gradient
  return GRADIENT_MAP['white-black'];
};

const useHouseGradient = (houseColours: string) => {
  const gradientClasses = useMemo(() => {
    return parseHouseColors(houseColours);
  }, [houseColours]);

  return gradientClasses;
};

export default useHouseGradient;
