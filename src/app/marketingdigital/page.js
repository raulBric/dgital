import Header from "@/components/Header";
import DigitalMarketingService from "@/components/servicios/DigitalMarketingService";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />  
      <DigitalMarketingService />
      <Footer />
    </header>
  );
}