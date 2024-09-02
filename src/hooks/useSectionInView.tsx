import { useEffect } from 'react';
import { useActiveSection } from '../context/active-section';

export const useSectionInView = (sectionId: string) => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top >= 0 && top < window.innerHeight / 2) {
          setActiveSection(sectionId);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId, setActiveSection]);
};
