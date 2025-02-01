import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl text-gray-400">/mo</span></p>
    <ul className="text-left mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="w-5 h-5 text-green-400 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Link
      to="/fruit-gallery"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
    >
      Get Started
    </Link>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 light-beam">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price={49}
            features={[
              "Basic analytics",
              "5 team members",
              "10 projects",
              "24/7 support"
            ]}
          />
          <PricingCard
            title="Pro"
            price={99}
            features={[
              "Advanced analytics",
              "15 team members",
              "Unlimited projects",
              "Priority support",
              "Custom integrations"
            ]}
          />
          <PricingCard
            title="Enterprise"
            price={249}
            features={[
              "Full-suite analytics",
              "Unlimited team members",
              "Unlimited projects",
              "24/7 premium support",
              "Custom integrations",
              "Dedicated account manager"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
