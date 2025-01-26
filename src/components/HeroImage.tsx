import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  colorClass: string;
  height: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, colorClass, height }) => (
  <div className="relative overflow-hidden rounded-3xl">
    <img
      className={`w-full object-cover transition-all duration-1000 ${colorClass} saturate-150 ${height}`}
      src={src}
      alt={alt}
    />
  </div>
);