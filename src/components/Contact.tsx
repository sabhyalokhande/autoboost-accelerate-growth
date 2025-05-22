
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-autoboost-silver">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Ready to Accelerate?</h2>
          <p className="section-subheading text-center">
            Let's take your car coating business to the next level
          </p>
          
          <Card className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <CardContent className="p-8 md:p-10 bg-white">
                <h3 className="text-2xl font-bold mb-6 text-autoboost-navy">Get in Touch</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-autoboost-blue focus:border-autoboost-blue outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-autoboost-blue focus:border-autoboost-blue outline-none transition"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-autoboost-blue focus:border-autoboost-blue outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-autoboost-blue focus:border-autoboost-blue outline-none transition"
                        placeholder="+65 XXXX XXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-autoboost-blue focus:border-autoboost-blue outline-none transition min-h-[120px]"
                      placeholder="Tell us about your business and goals"
                    ></textarea>
                  </div>
                  
                  <Button 
                    className="w-full bg-autoboost-blue hover:bg-blue-600 text-white py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
              
              <CardContent className="p-8 md:p-10 bg-autoboost-navy text-white flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-autoboost-blue">Contact Information</h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-autoboost-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">WhatsApp / Phone</h4>
                      <a href="https://wa.me/6583060026" className="text-autoboost-silver hover:text-white transition-colors">
                        +65 8306 0026
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-autoboost-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <a href="mailto:info@urbansingapore.com" className="text-autoboost-silver hover:text-white transition-colors">
                        info@urbansingapore.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold text-lg mb-4">Quick Message</h4>
                  <p className="text-autoboost-silver mb-4">
                    Send us a WhatsApp message right now:
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-autoboost-blue text-autoboost-blue hover:bg-autoboost-blue hover:text-white"
                    asChild
                  >
                    <a href="https://wa.me/6583060026?text=Interested%20in%20AutoBoost" target="_blank" rel="noopener noreferrer">
                      Message "Interested in AutoBoost"
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
