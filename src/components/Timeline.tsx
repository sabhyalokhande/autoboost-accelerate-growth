
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const timelineItems = [
  {
    phase: "1",
    title: "Setup & Strategy",
    description: "Refine branding, launch website, optimize operations",
    weeks: "Weeks 1-4",
    color: "bg-red-600"
  },
  {
    phase: "2",
    title: "Build & Expand",
    description: "Forge partnerships, boost visibility without extra spend",
    weeks: "Weeks 5-10",
    color: "bg-red-700"
  },
  {
    phase: "3",
    title: "Scale & Grow",
    description: "Run powerful campaigns, explore franchising and eCommerce",
    weeks: "Weeks 11-16",
    color: "bg-red-800"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-black text-white relative">
      {/* Background luxury car image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>

      <div className="container-section relative z-10">
        <h2 className="section-heading text-center text-white">Your 16-Week Growth Journey</h2>
        <p className="section-subheading text-center text-gray-300">
          A structured approach to transform your business for lasting success
        </p>
        
        <div className="mt-16 relative">
          {/* Horizontal connector line */}
          <div className="absolute left-0 right-0 top-8 h-1 bg-gray-700 hidden md:block"></div>
          
          {/* Timeline items */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative w-full md:w-1/3">
                {/* Circle indicator */}
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg shadow-red-900/30`}>
                  {item.phase}
                </div>
                
                {/* Content card */}
                <Card className="mt-6 w-full bg-black/60 backdrop-blur-sm border border-red-900/30 hover:bg-black/80 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="text-sm text-red-500 font-semibold mb-2">{item.weeks}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* After timeline */}
        <div className="mt-16 bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">After 16 Weeks? Keep Growing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            <div className="p-4 bg-black/40 rounded-md">
              <div className="font-semibold text-red-500">Dedicated support team</div>
            </div>
            <div className="p-4 bg-black/40 rounded-md">
              <div className="font-semibold text-red-500">Ongoing strategy sessions</div>
            </div>
            <div className="p-4 bg-black/40 rounded-md">
              <div className="font-semibold text-red-500">Campaign management</div>
            </div>
            <div className="p-4 bg-black/40 rounded-md">
              <div className="font-semibold text-red-500">Performance reporting</div>
            </div>
            <div className="p-4 bg-black/40 rounded-md">
              <div className="font-semibold text-red-500">Operations oversight</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
