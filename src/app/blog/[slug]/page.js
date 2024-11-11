import articles from '@/database/blog.json';
import Image from 'next/image';
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const article = articles.find((article) => article.slug === params.slug);
  if (!article) {
    return { title: 'Artículo no encontrado' };
  }

  return {
    title: `${article.title} - Dgital`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.dgital.io/blog/${article.slug}`,
      images: [
        {
          url: article.image,
        },
      ],
    },
    twitter: {
      title: article.title,
      description: article.description,
    },
  };
}

export default function ArticlePage({ params }) {
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return <p>Artículo no encontrado</p>;
  }

  // Datos estructurados en JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.dgital.io/blog/${article.slug}`
    },
    "headline": article.title,
    "image": [article.image],
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dgital.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dgital.io/logo.png" // URL del logo de la empresa
      }
    },
    "description": article.description
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <h1 className="text-3xl font-bold text-gray-800">{article.title}</h1>
      <p className="text-gray-600 text-sm mt-2">{article.date}</p>
      <div className="my-4">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
      <p className="text-lg text-gray-700">{article.description}</p>
      
      {/* Renderizando el contenido del artículo */}
      <div className="mt-6 space-y-6">
        {article.content.map((section, index) => (
          <div key={index}>
            <h2 className="text-3xl font-semibold text-gray-800">{section.section}</h2>
            <p className="text-gray-700 mt-10 text-lg">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
