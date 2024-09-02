import React from 'react';

import Hero from '../sections/hero';
import About from '../sections/about';
import Projects from '../sections/projects';
import Services from '../sections/services';
import Contact from '../sections/contact';


const Homepage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Homepage;
