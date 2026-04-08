import Link from 'next/link';
import { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200 h-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full capitalize">
            {article.category.replace('-', ' ')}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {article.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="text-green-600 text-sm font-medium group-hover:underline">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
