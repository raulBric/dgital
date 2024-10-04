import Header from "@/components/Header";
import AIService from "@/components/servicios/AIService";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />  
      <AIService />
      <Footer />
    </header>
  );
}