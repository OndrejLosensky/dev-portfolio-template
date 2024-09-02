import React from 'react';
import { heroData } from '../lib/data';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-8">
      <div className="text-left">
        <h1 className="text-4xl font-bold">{heroData.greeting}</h1>
        <p className="mt-4">{heroData.description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          {heroData.ctaText}
        </button>
      </div>
      <img src={heroData.imageUrl} alt="Profile" className="w-1/2 rounded-lg" />
    </div>
  );
};

export default Hero;
