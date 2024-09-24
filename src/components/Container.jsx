import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import QuienSomos from './QuienSomos';
import SeccionPrincipal from './SeccionPrincipal';
import ServicesSection from './ServiceSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import BlogSection from './BlogSection';
import AboutUsSection from './AboutusSection';


export default function Container() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <HeroSection />
      {/* <ServicesSection /> */}
      <div className="bg-white">
      <ServicesSection />
      </div>
      <div className="bg-gray-200">
      <AboutUsSection />
      <BlogSection />
      <FAQSection />
      </div>
      {/* <AccordionSection /> */}
      <Footer />
    </div>
  );
}
