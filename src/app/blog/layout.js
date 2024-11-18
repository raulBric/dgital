import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogLayout({ children }) {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700">
        <Header />
      </header>
      <main className="container mx-auto p-4 sm:p-6">{children}</main>
        <Footer />
    </div>
  );
}
