import Link from 'next/link';
import SearchBox from '@/components/SearchBox';

export default function Home() {
  const categories = [
    {
      name: 'Dogs',
      icon: '🐕',
      href: '/dogs',
      description: 'Complete feeding guides for all dog breeds and sizes',
    },
    {
      name: 'Cats',
      icon: '🐈',
      href: '/cats',
      description: 'Nutrition advice for healthy and happy cats',
    },
    {
      name: 'Birds',
      icon: '🦜',
      href: '/birds',
      description: 'Dietary requirements for various bird species',
    },
    {
      name: 'Other Pets',
      icon: '🐾',
      href: '/other-pets',
      description: 'Feeding guides for rabbits, hamsters, and more',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Pet Feeding Guide</span>
              <span className="block text-green-600 mt-2">Expert Nutrition Advice</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Discover comprehensive feeding guides, nutrition tips, and dietary recommendations for your beloved pets.
            </p>

            {/* Search Box */}
            <div className="mt-10">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Browse by Pet Type
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{category.description}</p>
                <div className="mt-4 text-green-600 text-sm font-medium group-hover:underline">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Guide?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comprehensive Information
              </h3>
              <p className="text-gray-600">
                Detailed guides covering all aspects of pet nutrition and feeding schedules.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Advice
              </h3>
              <p className="text-gray-600">
                Information based on veterinary recommendations and nutritional science.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy to Search
              </h3>
              <p className="text-gray-600">
                Find exactly what you need with our powerful search functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
