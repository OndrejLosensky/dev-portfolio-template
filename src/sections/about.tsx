import React from 'react';
import { aboutData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';

const About: React.FC = () => {
  useSectionInView('about');

  return (
    <section id='about' className="w-full min-h-screen py-20 ">
      <div className="container mx-auto">

        <h2 className="text-4xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
          {aboutData.title}
        </h2>

        <div className="text-lg text-neutral-700 dark:text-neutral-200 text-center max-w-3xl mx-auto mb-12">
          {aboutData.personalStatement}
        </div>

        <div className="relative py-8 bg-blue-500 text-white rounded-lg mb-16 shadow-md">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
          <blockquote className="text-2xl italic font-light text-center">
            “{aboutData.quote}”
          </blockquote>
          <p className="text-right text-xl font-bold mt-4 pr-8">- {aboutData.quoteAuthor}</p>
        </div>

        <div className="timeline mb-16">
          <h3 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-50 mb-8">Experience</h3>
          <div className="space-y-12">
            {aboutData.timeline.map((item, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
                <div className="ml-4 p-4 bg-white dark:bg-neutral-700 shadow-md rounded-lg">
                  <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-50">{item.year}</h4>
                  <p className="text-lg font-semibold text-blue-500">{item.title}</p>
                  <p className="text-neutral-600 dark:text-neutral-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills mb-16">
          <h3 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-50 mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {aboutData.skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white dark:bg-neutral-700 shadow-md rounded-lg">
                <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-50">{skill.name}</h4>
                <p className="text-neutral-600 dark:text-neutral-200">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
