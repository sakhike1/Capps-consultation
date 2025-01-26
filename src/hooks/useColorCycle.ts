import { useState, useEffect } from 'react';

const colors = [
  'hue-rotate-0',
  'hue-rotate-60',
  'hue-rotate-120',
  'hue-rotate-180',
  'hue-rotate-240',
  'hue-rotate-300'
];

export const useColorCycle = (interval = 3000) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return colors[currentColorIndex];
};