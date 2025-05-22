
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container-section py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-autoboost-navy">
                <span className="text-autoboost-blue">Auto</span>Boost
                <span className="text-autoboost-blue ml-1">Accelerator</span>
              </h1>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-autoboost-navy hover:text-autoboost-blue transition-colors">Features</a>
            <a href="#services" className="text-autoboost-navy hover:text-autoboost-blue transition-colors">Services</a>
            <a href="#difference" className="text-autoboost-navy hover:text-autoboost-blue transition-colors">Why Us</a>
            <a href="#timeline" className="text-autoboost-navy hover:text-autoboost-blue transition-colors">Journey</a>
            <a href="#case-study" className="text-autoboost-navy hover:text-autoboost-blue transition-colors">Case Study</a>
            <Button 
              asChild
              className="bg-autoboost-blue text-white hover:bg-autoboost-navy"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-autoboost-navy p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-autoboost-navy hover:text-autoboost-blue transition-colors"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a 
                href="#services" 
                className="text-autoboost-navy hover:text-autoboost-blue transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#difference" 
                className="text-autoboost-navy hover:text-autoboost-blue transition-colors"
                onClick={toggleMenu}
              >
                Why Us
              </a>
              <a 
                href="#timeline" 
                className="text-autoboost-navy hover:text-autoboost-blue transition-colors"
                onClick={toggleMenu}
              >
                Journey
              </a>
              <a 
                href="#case-study" 
                className="text-autoboost-navy hover:text-autoboost-blue transition-colors"
                onClick={toggleMenu}
              >
                Case Study
              </a>
              <Button 
                asChild
                className="bg-autoboost-blue text-white hover:bg-autoboost-navy w-full"
                onClick={toggleMenu}
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
