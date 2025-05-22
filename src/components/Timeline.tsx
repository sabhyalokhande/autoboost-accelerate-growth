
import React from 'react';

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Setup & Strategy",
    description: "Refine branding, launch website, optimize operations",
    weeks: "Weeks 1-4",
    color: "bg-autoboost-blue"
  },
  {
    phase: "Phase 2",
    title: "Build & Expand",
    description: "Forge partnerships, boost visibility without extra spend",
    weeks: "Weeks 5-10",
    color: "bg-blue-500"
  },
  {
    phase: "Phase 3",
    title: "Scale & Grow",
    description: "Run powerful campaigns, explore franchising and eCommerce",
    weeks: "Weeks 11-16",
    color: "bg-blue-700"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-autoboost-silver">
      <div className="container-section">
        <h2 className="section-heading text-center">Your 16-Week Growth Journey</h2>
        <p className="section-subheading text-center">
          A structured approach to transform your business for lasting success
        </p>
        
        <div className="mt-16 max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline connector */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-8 top-8 bottom-0 w-1 bg-gray-200 h-full md:left-1/2 md:-ml-0.5"></div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center">
                {/* Phase indicator */}
                <div className="flex-shrink-0 z-10">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full text-white font-bold ${item.color}`}>
                    {item.phase}
                  </div>
                </div>
                
                {/* Timeline content */}
                <div className="ml-8 mt-4 md:ml-12 md:mt-0 md:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <div className="text-sm text-autoboost-blue font-semibold mb-2">{item.weeks}</div>
                    <h3 className="text-xl font-bold mb-3 text-autoboost-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* After timeline */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-autoboost-navy">After 16 Weeks? Keep Growing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            <div className="p-4">
              <div className="font-semibold text-autoboost-navy">Dedicated support team</div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-autoboost-navy">Ongoing strategy sessions</div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-autoboost-navy">Campaign management</div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-autoboost-navy">Performance reporting</div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-autoboost-navy">Operations oversight</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
