import React from 'react';
import { Rocket, Users, Zap } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 light-beam">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose StartMotion?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Rocket className="w-12 h-12 text-blue-400" />}
            title="Quick Launch"
            description="Get your startup off the ground in record time with our streamlined processes and tools."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-blue-400" />}
            title="Expert Support"
            description="Access a network of mentors and industry experts to guide you through every stage of growth."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-blue-400" />}
            title="Powerful Analytics"
            description="Make data-driven decisions with our advanced analytics and reporting tools."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
