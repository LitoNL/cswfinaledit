import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const handleClick = () => {
    // Scroll to top when navigating to contact page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-dark tech-pattern relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Let's Chat. No Pressure.
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              <p>
                Running a spa or wellness center is already a lot of work.<br className="hidden sm:block" />
                We're here to make your life easier, not harder.
              </p>
              <p>
                Got questions? Want to see how the AI assistant works?<br className="hidden sm:block" />
                Let's have a quick chat. No pressure, no pushy sales talk.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Link 
                to="/contact" 
                className="btn btn-primary group text-lg sm:text-xl w-full sm:w-auto"
                onClick={handleClick}
              >
                <Calendar className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Book A Free Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-electric/5 to-transparent"></div>
    </section>
  );
};

export default CallToAction;