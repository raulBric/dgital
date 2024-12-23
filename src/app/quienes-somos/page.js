import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutAs";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsappButton";

export default function QuienesSomosPage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />  
      <AboutUs />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}