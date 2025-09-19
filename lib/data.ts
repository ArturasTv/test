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
    name: 'MacBook Pro 16',
    description: 'Powerful laptop for professionals with M3 chip',
    price: 2499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
    tags: ['laptop', 'apple', 'macbook', 'professional', 'm3'],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with titanium design and advanced camera',
    price: 999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    tags: ['phone', 'apple', 'iphone', 'smartphone', 'titanium'],
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24',
    description: 'Android flagship with AI features and excellent display',
    price: 899,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop',
    tags: ['phone', 'samsung', 'android', 'smartphone', 'galaxy'],
  },
  {
    id: 4,
    name: 'AirPods Pro',
    description: 'Wireless earbuds with active noise cancellation',
    price: 249,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=300&fit=crop',
    tags: ['earbuds', 'apple', 'airpods', 'wireless', 'noise-cancellation'],
  },
  {
    id: 5,
    name: 'Sony WH-1000XM5',
    description: 'Premium over-ear headphones with industry-leading noise cancellation',
    price: 399,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
    tags: ['headphones', 'sony', 'wireless', 'noise-cancellation', 'premium'],
  },
  {
    id: 6,
    name: 'iPad Air',
    description: 'Versatile tablet perfect for creativity and productivity',
    price: 599,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    tags: ['tablet', 'apple', 'ipad', 'creativity', 'productivity'],
  },
  {
    id: 7,
    name: 'Nintendo Switch',
    description: 'Hybrid gaming console for home and portable play',
    price: 299,
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop',
    tags: ['gaming', 'nintendo', 'console', 'portable', 'switch'],
  },
  {
    id: 8,
    name: 'Tesla Model 3',
    description: 'Electric sedan with autopilot and premium interior',
    price: 35000,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
    tags: ['car', 'tesla', 'electric', 'sedan', 'autopilot'],
  },
  {
    id: 9,
    name: 'Canon EOS R5',
    description: 'Professional mirrorless camera with 8K video recording',
    price: 3899,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
    tags: ['camera', 'canon', 'mirrorless', '8k', 'professional'],
  },
  {
    id: 10,
    name: 'Samsung 65" OLED TV',
    description: 'Premium OLED display with vibrant colors and deep blacks',
    price: 1799,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
    tags: ['tv', 'samsung', 'oled', '65inch', '4k'],
  },
];

// Simulate server-side search
export function searchProducts(query: string): Product[] {
  if (!query.trim()) {
    return products;
  }

  const searchTerm = query.toLowerCase();
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
  );
}
