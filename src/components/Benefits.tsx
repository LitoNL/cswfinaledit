import React from 'react';

const Benefits: React.FC = () => {
  const benefits: any[] = [];

  return (
    <section id="benefits" className="py-12 md:py-16 bg-dark-100 relative overflow-hidden">
      <div className="container mx-auto px-4">        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="card backdrop-blur-sm p-8 h-full">
              <div className="mb-6 p-6 rounded-full bg-dark-300/50 border border-dark-300 shadow-lg relative group-hover:border-electric/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-electric/5 to-transparent"></div>
    </section>
  );
};

export default Benefits;