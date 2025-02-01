import React from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Rocket className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">StartMotion</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            </ul>
          </nav>
          <div className="text-gray-400 text-sm">
            © 2023 StartMotion. All rights reserved.
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          Designed by WebSparks AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
