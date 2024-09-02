import React from 'react';
import { contactData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';

import { CgArrowTopRight } from "react-icons/cg";


const Contact: React.FC = () => {
  useSectionInView("contact")

  return (
    <div id='contact' className="w-full mb-64 mt-32 flex items-center relative">
      <div className="bg-[#8accf8] absolute top-[0rem] md:top-[-12rem] right-[2rem] md:right-[8rem] h-[25rem] md:h-[31.25rem] w-[20rem] md:w-[61.25rem] rounded-full blur-[12rem] dark:bg-[#56a2b5]"></div>
      
      <div className='w-full p-12 rounded-lg z-10 bg-gradient-to-br from-blue-400 to-sky-500'>
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
