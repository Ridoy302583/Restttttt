import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Rocket className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold">StartMotion</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><a href="/#features" className="hover:text-blue-400 transition-colors">Features</a></li>
            <li><a href="/#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
            <li><a href="/#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            <li><Link to="/fruit-gallery" className="hover:text-blue-400 transition-colors">Fruit Gallery</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
