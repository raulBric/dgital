import Header from "@/components/Header";

export default function Home() {
  return (
    <header className="bg-white">
      <div className="bg-black h-10 w-full flex items-center justify-end lg:justify-end">
        <span className="text-white mr-4 cursor-pointer">Es</span>
        <span className="text-white mr-8 cursor-pointer">Cat</span>
      </div>
      <div className="flex justify-center">
        <Header />
      </div>
    </header>
  );
}


