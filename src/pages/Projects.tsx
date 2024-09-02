import React from 'react';
import { Link } from 'react-router-dom';

import { HiArrowUturnLeft } from "react-icons/hi2";

const Homepage: React.FC = () => {
  return (
    <div className='w-screen max-w-screen'> 
        <div className='w-3/4 mx-auto p-8'>
            <Link className='px-4 py-2 ' to="/"><span className='flex flex-row items-center gap-x-2'> <HiArrowUturnLeft className='w-5 h-5'/> <span>Back to homepage</span> </span></Link>
            <h1 className='text-4xl font-bold'> More of my projects </h1>
            <p className='pt-2 font-light text-white/80'> See more of my projects I made </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                <div className='w-full h-64 bg-gray-600' >

                </div>
                <div className='w-full h-64 bg-gray-600' >

                </div>
                <div className='w-full h-64 bg-gray-600' >

                </div>
                <div className='w-full h-64 bg-gray-600' >

                </div>
                <div className='w-full h-64 bg-gray-600' >

                </div>
                <div className='w-full h-64 bg-gray-600' >

                </div>
            </div>
        </div>
    </div>
  );
};

export default Homepage;
