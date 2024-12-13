import CookiesPage from '@/components/CookiesPage';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function CookiesPolicyPage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <CookiesPage />
      <Footer />
    </main>
  );
}
