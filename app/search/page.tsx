'use client';

import { useSearchParams } from 'next/navigation';
import SearchBox from '@/components/SearchBox';

export default function SearchPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Search Results
        </h1>
        <div className="gcse-searchresults-only"></div>
      </div>
    </div>
  );
}
