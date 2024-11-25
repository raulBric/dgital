import articles from "@/database/blog.json";
import Image from "next/image";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const article = articles.find((article) => article.slug === params.slug);
  if (!article) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: `${article.title} - Dgital`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.dgital.io/blog/${article.slug}`,
      images: [{ url: article.image }],
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
    return (
      <p className="text-gray-800 dark:text-gray-100">
        Artículo no encontrado
      </p>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.dgital.io/blog/${article.slug}`,
    },
    headline: article.title,
    image: [article.image],
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Dgital.io",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dgital.io/logo.png",
      },
    },
    description: article.description,
  };

  // Generar enlaces de compartir
  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      `https://www.dgital.io/blog/${article.slug}`
    )}&title=${encodeURIComponent(article.title)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      `https://www.dgital.io/blog/${article.slug}`
    )}&text=${encodeURIComponent(article.title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${article.title} - https://www.dgital.io/blog/${article.slug}`
    )}`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <article className="py-8">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-gray-100">
          {article.title}
        </h1>
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

        <div className="space-y-8">
          {article.content.map((section, index) => {
            if (section.section === "Conclusión") {
              return (
                <div
                  key={index}
                  className="mt-12 p-6 border-l-4 border-blue-500 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">
                    {section.section}
                  </h3>
                  <p className="text-base sm:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              );
            }

            return (
              <section key={index}>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  {section.section}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.text}
                </p>
              </section>
            );
          })}
        </div>

        {/* Botones para compartir */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Comparte este artículo:
          </h3>
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
