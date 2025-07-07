'use client';

import Navbar from './components/NavBar/Navbar';
import ImageSlideshow from './components/SlideShow/ImageSlideshow';
import { ShoppingBasketIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';
import getSymbolFromCurrency from 'currency-symbol-map';
import Link from 'next/link';
import { ProductSpecs } from '@/lib/api';
import { useCartStore } from '@/store/cartStore';

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
      <main>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p>Loading products...</p>
        </div>
      </main>
    );
  }

  if (error || !products) {
    return (
      <main>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">
            Error: {error?.message || 'No products found'}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="grid custom-grid gap-3 m-3">
        {products.map((product) => (
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
            <div className="bg-green-500 align-center rounded-lg mt-auto">
              <button
                onClick={() => useCartStore.getState().addToCart(product)}
                className="text-white justify-center items-center flex min-h-12 w-full cursor-pointer hover:bg-green-700 hover:rounded-lg hover:underline"
                aria-label={`Add ${product.name} to cart`}
              >
                <span>
                  <ShoppingBasketIcon />
                </span>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
