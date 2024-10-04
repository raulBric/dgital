import Header from "@/components/Header";
import IoTDesignService from "@/components/servicios/IoTDesignService";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />  
      <IoTDesignService />
      <Footer />
    </header>
  );
}