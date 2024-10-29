
import Container from "@/components/Container";
import { DarkModeProvider } from "@/context/Mycontext";


export default function Home() {
  return (
    <DarkModeProvider>
      <header className="bg-white">
        <Container />
      </header>
    </DarkModeProvider>

  );
}



