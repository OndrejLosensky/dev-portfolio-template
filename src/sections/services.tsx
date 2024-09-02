import React from 'react';
import { servicesData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';

import { CiGlobe } from "react-icons/ci";

const Services: React.FC = () => {
  useSectionInView("services")

  return (
    <div id='services' className="w-full my-48">        
      <h2 className="text-3xl font-bold uppercase">{servicesData.title}</h2>
      <p className='font-light pb-4'> See some of services that I currently offer as freelance work </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {servicesData.services.map((service, index) => (
          <div key={index} className="border p-4 bg-blue-200 text-blue-600 border-blue-600 rounded">
            <div className='flex flex-row items-center gap-x-2 mb-4'>
              <span> <CiGlobe className='w-6 h-6'/> </span>
              <h3 className="font-bold text-2xl">{service.title}</h3>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
