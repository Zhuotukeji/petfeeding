import { Metadata } from 'next';
import { getArticlesByCategory } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export const metadata: Metadata = {
  title: 'Other Pets Feeding Guides | Pet Feeding Guide',
  description: 'Feeding guides for rabbits, guinea pigs, hamsters, ferrets, reptiles, and other small pets.',
  keywords: 'rabbit feeding, guinea pig diet, hamster food, ferret nutrition, reptile feeding',
};

export default function OtherPetsPage() {
  const articles = getArticlesByCategory('other-pets');

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐾</div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Other Pets Feeding Guides
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nutrition guides for rabbits, guinea pigs, hamsters, ferrets, reptiles, and more.
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
