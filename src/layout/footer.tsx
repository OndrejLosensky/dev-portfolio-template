import React from 'react';
import { footerData } from '../lib/data'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">{footerData.copyright}</p>
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
