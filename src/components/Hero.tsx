import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import OrbitingIcons from './OrbitingIcons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Photo with Orbiting Icons */}
        <div className="relative mb-8">
          <OrbitingIcons />
          <div className="relative z-10 w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-black shadow-lg">
            <img
              src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Manyata Sharma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Manyata Sharma
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in-delay-1">
          Full Stack Developer | Co-Founder at Jaaago
        </h2>
        
        {/* Brief Intro */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Turning ideas into scalable, clean, and impactful tech products.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 animate-fade-in-delay-3">
          <a
            href="https://github.com/ManyataSharma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
            <ExternalLink size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/manyata-sharma-318754286/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;