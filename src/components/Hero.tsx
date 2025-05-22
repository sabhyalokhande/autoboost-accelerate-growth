
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28 relative">
      {/* Add overlay with luxury car background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Transform Your Car Coating Business — 
            <span className="text-red-600">Fast</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AutoBoost Accelerator is the only business growth program built specifically for 
            car coating and detailing companies. We blend marketing, technology, and partnerships 
            to scale your operations, drive revenue, and build a powerful, lasting brand.
          </p>
          
          <p className="text-lg mb-10 text-gray-400 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From website design to strategic deals with top automotive platforms, 
            we're with you every step of the way.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg w-full md:w-auto"
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                Contact Us Now <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <a href="https://wa.me/6583060026" className="text-gray-300 hover:text-white transition-colors">
                WhatsApp +65 8306 0026
              </a>
              <span className="hidden md:inline text-gray-500">|</span>
              <a href="mailto:rishi@autoboostaccelerator.com" className="text-gray-300 hover:text-white transition-colors">
                Email rishi@autoboostaccelerator.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
