'use client';

import Navbar from './components/NavBar/Navbar';
import ImageSlideshow from './components/SlideShow/ImageSlideshow';
import { ShoppingBasketIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';
import getSymbolFromCurrency from 'currency-symbol-map';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ProductSpecs } from '@/lib/api';

const naira = getSymbolFromCurrency('NGN');

export default function Home() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductSpecs[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <p className="text-lg">Loading products...</p>
        </div>
      </main>
    );
  }

  if (error || !products) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <p className="text-red-500 text-lg">
            Error: {error?.message || 'No products found'}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-7xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Our Fresh Fruits
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index: number) => (
            <div
              key={product.id + index}
              className="p-4 bg-orange-100 rounded-lg flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <Link
                href={`/product/${product.id}`}
                className="flex flex-col flex-1"
              >
                <ImageSlideshow images={product.urls} alt={product.name} />
                <h3 className="text-lg sm:text-xl font-extrabold text-black mt-2 mb-1">
                  {product.name}
                </h3>
                <p className="text-orange-900 text-base sm:text-lg mb-1">
                  {naira}
                  {product.price_NGN.toLocaleString('en-NG')}
                </p>
                <p className="text-gray-500 text-sm sm:text-base mb-4 line-clamp-2">
                  {product.description}
                </p>
              </Link>
              <button
                onClick={() => useCartStore.getState().addToCart(product)}
                className="bg-green-500 text-white justify-center items-center flex min-h-10 sm:min-h-12 w-full rounded-lg hover:bg-green-700 transition-colors"
                aria-label={`Add ${product.name} to cart`}
              >
                <span className="mr-2">
                  <ShoppingBasketIcon size={20} />
                </span>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
