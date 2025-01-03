import Header from "@/components/Header";
import WebDesignService from "@/components/servicios/WebDesignService";
import Footer from "@/components/Footer";
import Precios from "@/components/Precios";
import WhatsAppButton from "@/components/WhatsappButton";

export default function ServiciosPage() {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />  
      <WebDesignService />
      <WhatsAppButton />
      <Footer />
    </header>
  );
}