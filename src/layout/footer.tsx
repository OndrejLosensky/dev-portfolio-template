import React from 'react';
import { footerData } from '../lib/data'; 

const Footer: React.FC = () => {
  return (
    <footer className="w-3/4 mx-auto bg-neutral-600/20  backdrop-filter backdrop-blur-md text-white py-4 rounded-t-2xl border-t border-l border-r border-white/25">
      <div className="container mx-auto text-center flex flex-row justify-between px-8 ">
        <p className="">{footerData.copyright}</p>
        <div className="flex justify-center space-x-4">
          {footerData.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer" 
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
