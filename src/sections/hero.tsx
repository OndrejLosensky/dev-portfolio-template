import React from 'react';
import { heroData, socialData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';

import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import { MdArrowRightAlt } from "react-icons/md";

const Hero: React.FC = () => {
  useSectionInView('home');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };  

  const goToLink = (link: string ) => {
    window.open(link, "_blank");
  }

  const github = socialData.github;
  const facebook = socialData.facebook;
  const instagram = socialData.instagram;
  const linkedin = socialData.linkedin;

  return (
    <div className='h-screen'>
      <div id="home" className="flex items-center h-4/5 justify-between">
        <div className="bg-[#8accf8] absolute top-[0rem] md:top-[-12rem] right-[2rem] md:right-[8rem] h-[25rem] md:h-[31.25rem] w-[20rem] md:w-[61.25rem] rounded-full blur-[12rem] dark:bg-[#56a2b5]"></div>
        
        <div className="text-left">
          <h1 className="text-2xl pb-2">{heroData.greeting}</h1>
          <h2 className="md:text-4xl lg:text-5xl text-3xl flex flex-col mb-1 font-bold bg-clip-text text-transparent dark:bg-gradient-to-br dark:from-neutral-50 dark:to-neutral-400 bg-black/80 bg-opacity-50">
              <span> Ondřej Losenský </span>
          </h2>
          <p className="mt-4 w-2/3">{heroData.description}</p>
          <div className='flex flex-row items-center mt-6 gap-x-4'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              {heroData.ctaText}
            </button>
            <div className="flex flex-row items-center group cursor-pointer">
              <span>{heroData.contactText}</span>
              <MdArrowRightAlt className="ml-2 w-6 h-7 text-shark-600 dark:text-shark-100 transform group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
          <ul className='flex flex-row items-center gap-x-6 mt-8'>
             <FaGithub onClick={() => goToLink(github)} className='cursor-pointer w-10 h-10 p-2 bg-neutral-600 fill-white hover:bg-blue-500 hover:fill-blue-50 duration-200 rounded-md'/>
             <FaFacebook onClick={() => goToLink(facebook)} className='cursor-pointer w-10 h-10 p-2 bg-neutral-600 fill-white hover:bg-blue-500 hover:fill-blue-50 duration-200 rounded-md'/>
             <FaInstagram onClick={() => goToLink(instagram)} className='cursor-pointer w-10 h-10 p-2 bg-neutral-600 fill-white hover:bg-blue-500 hover:fill-blue-50 duration-200 rounded-md'/>
             <FaLinkedin onClick={() => goToLink(linkedin)} className='cursor-pointer w-10 h-10 p-2 bg-neutral-600 fill-white hover:bg-blue-500 hover:fill-blue-50 duration-200 rounded-md'/>
          </ul>
        </div>
        <img src={heroData.imageUrl} alt="Profile" className="w-1/3 rounded-lg z-20" />

        
      </div>

      <div
          className="arrow-container"
          onClick={() => scrollToSection("projects")}
        >
          <div className="arrow"></div>
        </div>
          
    </div>
  );
};

export default Hero;
