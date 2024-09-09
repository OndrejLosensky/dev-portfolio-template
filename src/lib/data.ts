import profile_image from '../assets/placeholder.jpg';
import placeholder from '../assets/placeholder-image.jpg';

export interface HeroData {
  greeting: string;
  description: string;
  ctaText: string;
  imageUrl: string;
  contactText: string;
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
  tags: Tag[];
}

export interface MoreProject {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: Tag[];
}

export interface MoreProjects {
  title: string;
  btnBack: string;
  description: string
  projects: MoreProject []
}

export interface Tag {
  name: string;
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
  description: string; 
  personalStatement: string;
  quote: string;
  timeline: TimelineItem[];
  skills: Skill[];
}

export interface socialData {
  github: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}


export const socialData: socialData = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com"
}
export const aboutData: AboutData = {
  title: "About Me",
  description: "I am a full-stack developer with over a decade of experience in building dynamic and responsive websites.",
  personalStatement:
    "I am a passionate web developer who believes in the power of technology to change the world. My journey in web development started in 2010, and over the years, I have honed my skills in various technologies. I thrive in environments where I can challenge myself and collaborate with others to create innovative solutions.",
  quote: "The only way to do great work is to love what you do.",
  timeline: [
    {
      year: "2024",
      title: "Job title 3",
      description: "Job description 3",
    },
    {
      year: "2023",
      title: "Job title 2",
      description: "Job description 2",
    },
    {
      year: "2022",
      title: "Job title 1",
      description: "Job description 1",
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
  ctaText: "Continue",
  imageUrl: profile_image,
  contactText: "Contact"
};

export const projectsData: ProjectsData = {
  title: "My Projects",
  projects: [
    {
      id: '1',
      title: 'Project One',
      description: 'A short description for project 1',
      link: 'https://example.com/project-one',
      imageUrl: placeholder,
      tags: [
        { name: "React"},
        { name: "TypeScript"},
        { name: "TailwindCSS"},
      ],
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'A short description for project 2',
      link: 'https://example.com/project-two',
      imageUrl: placeholder,
      tags: [
        { name: "Next.js"},
        { name: "JavaScript"},
        { name: "MaterialUI"},
      ],
    },
    {
      id: '3',
      title: 'Project Three',
      description: 'A short description for project ',
      link: 'https://example.com/project-three',
      imageUrl: placeholder,
      tags: [
        { name: "PHP"},
        { name: "HTML"},
        { name: "CSS"},
      ],
    },
  ],
};

export const moreProjectsData: MoreProjects = {
  title: "More of my projects",
  description: "See more of my projects I made",
  btnBack: "Back to homepage",
  projects: [
    {
      id: '1',
      title: 'Project One',
      description: 'A short description for project 1',
      link: 'https://example.com/project-one',
      imageUrl: placeholder,
      tags: [
        { name: "React"},
        { name: "TypeScript"},
        { name: "TailwindCSS"},
      ],
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'A short description for project 2',
      link: 'https://example.com/project-two',
      imageUrl: placeholder,
      tags: [
        { name: "Next.js"},
        { name: "JavaScript"},
        { name: "MaterialUI"},
      ],
    },
    {
      id: '3',
      title: 'Project Three',
      description: 'A short description for project 3',
      link: 'https://example.com/project-three',
      imageUrl: placeholder,
      tags: [
        { name: "PHP"},
        { name: "HTML"},
        { name: "CSS"},
      ],
    },
    {
      id: '4',
      title: 'Project Four',
      description: 'A short description for project 4',
      link: 'https://example.com/project-four',
      imageUrl: placeholder,
      tags: [
        { name: "React"},
        { name: "TypeScript"},
        { name: "TailwindCSS"},
      ],
    },
    {
      id: '5',
      title: 'Project Five',
      description: 'A short description for project 5',
      link: 'https://example.com/project-five',
      imageUrl: placeholder,
      tags: [
        { name: "Next.js"},
        { name: "JavaScript"},
        { name: "MaterialUI"},
      ],
    },
    {
      id: '6',
      title: 'Project Six',
      description: 'A short description for project 6 ',
      link: 'https://example.com/project-six',
      imageUrl: placeholder,
      tags: [
        { name: "PHP"},
        { name: "HTML"},
        { name: "CSS"},
      ],
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
    {
      title: 'Video editing',
      description: 'Creating simple but sleek video manipulations',
    },
  ],
};

export const contactData: ContactData = {
  title: "Contact Me",
  email: 'your-email@domain.com',
  phone: '+111 222 333 444',
  address: 'Adress',
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
