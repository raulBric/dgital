import Header from "@/components/Header";
import SeccionPrincipal from "@/components/SeccionPrincipal";
import CustomCard from "@/components/CustomCard"; // Importación correcta de CustomCard

export default function Home() {
  return (
    <header className="bg-white">
      <Header />
      <SeccionPrincipal />
    </header>
  );
}



