import Header from "@/components/Header";
import DigitalMentorshipService from "@/components/servicios/DigitalMentorshipService";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />  
      <DigitalMentorshipService />
      <Footer />
    </header>
  );
}