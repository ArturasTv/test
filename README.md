# Next.js Search App

## Project Structure
```
my-search-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── search/
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── SearchForm.tsx
│       ├── ProductCard.tsx
│       └── Accordion.tsx
├── lib/
│   └── data.ts
├── package.json
└── tailwind.config.js
```

## Setup Commands
```bash
npx create-next-app@latest my-search-app --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd my-search-app
npm install next@15.5.3 react@19.1.1 react-dom@19.1.1
```

## Files

### package.json
```json
{
  "name": "my-search-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "19.1.1",
    "react-dom": "19.1.1",
    "next": "15.5.3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "15.5.3"
  }
}
```

### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
```

### lib/data.ts
```typescript
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
}

// Fake backend data
export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16",
    description: "Powerful laptop for professionals with M3 chip",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    tags: ["laptop", "apple", "macbook", "professional", "m3"]
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "Latest iPhone with titanium design and advanced camera",
    price: 999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    tags: ["phone", "apple", "iphone", "smartphone", "titanium"]
  },
  {
    id: 3,
    name: "Samsung Galaxy S24",
    description: "Android flagship with AI features and excellent display",
    price: 899,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
    tags: ["phone", "samsung", "android", "smartphone", "galaxy"]
  },
  {
    id: 4,
    name: "AirPods Pro",
    description: "Wireless earbuds with active noise cancellation",
    price: 249,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=300&fit=crop",
    tags: ["earbuds", "apple", "airpods", "wireless", "noise-cancellation"]
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    description: "Premium over-ear headphones with industry-leading noise cancellation",
    price: 399,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    tags: ["headphones", "sony", "wireless", "noise-cancellation", "premium"]
  },
  {
    id: 6,
    name: "iPad Air",
    description: "Versatile tablet perfect for creativity and productivity",
    price: 599,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    tags: ["tablet", "apple", "ipad", "creativity", "productivity"]
  },
  {
    id: 7,
    name: "Nintendo Switch",
    description: "Hybrid gaming console for home and portable play",
    price: 299,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop",
    tags: ["gaming", "nintendo", "console", "portable", "switch"]
  },
  {
    id: 8,
    name: "Tesla Model 3",
    description: "Electric sedan with autopilot and premium interior",
    price: 35000,
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    tags: ["car", "tesla", "electric", "sedan", "autopilot"]
  },
  {
    id: 9,
    name: "Canon EOS R5",
    description: "Professional mirrorless camera with 8K video recording",
    price: 3899,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    tags: ["camera", "canon", "mirrorless", "8k", "professional"]
  },
  {
    id: 10,
    name: "Samsung 65\" OLED TV",
    description: "Premium OLED display with vibrant colors and deep blacks",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    tags: ["tv", "samsung", "oled", "65inch", "4k"]
  }
];

// Simulate server-side search
export function searchProducts(query: string): Product[] {
  if (!query.trim()) {
    return products;
  }

  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}
```

### app/components/SearchForm.tsx
```typescript
interface SearchFormProps {
  defaultValue?: string;
}

export default function SearchForm({ defaultValue = '' }: SearchFormProps) {
  return (
    <form action="/search" method="GET" className="flex w-full max-w-md">
      <label htmlFor="search-input" className="sr-only">
        Search products
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg 
            className="w-4 h-4 text-gray-500 dark:text-gray-400" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 20 20"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search-input"
          name="q"
          defaultValue={defaultValue}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search products, categories..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
```

### app/components/Header.tsx
```typescript
import SearchForm from './SearchForm';

interface HeaderProps {
  searchQuery?: string;
}

export default function Header({ searchQuery }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SearchApp
          </span>
        </a>
        
        <div className="flex md:order-2">
          <SearchForm defaultValue={searchQuery} />
        </div>
      </div>
    </header>
  );
}
```

### app/components/ProductCard.tsx
```typescript
import { Product } from '../../lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img 
        className="rounded-t-lg w-full h-48 object-cover" 
        src={product.image} 
        alt={product.name}
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {product.category}
          </span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price.toLocaleString()}
          </span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Details
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-1">
          {product.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### app/components/Accordion.tsx
```typescript
'use client';

import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg dark:border-gray-700">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-0 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`w-3 h-3 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-200 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
```

### app/components/Footer.tsx
```typescript
import Accordion from './Accordion';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Accordion title="About SearchApp">
            <p className="mb-2">
              SearchApp is your premier destination for finding the latest technology products, 
              from smartphones and laptops to gaming consoles and smart home devices.
            </p>
            <p>
              We provide detailed product information and competitive prices to help you make 
              informed purchasing decisions.
            </p>
          </Accordion>

          <Accordion title="Customer Support">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:underline">Shipping Information</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
            </ul>
          </Accordion>

          <Accordion title="Categories">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Audio & Headphones</a></li>
              <li><a href="#" className="hover:underline">Gaming</a></li>
              <li><a href="#" className="hover:underline">Photography</a></li>
              <li><a href="#" className="hover:underline">Automotive</a></li>
            </ul>
          </Accordion>

          <Accordion title="Account & Orders">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Order History</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Rewards Program</a></li>
            </ul>
          </Accordion>

          <Accordion title="Company Information">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Center</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Corporate Responsibility</a></li>
            </ul>
          </Accordion>

          <Accordion title="Legal & Privacy">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Data Protection</a></li>
              <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
            </ul>
          </Accordion>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a href="/" className="hover:underline">SearchApp™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135C4.955 0 4 .952 4 2.124v.824H2v3h2v10h3V5.948h2.4L9.884 3H7v-.876c0-.2.168-.364.135-.364z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 21 16">
                <path d="M20.071 2.125a8.5 8.5 0 0 1-2.357.646 4.119 4.119 0 0 0 1.804-2.27 8.21 8.21 0 0 1-2.606.996A4.105 4.105 0 0 0 13.895.5a4.104 4.104 0 0 0-4.103 4.103c0 .322.036.635.106.935a11.646 11.646 0 0 1-8.457-4.287 4.09 4.09 0 0 0-.556 2.064 4.103 4.103 0 0 0 1.825 3.414 4.08 4.08 0 0 1-1.859-.514v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 1 14.97a11.616 11.616 0 0 0 6.29 1.843c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0 0 21 4.11l-.929-1.985z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### app/layout.tsx
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SearchApp - Find Your Perfect Product',
  description: 'Search and discover amazing products across categories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
```

### app/page.tsx
```typescript
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { products } from '../lib/data';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="text-center py-12">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Discover Amazing Products
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Search through our curated collection of premium products and find exactly what you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

### app/search/page.tsx
```typescript
import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h2 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          No results found
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          We couldn't find any products matching "{query}". Try adjusting your search terms.
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Search Results
            </h1>
            {query && (
              <p className="text-gray-600 dark:text-gray-400">
                Showing results for: <span className="font-medium">"{query}"</span>
              </p>
            )}
          </div>
          
          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-300 dark:bg-gray-700 rounded-t-lg h-48 w-full"></div>
                  <div className="p-5">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                    <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          }>
            <SearchResults query={query} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Generate metadata for SEO
export function generateMetadata({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  return {
    title: query ? `Search Results for "${query}" - SearchApp` : 'Search - SearchApp',
    description: query ? `Find products matching "${query}"` : 'Search our product catalog',
  };
}
