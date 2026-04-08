import { Metadata } from 'next';
import { getArticlesByCategory } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export const metadata: Metadata = {
  title: 'Dog Feeding Guides | Pet Feeding Guide',
  description: 'Comprehensive dog feeding guides covering nutrition, feeding schedules, puppy care, and senior dog dietary needs.',
  keywords: 'dog feeding, dog nutrition, dog diet, puppy feeding, senior dog food',
};

export default function DogsPage() {
  const articles = getArticlesByCategory('dogs');

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐕</div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Dog Feeding Guides
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about feeding your dog at every life stage.
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
