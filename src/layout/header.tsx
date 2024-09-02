import React, { useEffect, useState } from 'react';
import { navigationItems, logoName } from '../lib/data';
import { useActiveSection } from '../context/active-section';

import { IoSunnySharp } from "react-icons/io5";

const Header: React.FC = () => {
  const { activeSection } = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-2 z-30 w-3/4 bg-neutral-800/20 mx-auto rounded-lg border backdrop-filter backdrop-blur-md ${scrolled ? '':''} border-white/70 py-3 px-4  transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">{logoName}</h1>
        <nav>
          <ul className="flex space-x-6">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`relative duration-200 px-4 py-2 rounded-full ${
                    activeSection === item.path.substring(1)
                      ? 'bg-blue-500 text-white'
                      : 'bg-transparent text-white'
                  }`}
                >
                  {item.name}                  
                </a>
              </li>
            ))}
          </ul>
        </nav>      
        <button> <IoSunnySharp className='w-6 h-6'/> </button>
      </div>
    </header>
  );
};

export default Header;
