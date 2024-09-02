import React from 'react';
import { contactData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';

import { CgArrowTopRight } from "react-icons/cg";


const Contact: React.FC = () => {
  useSectionInView("contact")

  return (
    <div id='contact' className="w-full mb-64 mt-32 flex items-center ">
      <div className='w-full p-12 rounded-lg bg-gradient-to-br from-blue-400 to-sky-500'>
        <div className='flex flex-row justify-between items-center'>
            <div>
              <h2 className="text-4xl font-bold">{contactData.title}</h2>
              <p className='text-lg pt-2'> Are you ready to move your bussiness to next level? Lets connect and we can discuss next steps. </p>
            </div>
            <button className='flex flex-row items-center gap-x-2 bg-black px-6 py-2 rounded-md shadow-sm'> <span> Contact me </span> <CgArrowTopRight/> </button>
        </div>
        

      </div>
     
    </div>
  );
};

export default Contact;
