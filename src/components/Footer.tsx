import React from 'react';
import { Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="bg-dark-200/50 backdrop-blur-sm border-t border-dark-300/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="font-heading text-2xl tracking-wider mb-6 gradient-text font-bold">
              CSW Automation Agency
            </div>
            <p className="text-gray-400 mb-6">
              AI solutions for wellness businesses. Let our AI handle your client messages, appointment scheduling, and lead capture while you focus on delivering exceptional treatments and services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/107401518" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric transition-colors">
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/cswautomationagency/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-electric transition-colors inline-flex items-center"
                  onClick={handleClick}
                >
                  Privacy Policy
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-300/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} CSW Automation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-electric transition-colors"
              onClick={handleClick}
            >
              Terms
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-electric transition-colors"
              onClick={handleClick}
            >
              Privacy
            </Link>
            <Link 
              to="/cookies" 
              className="text-gray-400 hover:text-electric transition-colors"
              onClick={handleClick}
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;