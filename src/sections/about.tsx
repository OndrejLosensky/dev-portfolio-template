import React, { useState } from 'react';
import { aboutData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdLaptop } from "react-icons/md";

const About: React.FC = () => {
  useSectionInView('about');

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <section id='about' className="w-full min-h-screen py-20 ">
      <div className="container mx-auto">

        <h2 className="text-4xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
          {aboutData.title}
        </h2>

        <div className="text-lg text-neutral-700 dark:text-neutral-200 text-center max-w-3xl mx-auto mb-12">
          {aboutData.personalStatement}
        </div>       

        <div className="timeline mb-16">
          <h3 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-50 mb-8">Experience</h3>
          <div className="space-y-12">
            {aboutData.timeline.map((item, index) => (             
              <div 
              key={index} 
              className="my-4 py-2 flex border-b border-black/40 dark:border-white/30 md:border-black/0 md:dark:border-white/0 flex-col w-full group"
          >
              <div 
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer gap-4 sm:gap-0" 
                  onClick={() => handleRowClick(index)}
              >
                  <div className="flex flex-row items-center gap-x-4">
                      <span className={`w-12 h-12 sm:w-16 sm:h-16 flex rounded-full relative bg-blue-500 items-center justify-center`}>
                          <MdLaptop className='w-10 h-auto'/>
                      </span>
                      <div className="flex flex-col">
                          <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                              {item.title}
                              <span 
                                  className={`ml-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 ${expandedIndex === index ? 'opacity-100 rotate-90' : ''}`}
                              >
                                  <MdKeyboardArrowRight/>
                              </span>
                          </h2>
                          <p className="text-sm sm:text-md font-light">{} Description </p>
                      </div>                                            
                  </div>
                  <p className="text-sm sm:text-md font-regular text-black/55 dark:text-white/60"> {} 2024 </p>
              </div>
              <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                  <div className="mt-2 p-4 bg-transparent rounded-md dark:bg-transparent">
                      <p className="text-sm sm:text-md font-regular">{} Extendex description</p>
                  </div>
              </div>
          </div>
            ))}
          </div>
        </div>

        <div className="skills mb-16">
          <h3 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-50 mb-8">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutData.skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white dark:bg-neutral-700 shadow-md rounded-lg">
                <span className='flex flex-row items-center gap-x-4 mb-4'>
                  <img src={`../../public/${skill.icon}`} className='w-8 h-auto' alt={skill.name} />
                  <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-50">{skill.name}</h4>
                </span>
                <div className="flex items-center gap-x-2">
                  <div className="relative h-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded-full">
                    <div
                      className="h-full bg-[#69b6ff] rounded-full"
                      style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-200 w-12 text-right">{skill.level}%</p>
                  </div>   
                </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
