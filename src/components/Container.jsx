import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServiceSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import ContactSection from './ContactSection';
import FasesProyecto from './FasesProyecto';
import WhatsAppButton from './WhatsappButton';




export default function Container() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 ">
      <Header />
      <HeroSection />
      {/* <ServicesSection /> */}
      <div className="bg-white">
      <ServicesSection />
      {/* <CarouselSection /> */}
      <FasesProyecto />
      </div>
      <div className="bg-gray-200">
      <FAQSection />
      </div>
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
