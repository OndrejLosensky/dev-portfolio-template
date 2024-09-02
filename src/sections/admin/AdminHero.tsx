
import React from 'react';
import { heroData } from '../../lib/data';

const AdminHero: React.FC = () => {
  return (
    <div className="mt-8 p-8">
      <h2 className="text-2xl font-bold">Admin Hero Section</h2>
      <div className="mt-4">
        <label className="block mb-2">Greeting:</label>
        <input 
          type="text" 
          value={heroData.greeting} 
          className="border p-2 rounded w-full mb-4" 
        />
        <label className="block mb-2">Description:</label>
        <textarea 
          value={heroData.description} 
          className="border p-2 rounded w-full mb-4" 
        />
        <label className="block mb-2">CTA Text:</label>
        <input 
          type="text" 
          value={heroData.ctaText} 
          className="border p-2 rounded w-full mb-4" 
        />
        <div className="mt-4">
          <img src={heroData.imageUrl} alt="Profile" className="mt-4 w-1/2 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AdminHero;
