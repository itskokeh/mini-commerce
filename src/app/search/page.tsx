'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';
import Navbar from '../components/NavBar/Navbar';
import { useState } from 'react';
import ImageSlideshow from '../components/SlideShow/ImageSlideshow';
import getSymbolFromCurrency from 'currency-symbol-map';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { ProductSpecs } from '@/lib/api';

const naira = getSymbolFromCurrency('NGN');

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductSpecs[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 text-black">
        <h1 className="text-2xl font-bold mb-4">Search Products</h1>
        <div className="relative mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for fruits..."
            className="w-full p-3 sm:p-2 pl-10 border rounded-lg text-sm sm:text-base"
            aria-label="Search products"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {!isLoading && !error && filteredProducts?.length === 0 && (
          <p>No products found.</p>
        )}
        <div className="grid custom-grid gap-3">
          {filteredProducts?.map((product) => (
            <div
              key={product.id}
              className="p-3 bg-orange-100 rounded-lg flex flex-col"
            >
              <Link href={`/product/${product.id}`}>
                <ImageSlideshow images={product.urls} alt={product.name} />
                <h3 className="text-2xl font-extrabold text-black m-2 mb-1">
                  {product.name}
                </h3>
                <p className="text-orange-900 ml-2 mb-1">
                  {naira}
                  {product.price_NGN.toLocaleString('en-NG')}
                </p>
                <p className="text-gray-500 ml-2 mb-4">{product.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
