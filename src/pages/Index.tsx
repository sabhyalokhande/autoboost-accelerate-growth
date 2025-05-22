
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import USP from '@/components/USP';
import Timeline from '@/components/Timeline';
import CaseStudy from '@/components/CaseStudy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <USP />
        <Timeline />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
