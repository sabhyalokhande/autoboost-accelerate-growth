
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-red-600">Auto</span>Boost
              <span className="text-red-600 ml-1">Accelerator</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Drive Growth. Drive Impact.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#difference" className="text-gray-300 hover:text-white transition-colors">Why Us</a></li>
                <li><a href="#case-study" className="text-gray-300 hover:text-white transition-colors">Case Study</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://wa.me/6583060026" className="text-gray-300 hover:text-white transition-colors">
                    WhatsApp: +65 8306 0026
                  </a>
                </li>
                <li>
                  <a href="mailto:rishi@autoboostaccelerator.com" className="text-gray-300 hover:text-white transition-colors">
                    Email: rishi@autoboostaccelerator.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} AutoBoost Accelerator. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Specialized Growth Program for Car Coating Businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
