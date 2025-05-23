import articles from "@/database/blog.json";
import Image from "next/image";

// Metadata dinámica
export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return { title: "Artículo no encontrado" };

  // Extraer palabras clave del contenido si está disponible
  const keywords = article.content
    ? article.content.map(section => section.section).join(", ")
    : "desarrollo web, marketing digital, tecnología";
    
  // Crear URL completa del artículo
  const url = `https://www.dgital.io/blog/${article.slug}`;
  
  // Datos estructurados para el artículo (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "headline": article.title,
    "image": [article.image],
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": article.author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dgital.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dgital.io/logo.png",
      },
    },
    "description": article.description,
  };

  return {
    metadataBase: new URL('https://www.dgital.io'),
    title: `${article.title} – Dgital`,
    description: article.description,
    keywords: keywords,
    authors: [{ name: article.author.name }],
    publisher: "Dgital.io",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      images: [{ url: article.image }],
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      siteName: "Dgital.io",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
      creator: "@dgital",
    },
    other: {
      "article:published_time": article.date,
      "article:author": article.author.name,
    },
    // Añadir datos estructurados usando la nueva API de scripts en Next.js 15
    scripts: [
      {
        type: "application/ld+json",
        text: JSON.stringify(structuredData),
      },
    ],
  };
}

export default function ArticlePage({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) {
    return (
      <p className="text-gray-800 dark:text-gray-100">
        Artículo no encontrado
      </p>
    );
  }

  const share = encodeURIComponent(`https://www.dgital.io/blog/${article.slug}`);
  const title = encodeURIComponent(article.title);
  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?url=${share}&title=${title}`,
    twitter: `https://twitter.com/intent/tweet?url=${share}&text=${title}`,
    whatsapp: `https://api.whatsapp.com/send?text=${title}%20-%20${share}`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <article className="py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 mb-6">
          Publicado el {article.date} por {article.author.name}
        </p>

        <div className="mb-6">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-lg w-full h-auto shadow-md"
          />
        </div>

        {/* Contenido */}
        <div className="space-y-8">
          {article.content.map((section, i) =>
            section.section === "Conclusión" ? (
              <div
                key={i}
                className="mt-12 p-6 border-l-4 border-blue-500 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{section.section}</h3>
                <p className="text-lg leading-relaxed">{section.text}</p>
              </div>
            ) : (
              <section key={i}>
                <h2 className="text-2xl font-semibold mb-4">
                  {section.section}
                </h2>
                <p className="text-lg leading-relaxed">{section.text}</p>
              </section>
            )
          )}
        </div>

        {/* Compartir */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6">
          <h3 className="text-xl font-bold mb-4">Comparte este artículo:</h3>
          <div className="flex space-x-4">
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-800"
            >
              LinkedIn
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-500"
            >
              Twitter
            </a>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
