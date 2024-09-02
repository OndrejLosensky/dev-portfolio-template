import React from 'react';
import { heroData } from '../lib/data';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${heroData.backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
     
      <div className="relative z-10 max-w-3xl mx-auto text-white p-8">
        <img
          src={heroData.imageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-2">{heroData.greeting}</h1>
        <h2 className="text-2xl font-medium mb-4">{heroData.subtitle}</h2>
        <p className="text-lg text-gray-200 mb-6">{heroData.description}</p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
        >
          {heroData.ctaText}
        </a>
               
        <div className="mt-6 flex justify-center space-x-6">
          {heroData.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
