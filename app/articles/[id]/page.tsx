import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleById, getAllArticles } from '@/lib/articles';
import FAQSection from '@/components/FAQSection';

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return {};

  return {
    title: `${article.title} | Pet Feeding Guide`,
    description: article.description,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  const categoryLabel = article.category.replace('-', ' ');
  const categoryHref = `/${article.category}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    keywords: article.keywords.join(', '),
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Pet Feeding Guide',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href={categoryHref} className="hover:text-green-600 capitalize">{categoryLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate">{article.title}</span>
          </nav>

          <article className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-4">
              <Link
                href={categoryHref}
                className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full capitalize hover:bg-green-200 transition-colors"
              >
                {categoryLabel}
              </Link>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
              {article.title}
            </h1>

            <p className="text-gray-500 text-sm mb-6">
              Published: {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <p className="text-lg text-gray-600 mb-8 italic border-l-4 border-green-500 pl-4">
              {article.description}
            </p>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                {article.content}
              </p>
            </div>
          </article>

          {/* FAQ Section */}
          <FAQSection faqs={article.faqs} />

          {/* Back link */}
          <div className="mt-8">
            <Link
              href={categoryHref}
              className="text-green-600 hover:underline font-medium"
            >
              ← Back to {categoryLabel} articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
