
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Eye, TrendingUp, Rocket, Settings, Car, TrendingDown } from 'lucide-react';

const features = [
  {
    title: "Attract more high-paying customers",
    icon: Users,
    description: "Target premium market segments with strategic marketing campaigns",
  },
  {
    title: "Strengthen your online visibility",
    icon: Eye,
    description: "Build a powerful digital presence that captures attention",
  },
  {
    title: "Create revenue-boosting partnerships",
    icon: TrendingUp,
    description: "Connect with major automotive brands and platforms",
  },
  {
    title: "Run smarter, more targeted campaigns",
    icon: Settings,
    description: "Optimize your marketing spend with data-driven strategies",
  },
  {
    title: "Cut operational costs",
    icon: TrendingDown,
    description: "Streamline processes and reduce unnecessary expenses",
  },
  {
    title: "Unlock new income streams",
    icon: Rocket,
    description: "Discover additional revenue opportunities for your business",
  },
  {
    title: "Become the market leader in your region",
    icon: Car,
    description: "Establish your brand as the premier choice for car coating services",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-autoboost-silver py-20">
      <div className="container-section">
        <h2 className="section-heading text-center">What We Help You Achieve</h2>
        <p className="section-subheading text-center">
          Our tailored approach creates tangible results for your car coating business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-autoboost-blue/10 text-autoboost-blue">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-autoboost-navy">{feature.title}</h3>
                <p className="text-autoboost-dark-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
