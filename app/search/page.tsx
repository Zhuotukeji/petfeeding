import { Metadata } from 'next';
import Link from 'next/link';
import { searchArticles } from '@/lib/articles';
import SearchBox from '@/components/SearchBox';
import ArticleCard from '@/components/ArticleCard';
import AfsResults from '@/components/AfsResults';

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q ?? '';
  return {
    title: query ? `"${query}" – Search | Pet Feeding Guide` : 'Search | Pet Feeding Guide',
    description: query
      ? `Search results for "${query}" on Pet Feeding Guide`
      : 'Search for pet feeding guides and nutrition advice',
    robots: 'noindex',
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (q ?? '').trim();
  const results = searchArticles(query);

  const categoryLabel: Record<string, string> = {
    dogs: '🐕 Dogs',
    cats: '🐈 Cats',
    birds: '🦜 Birds',
    'other-pets': '🐾 Other Pets',
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search bar header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SearchBox defaultQuery={query} size="compact" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        {query ? (
          <>
            {/* Result count */}
            <p className="text-sm text-gray-500 mb-6">
              {results.length > 0
                ? `About ${results.length} result${results.length !== 1 ? 's' : ''} for `
                : 'No results for '}
              <span className="font-medium text-gray-800">&ldquo;{query}&rdquo;</span>
            </p>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Main results column */}
              <div className="lg:col-span-2 space-y-4">
                {results.length > 0 ? (
                  <>
                    {results.map((article, idx) => (
                      <div key={article.id}>
                        {/* AFS ad slot after 3rd result */}
                        {idx === 3 && <AfsResults query={query} slot="mid" />}

                        <Link href={`/articles/${article.id}`} className="block group">
                          <div className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                                {categoryLabel[article.category] ?? article.category}
                              </span>
                              <span className="text-xs text-gray-400">
                                {new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                              </span>
                            </div>
                            <h2 className="text-lg font-semibold text-blue-700 group-hover:underline leading-snug">
                              {article.title}
                            </h2>
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                              {article.description}
                            </p>
                            <p className="mt-1 text-xs text-green-600">
                              petfeedingguide.com/articles/{article.id}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                    <div className="text-5xl mb-4">🔍</div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      No results found
                    </h2>
                    <p className="text-gray-500 mb-6">
                      We couldn&apos;t find any guides matching <strong>&ldquo;{query}&rdquo;</strong>.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1 mb-8">
                      <li>• Try different or more general keywords</li>
                      <li>• Check your spelling</li>
                      <li>• Browse by category below</li>
                    </ul>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {(['dogs', 'cats', 'birds', 'other-pets'] as const).map((cat) => (
                        <Link
                          key={cat}
                          href={`/${cat}`}
                          className="flex flex-col items-center gap-1 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-colors text-sm font-medium text-gray-700"
                        >
                          <span className="text-2xl">{categoryLabel[cat].split(' ')[0]}</span>
                          <span className="capitalize">{cat.replace('-', ' ')}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* AFS bottom ad slot */}
                {results.length > 0 && <AfsResults query={query} slot="bottom" />}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* AFS top sidebar slot */}
                <AfsResults query={query} slot="side" />

                {/* Browse categories */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                    Browse Categories
                  </h3>
                  <ul className="space-y-2">
                    {(['dogs', 'cats', 'birds', 'other-pets'] as const).map((cat) => (
                      <li key={cat}>
                        <Link
                          href={`/${cat}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 hover:underline"
                        >
                          <span>{categoryLabel[cat]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular searches hint */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['puppy food', 'cat nutrition', 'bird diet', 'rabbit feeding', 'senior dog', 'kitten feeding', 'parrot food', 'hamster diet'].map((term) => (
                      <Link
                        key={term}
                        href={`/search?q=${encodeURIComponent(term)}`}
                        className="text-xs bg-gray-100 hover:bg-green-100 hover:text-green-700 text-gray-600 px-2 py-1 rounded-full transition-colors"
                      >
                        {term}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </>
        ) : (
          /* Empty state – no query */
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🐾</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              What are you looking for?
            </h2>
            <p className="text-gray-500 mb-8">
              Search for feeding guides, nutrition advice, and care tips for your pet.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto sm:grid-cols-4 sm:max-w-2xl">
              {(['dogs', 'cats', 'birds', 'other-pets'] as const).map((cat) => (
                <Link
                  key={cat}
                  href={`/${cat}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white border border-gray-200 hover:border-green-400 hover:shadow-md transition-all"
                >
                  <span className="text-3xl">{categoryLabel[cat].split(' ')[0]}</span>
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {cat.replace('-', ' ')}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

