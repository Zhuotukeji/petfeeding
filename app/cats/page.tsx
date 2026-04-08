import { Metadata } from 'next';
import { getArticlesByCategory } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export const metadata: Metadata = {
  title: 'Cat Feeding Guides | Pet Feeding Guide',
  description: 'Comprehensive cat feeding guides covering nutrition, feeding schedules, kitten care, and senior cat dietary needs.',
  keywords: 'cat feeding, cat nutrition, cat diet, kitten feeding, senior cat food',
};

export default function CatsPage() {
  const articles = getArticlesByCategory('cats');

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐈</div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Cat Feeding Guides
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice on feeding your feline companion for a healthy, happy life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
