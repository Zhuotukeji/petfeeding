'use client';

import { useEffect } from 'react';

export default function SearchBox() {
  useEffect(() => {
    // Load Google Custom Search script
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=' + process.env.NEXT_PUBLIC_AFS_SEARCH_ID;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="gcse-searchbox-only" data-resultsUrl="/search"></div>
    </div>
  );
}
