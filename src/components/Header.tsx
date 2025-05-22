
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="sticky top-0 w-full bg-black shadow-md z-50">
      <div className="container-section py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-red-600">Auto</span>Boost
                <span className="text-red-600 ml-1">Accelerator</span>
              </h1>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-red-500 transition-colors">Features</a>
            <a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</a>
            <a href="#difference" className="text-gray-300 hover:text-red-500 transition-colors">Why Us</a>
            <a href="#timeline" className="text-gray-300 hover:text-red-500 transition-colors">Journey</a>
            <a href="#case-study" className="text-gray-300 hover:text-red-500 transition-colors">Case Study</a>
            <Button 
              asChild
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
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
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#difference" 
                className="text-gray-300 hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Why Us
              </a>
              <a 
                href="#timeline" 
                className="text-gray-300 hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Journey
              </a>
              <a 
                href="#case-study" 
                className="text-gray-300 hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Case Study
              </a>
              <Button 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white w-full"
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
