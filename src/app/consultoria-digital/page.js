import Header from "@/components/Header";
import DigitalConsultingService from "@/components/servicios/DigitalConsultingService";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />  
      <DigitalConsultingService />
      <Footer />
    </header>
  );
}