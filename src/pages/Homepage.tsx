import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../sections/hero';

import { RiAdminLine } from "react-icons/ri";


const Homepage: React.FC = () => {
  return (
    <div>
      <Link className='absolute bottom-2 right-4 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-violet-400' to="/admin"><RiAdminLine className='fill-white w-6 h-6'/></Link>
      <Hero />
    </div>
  );
};

export default Homepage;
