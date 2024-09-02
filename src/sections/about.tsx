import React from 'react';
import { aboutData } from '../lib/data';

const About: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{aboutData.title}</h2>
      <p className="mt-4">{aboutData.description}</p>
    </div>
  );
};

export default About;
