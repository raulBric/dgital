import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function BlogLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <Head>
        <meta name="description" content="Blog de Dgital con artículos sobre marketing digital y transformación digital." />
        <link rel="canonical" href="https://www.dgital.io/blog" />
      </Head>
      <body className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700">
          <Header />
        </header>
        <main className="container mx-auto p-4 sm:p-6">
          {children}
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-4 sm:p-6">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
