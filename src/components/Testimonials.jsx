import React from 'react';

const TestimonialCard = ({ quote, author, company }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <p className="text-lg mb-4">"{quote}"</p>
    <p className="font-semibold">{author}</p>
    <p className="text-gray-400">{company}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 light-beam">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="StartMotion helped us launch our product 3x faster than we initially planned. Their tools are game-changing!"
            author="Sarah Johnson"
            company="TechInnovate"
          />
          <TestimonialCard
            quote="The expert support we received from StartMotion was invaluable. They truly care about your success."
            author="Michael Chen"
            company="GrowthGenius"
          />
          <TestimonialCard
            quote="Thanks to StartMotion's analytics, we were able to identify key growth opportunities we would have otherwise missed."
            author="Emily Rodriguez"
            company="DataDriven"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
