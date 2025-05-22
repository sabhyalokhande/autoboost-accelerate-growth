
import React from 'react';
import { Card } from "@/components/ui/card";

const caseStudyResults = [
  "Stronger brand identity",
  "Improved digital systems",
  "Better customer acquisition",
  "Scalable growth roadmap"
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-heading text-center">Client Success Story: Keeper LABO (Singapore)</h2>
        <p className="section-subheading text-center">
          See how we transformed a premium car coating business in Singapore
        </p>
        
        <div className="mt-12 bg-gradient-to-r from-autoboost-navy to-[#2A3040] text-white rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Challenge section */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 text-autoboost-blue">The Challenge</h3>
              <p className="mb-6 text-autoboost-silver">
                Keeper LABO, a premium car coating and detailing studio in Singapore, 
                wanted to grow their digital footprint, improve internal operations, 
                and scale services in a competitive market.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-autoboost-blue">The Results</h3>
              <ul className="space-y-3">
                {caseStudyResults.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-autoboost-blue mr-2">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* What we did section */}
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-autoboost-blue">What We Did</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Social Media Growth & Brand Visibility</h4>
                  <ul className="text-sm space-y-1 text-autoboost-silver">
                    <li>• Implemented structured content strategy showcasing services and results</li>
                    <li>• Grew Instagram followers from under 30 to over 700 in weeks</li>
                    <li>• Set up branded Facebook & YouTube channels</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Website, SEO & Online Booking</h4>
                  <ul className="text-sm space-y-1 text-autoboost-silver">
                    <li>• Designed a modern, mobile-responsive website with a premium look</li>
                    <li>• Integrated seamless online appointment booking system</li>
                    <li>• Optimized SEO with local keywords, improving Google rankings</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Strategic Collaborations</h4>
                  <ul className="text-sm space-y-1 text-autoboost-silver">
                    <li>• Secured partnerships with major automotive brands</li>
                    <li>• Leveraged co-marketing and referral networks</li>
                    <li>• Ran seasonal promotional campaigns, increasing sales by 75%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
