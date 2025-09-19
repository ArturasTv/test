import type { Product } from '../../lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {product.category}
          </span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price.toLocaleString()}</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Details
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-1">
          {product.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
