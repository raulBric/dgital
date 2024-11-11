import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function BlogLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta name="description" content="Blog de Dgital con artículos sobre marketing digital y transformación digital." />
        <link rel="canonical" href="https://www.dgital.io/blog" />
      </Head>
      <body>
        <header className="bg-gradient-to-br from-gray-900 to-gray-800">
          <Header />
        </header>
        <main className="container mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
