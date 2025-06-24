import React from 'react';
import { Bot, Rocket, Settings } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Settings className="h-10 w-10 text-electric" />,
      title: 'We Build Your AI Assistant',
      description: 'Trained with your services, pricing, tone of voice, and scheduling tools.'
    },
    {
      icon: <Bot className="h-10 w-10 text-electric" />,
      title: 'AI Handles Your Inquiries 24/7',
      description: 'Clients get instant responses, and book appointments. Even when you\'re closed.'
    },
    {
      icon: <Rocket className="h-10 w-10 text-electric" />,
      title: 'You Grow Without Lifting a Finger',
      description: 'More bookings, fewer no-shows, happier clients. All while you focus on creating an unforgettable experience.'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-dark tech-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to Automate Your Business?
          </h2>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-electric via-purple to-electric transform -translate-y-1/2 z-0 animate-pulse-slow"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="card backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 p-6 rounded-full bg-dark-300/50 border border-dark-300 shadow-lg relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-electric to-purple flex items-center justify-center text-white font-bold animate-pulse-slow">
                    {index + 1}
                  </div>
                  <div className="relative">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple/5 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-electric/5 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HowItWorks;