
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-autoboost-navy to-[#2A3040] text-white py-20 md:py-28">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Transform Your Car Coating Business — 
            <span className="text-autoboost-blue">Fast</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-autoboost-silver animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AutoBoost Accelerator is the only business growth program built specifically for 
            car coating and detailing companies. We blend marketing, technology, and partnerships 
            to scale your operations, drive revenue, and build a powerful, lasting brand.
          </p>
          
          <p className="text-lg mb-10 text-autoboost-gray animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From website design to strategic deals with top automotive platforms, 
            we're with you every step of the way.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              className="bg-autoboost-blue hover:bg-blue-600 text-white px-8 py-6 text-lg w-full md:w-auto"
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                Contact Us Now <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <a href="https://wa.me/6583060026" className="text-autoboost-silver hover:text-white transition-colors">
                WhatsApp +65 8306 0026
              </a>
              <span className="hidden md:inline text-autoboost-gray">|</span>
              <a href="mailto:info@urbansingapore.com" className="text-autoboost-silver hover:text-white transition-colors">
                Email info@urbansingapore.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
