import React from 'react';
import { servicesData } from '../lib/data';

const Services: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{servicesData.title}</h2>
      <div className="mt-4">
        {servicesData.services.map((service, index) => (
          <div key={index} className="border p-4 rounded mb-2">
            <h3 className="font-bold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
