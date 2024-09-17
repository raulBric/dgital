import Header from "@/components/Header";
import SeccionPrincipal from "@/components/SeccionPrincipal";
import CustomCard from "@/components/CustomCard"; // Importación correcta de CustomCard
import QuienSomos from "@/components/QuienSomos";

export default function Home() {
  return (
    <header className="bg-white">
      <Header />
      <SeccionPrincipal />
      <QuienSomos />
    </header>
  );
}



