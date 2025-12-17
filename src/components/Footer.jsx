import React from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    // Change 1: Added 'w-full' to ensure full width.
    // Change 2: Kept the background image logic as requested.
    <footer 
      className="w-full py-16 relative border-t border-white/20"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/963278/pexels-photo-963278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}
    >
      {/* Change 3: Added 'backdrop-blur-[2px]' to soften the image details behind text */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-black/95 evening:from-white/90 evening:to-gray-50/90 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand Name */}
        <a href="#home" className="inline-block group">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white evening:text-evening-primary mb-2 tracking-tight">
            Shubham Modi
          </h2>
          <div className="h-1 w-0 group-hover:w-full transition-all duration-300 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        </a>

        {/* Navigation Links */}
        {/* Change 4: Added specific font weights and better hover colors */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 my-10 text-sm font-medium uppercase tracking-wider">
          {['About', 'Projects', 'Services'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 evening:text-evening-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        {/* Change 5: Converted to 'rounded-full' (circles) and added 'hover:-translate-y-1' lift effect */}
        <div className="flex justify-center gap-5 mb-10">
          <SocialLink href="https://github.com/shubhamiscodding" icon={<Github className="w-5 h-5" />} />
          <SocialLink href="https://www.linkedin.com/in/shubham-modi-cg/" icon={<Linkedin className="w-5 h-5" />} />
          <SocialLink href="https://x.com/shubham_modi_cg" icon={<Twitter className="w-5 h-5" />} />
        </div>

        {/* Copyright */}
        <div className="text-gray-500 dark:text-gray-400 evening:text-evening-foreground text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Shubham Modi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Reusable Social Link Component for cleaner code
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    {icon}
  </a>
);