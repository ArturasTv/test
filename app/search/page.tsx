import { Suspense } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { searchProducts } from '../../lib/data';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

function SearchResults({ query }: { query: string }) {
  const results = searchProducts(query);

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h2 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No results found</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          We couldn&apos;t find any products matching your search for{' '}
          <span className="font-medium">{query}</span>. Try adjusting your search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';

  return (
    <>
      <Header searchQuery={query} />
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Search Results</h1>
            {query && (
              <p className="text-gray-600 dark:text-gray-400">
                Showing results for: <span className="font-medium">{query}</span>
              </p>
            )}
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-300 dark:bg-gray-700 rounded-t-lg h-48 w-full" />
                    <div className="p-5">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4" />
                      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            }
          >
            <SearchResults query={query} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function generateMetadata({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  return {
    title: query ? `Search Results for "${query}" - SearchApp` : 'Search - SearchApp',
    description: query ? `Find products matching "${query}"` : 'Search our product catalog',
  };
}
