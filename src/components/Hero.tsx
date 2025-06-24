import React from 'react';
import { ArrowRight, Brain, Cpu, Network, XCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-slide-up leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-purple block">
              Automate Conversations.
            </span>
            <span className="text-white block">
              Capture More Clients.
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-purple block">
              Work Less.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
            24/7 AI Customer Support for Spas, Wellness Centers & Saunas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/contact" 
              className="btn btn-primary group w-full sm:w-auto"
              onClick={handleClick}
            >
              Show Me How It Works
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 text-center bg-black backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-dark-300/50 animate-fade-in mx-4" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
              Still Losing Clients Because of Missed Calls or Slow Replies?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Let's face it, you're running a spa, not a call center. But every missed call, slow reply, or forgotten follow up = lost revenue.
            </p>
            <ul className="space-y-3 sm:space-y-4 inline-block text-left">
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-error mr-3 flex-shrink-0" />
                Missed calls and appointment requests
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-error mr-3 flex-shrink-0" />
                Long response times
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-error mr-3 flex-shrink-0" />
                No-shows
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-error mr-3 flex-shrink-0" />
                Staff burned out from repetitive tasks
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-error mr-3 flex-shrink-0" />
                Poor lead conversion from website visitors
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-error mr-3 flex-shrink-0" />
                Lack of follow-up
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 text-center bg-black backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-dark-300/50 animate-fade-in mx-4" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
              Your 24/7 AI Receptionist Has Arrived
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Let our AI agent do the heavy lifting:
            </p>
            <ul className="space-y-3 sm:space-y-4 inline-block text-left">
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-electric mr-3 flex-shrink-0" />
                Instantly answer FAQs
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-electric mr-3 flex-shrink-0" />
                Book & reschedule appointments
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-electric mr-3 flex-shrink-0" />
                Send automated reminders
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-electric mr-3 flex-shrink-0" />
                Engage website visitors
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-electric mr-3 flex-shrink-0" />
                Capture leads on autopilot
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-electric mr-3 flex-shrink-0" />
                Works on WhatsApp, Web, Facebook & more
              </li>
            </ul>
            <p className="text-base sm:text-lg text-electric mt-4 sm:mt-6 font-medium">
              All customized for your spa, wellness center, or sauna business.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto relative z-10 px-4">
          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-electric to-purple p-4 sm:p-5 animate-pulse-slow">
              <Brain className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-electric mb-2">Smart Responses</h3>
            <p className="text-gray-400 text-sm sm:text-base">Your AI assistant works non-stop, handling questions and tasks 24/7</p>
          </div>

          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-purple to-electric p-4 sm:p-5 animate-pulse-slow" style={{ animationDelay: '2s' }}>
              <Network className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-electric mb-2">Automated Booking</h3>
            <p className="text-gray-400 text-sm sm:text-base">Seamlessly schedule appointments and reduce no-shows</p>
          </div>

          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-electric to-purple p-4 sm:p-5 animate-pulse-slow" style={{ animationDelay: '4s' }}>
              <Cpu className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-electric mb-2">Multi-Channel</h3>
            <p className="text-gray-400 text-sm sm:text-base">Works across WhatsApp, web chat, and social media</p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;