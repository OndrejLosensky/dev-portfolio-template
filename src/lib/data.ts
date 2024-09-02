// src/lib/data.ts

import profile_image from "../assets/placeholder.jpg";
import background_image from "../assets/placeholder.jpg";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface HeroData {
  greeting: string;
  subtitle: string;
  description: string;
  ctaText: string;
  imageUrl: string;
  backgroundUrl: string;
  socialLinks: SocialLink[];
}

export const heroData: HeroData = {
  greeting: "Hello, I'm John Doe",
  subtitle: "Full Stack Developer & Designer",
  description: "I am a passionate web developer with experience in building modern web applications using React, TypeScript, and TailwindCSS. Let's create something amazing together!",
  ctaText: "Get in Touch",
  imageUrl: profile_image,
  backgroundUrl: background_image,
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/johndoe" },
    { platform: "GitHub", url: "https://github.com/johndoe" },
    { platform: "Twitter", url: "https://twitter.com/johndoe" },
  ],
};
