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

export interface NavigationItem {
  name: string;
  path: string;
}

export interface FooterData {
  copyright: string;
  links: {
    name: string;
    url: string;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface AboutData {
  title: string;
  description: string;  // This is the missing property
  personalStatement: string;
  quote: string;
  quoteAuthor: string;
  timeline: TimelineItem[];
  skills: Skill[];
}

export const aboutData: AboutData = {
  title: "About Me",
  description: "I am a full-stack developer with over a decade of experience in building dynamic and responsive websites.",
  personalStatement:
    "I am a passionate web developer who believes in the power of technology to change the world. My journey in web development started in 2010, and over the years, I have honed my skills in various technologies. I thrive in environments where I can challenge myself and collaborate with others to create innovative solutions.",
  quote: "The only way to do great work is to love what you do.",
  quoteAuthor: "Steve Jobs",
  timeline: [
    {
      year: "2023",
      title: "Senior Developer at TechCorp",
      description: "Led a team of developers to build a scalable e-commerce platform.",
    },
    {
      year: "2020",
      title: "Freelance Web Developer",
      description: "Worked on a variety of projects for clients across the globe.",
    },
    {
      year: "2018",
      title: "Web Developer at Startup XYZ",
      description: "Developed and maintained the company's primary web applications.",
    },
    {
      year: "2015",
      title: "Junior Developer at DevStudio",
      description: "Assisted in the development of client websites and internal tools.",
    },
  ],
  skills: [
    { name: "React", level: 90, icon: "React-Dark.svg" },
    { name: "TypeScript", level: 85, icon: "TypeScript.svg" },
    { name: "TailwindCSS", level: 75, icon: "TailwindCSS-Dark.svg" },
    { name: "Node.js", level: 80, icon: "NodeJS-Dark.svg"},
    { name: "JavaScript", level: 70, icon: "JavaScript.svg" },
    { name: "Adobe Illustrator", level: 65, icon: "Illustrator.svg" },
    { name: "Git", level: 90, icon: "Git.svg"},
    { name: "Python", level: 30, icon: "Python-Dark.svg" },
    { name: "Figma", level: 95, icon: "Figma.svg" },
  ],
};


export const heroData: HeroData = {
  greeting: "Hello 👋, my name is",
  description:
    "I am a passionate web developer with experience in building modern web applications using React, TypeScript, and TailwindCSS. Let's create something amazing together!",
  ctaText: "Get in Touch",
  imageUrl: profile_image,
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

// Navigation data
export const navigationItems: NavigationItem[] = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Services', path: '#services' },
  { name: 'Contact', path: '#contact' },
];

// Logo name
export const logoName: string = "LOGO";

// Footer data
export const footerData: FooterData = {
  copyright: "© 2024 John Doe. All rights reserved.",
  links: [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Contact', url: '/contact' },
  ],
};
