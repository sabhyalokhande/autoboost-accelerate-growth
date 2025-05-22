
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const uspPoints = [
  {
    title: "Niche Focus",
    description: "100% specialized in the car coating industry with deep expertise",
    icon: "🎯"
  },
  {
    title: "Real Partnerships",
    description: "Access networks like Toyota, BYD, Tesla, and other major automotive brands",
    icon: "🤝"
  },
  {
    title: "Performance-Driven",
    description: "We care about traffic, leads, and revenue – not just vanity metrics",
    icon: "📈"
  },
  {
    title: "Full-Team Support",
    description: "Branding, marketing, logistics, all handled by dedicated specialists",
    icon: "👥"
  },
  {
    title: "Clear Roadmap",
    description: "Week-by-week growth plan. No guesswork, just clear action steps",
    icon: "🗺️"
  },
];

const USP = () => {
  return (
    <section id="difference" className="py-20 bg-black text-white relative">
      {/* Background luxury car image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="container-section relative z-10">
        <h2 className="section-heading text-center text-white">What Makes Us Different</h2>
        <p className="section-subheading text-center text-gray-300">
          We're not just another marketing agency. We're your dedicated growth partner.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {uspPoints.map((point, index) => (
            <Card 
              key={index} 
              className="bg-black/60 backdrop-blur-sm border border-red-900/30 hover:bg-black/80 transition-colors duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-red-500">{point.title}</h3>
                <p className="text-gray-300 text-sm">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
