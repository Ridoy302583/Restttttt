import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 light-beam">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Accelerate Your Startup</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">StartMotion provides the tools and resources you need to launch and grow your startup faster than ever before.</p>
        <Link
          to="/fruit-gallery"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors"
        >
          Get Started
          <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
