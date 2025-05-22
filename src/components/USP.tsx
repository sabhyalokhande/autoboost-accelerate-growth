
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
    <section id="difference" className="py-20 bg-gradient-to-r from-autoboost-navy to-[#2A3040] text-white">
      <div className="container-section">
        <h2 className="section-heading text-center text-white">What Makes Us Different</h2>
        <p className="section-subheading text-center text-autoboost-silver">
          We're not just another marketing agency. We're your dedicated growth partner.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {uspPoints.map((point, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-autoboost-blue">{point.title}</h3>
                <p className="text-autoboost-silver text-sm">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
