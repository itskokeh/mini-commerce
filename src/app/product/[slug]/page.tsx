'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductBySlug } from '@/lib/api';
import ImageSlideshow from '../../components/SlideShow/ImageSlideshow';
import { ShoppingBasketIcon } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import getSymbolFromCurrency from 'currency-symbol-map';
import Navbar from '../../components/NavBar/Navbar';
import { notFound } from 'next/navigation';
import { ProductSpecs } from '@/lib/api';

export const runtime = 'edge';
const naira = getSymbolFromCurrency('NGN');

export default function ProductPage({ params }: { params: { slug: string } }) {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery<ProductSpecs, Error>({
    queryKey: ['product', params.slug],
    queryFn: () => getProductBySlug(params.slug),
  });

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      </main>
    );
  }

  if (error || !product) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-6">
          <ImageSlideshow images={product.urls} alt={product.name} />
          <div>
            <h1 className="text-3xl font-extrabold">{product.name}</h1>
            <p className="text-orange-900 text-xl my-2">
              {naira}
              {product.price_NGN.toLocaleString('en-NG')}
            </p>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <button
              onClick={() => useCartStore.getState().addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBasketIcon />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
