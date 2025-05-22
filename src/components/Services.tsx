
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  LayoutDashboard, 
  Users, 
  BarChart2, 
  Link, 
  Rocket, 
  ShoppingCart, 
  Truck, 
  ChartBar
} from 'lucide-react';

const services = [
  {
    title: "Brand & Packaging Consultation",
    icon: Briefcase,
    description: "Professional brand identity development and packaging design",
  },
  {
    title: "Website Design + SEO",
    icon: LayoutDashboard,
    description: "Custom websites optimized for conversions and search engines",
  },
  {
    title: "Social Media Strategy & Management",
    icon: Users,
    description: "Strategic content creation and community engagement",
  },
  {
    title: "Digital Ads & Campaign Planning",
    icon: BarChart2,
    description: "Targeted digital marketing campaigns that drive results",
  },
  {
    title: "Partnership Sourcing",
    icon: Link,
    description: "Connect with Mazda, Tesla, SGCarMart & more key industry players",
  },
  {
    title: "Franchise & Expansion Roadmap",
    icon: Rocket,
    description: "Scale your business with strategic expansion planning",
  },
  {
    title: "eCommerce Storefront Setup",
    icon: ShoppingCart,
    description: "Full-featured online stores for additional revenue streams",
  },
  {
    title: "Logistics & Vendor Optimization",
    icon: Truck,
    description: "Streamline operations and reduce costs with better processes",
  },
  {
    title: "Growth Analytics & Reporting",
    icon: ChartBar,
    description: "Data-driven insights to measure and accelerate your growth",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-heading text-center">Our Services</h2>
        <p className="section-subheading text-center">
          Everything you need. All in one place.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 hover:border-autoboost-blue/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-autoboost-blue/10 text-autoboost-blue">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-autoboost-navy">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
