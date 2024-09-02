import React from 'react';

import Hero from '../sections/hero';
import About from '../sections/about';
import Projects from '../sections/projects';
import Services from '../sections/services';
import Contact from '../sections/contact';
import Header from '../layout/header';
import Footer from '../layout/footer';


const Homepage: React.FC = () => {
  return (
    <div className='w-screen max-w-screen'> 
      <Header/>
      <div className='flex flex-col items-center w-3/4 mx-auto'>
        <Hero />
        <About/>
        <Projects />
        <Services />
        <Contact />
      </div>     
      <Footer/>
    </div>
  );
};

export default Homepage;
