// src/lib/data.ts

import profile_image from '../assets/placeholder.jpg'; // Adjust the path as necessary

// Define interfaces for each section data
export interface HeroData {
  greeting: string;
  description: string;
  ctaText: string;
  imageUrl: string;
}

export interface AboutData {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export interface ProjectsData {
  title: string;
  projects: Project[];
}

export interface Service {
  title: string;
  description: string;
}

export interface ServicesData {
  title: string;
  services: Service[];
}

export interface ContactData {
  title: string;
  email: string;
  phone: string;
  address: string;
}

// Export the data
export const heroData: HeroData = {
  greeting: "Hello, I'm John Doe",
  description:
    "I am a passionate web developer with experience in building modern web applications using React, TypeScript, and TailwindCSS. Let's create something amazing together!",
  ctaText: "Get in Touch",
  imageUrl: profile_image,
};

export const aboutData: AboutData = {
  title: "About Me",
  description:
    "I am a web developer with a love for creating seamless user experiences. I have worked on various projects that utilize the latest technologies in web development.",
};

export const projectsData: ProjectsData = {
  title: "My Projects",
  projects: [
    {
      id: '1',
      title: 'Project One',
      description: 'A web application for managing tasks.',
      link: 'https://example.com/project-one',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'An e-commerce platform for online shopping.',
      link: 'https://example.com/project-two',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Project Three',
      description: 'A personal blog to share insights and articles.',
      link: 'https://example.com/project-three',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ],
};

export const servicesData: ServicesData = {
  title: "My Services",
  services: [
    {
      title: 'Web Development',
      description: 'Building responsive and modern web applications.',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-friendly interfaces that enhance user experience.',
    },
    {
      title: 'SEO Optimization',
      description: 'Improving website visibility on search engines.',
    },
  ],
};

export const contactData: ContactData = {
  title: "Contact Me",
  email: 'johndoe@example.com',
  phone: '+123456789',
  address: '123 Main St, Anytown, USA',
};
