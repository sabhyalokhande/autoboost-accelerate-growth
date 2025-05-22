
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 relative">
      <div 
        className="absolute inset-0 bg-cover bg-bottom opacity-10 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center text-black">Ready to Accelerate?</h2>
          <p className="section-subheading text-center">
            Let's take your car coating business to the next level
          </p>
          
          <Card className="mt-8 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <CardContent className="p-8 md:p-10 bg-white">
                <h3 className="text-2xl font-bold mb-6 text-black">Get in Touch</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="+65 XXXX XXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition min-h-[120px]"
                      placeholder="Tell us about your business and goals"
                    ></textarea>
                  </div>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
              
              <CardContent className="p-8 md:p-10 bg-black text-white flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-red-500">Contact Information</h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">WhatsApp / Phone</h4>
                      <a href="https://wa.me/6583060026" className="text-gray-300 hover:text-white transition-colors">
                        +65 8306 0026
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <a href="mailto:rishi@autoboostaccelerator.com" className="text-gray-300 hover:text-white transition-colors">
                        rishi@autoboostaccelerator.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold text-lg mb-4">Quick Message</h4>
                  <p className="text-gray-300 mb-4">
                    Send us a WhatsApp message right now:
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
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
