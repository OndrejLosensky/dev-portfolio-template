import React from 'react';
import { heroData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';

import { MdArrowRightAlt } from "react-icons/md";

const Hero: React.FC = () => {
  useSectionInView('home');

  return (
    <div id="home" className="flex items-center h-screen justify-between">
      <div className="bg-[#8accf8] absolute top-[0rem] md:top-[-12rem] right-[2rem] md:right-[8rem] h-[25rem] md:h-[31.25rem] w-[20rem] md:w-[61.25rem] rounded-full blur-[12rem] dark:bg-[#56a2b5]"></div>
      
      <div className="text-left">
        <h1 className="text-2xl pb-2">{heroData.greeting}</h1>
        <h2 className="md:text-4xl lg:text-5xl text-3xl flex flex-col mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-br dark:from-neutral-50 dark:to-neutral-400 from-neutral-500/85 to-neutral-800 bg-opacity-50">
            <span> Ondřej Losenský </span>
        </h2>
        <p className="mt-4 w-2/3">{heroData.description}</p>
        <div className='flex flex-row items-center mt-6 gap-x-2'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {heroData.ctaText}
          </button>
          <button className='px-4 py-2 flex flex-row items-center gap-x-2'>
              <span> Contact </span>
              <MdArrowRightAlt/>
          </button>
        </div>
        <ul className='flex flex-row items-center gap-x-6 mt-12'>
          <li> Github </li>
          <li> Facebook </li>
          <li> Linkedin</li>
          <li> Instagram </li>
        </ul>
      </div>
      <img src={heroData.imageUrl} alt="Profile" className="w-1/3 rounded-lg z-20" />
    </div>
  );
};

export default Hero;
