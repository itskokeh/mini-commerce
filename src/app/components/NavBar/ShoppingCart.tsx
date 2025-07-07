'use client';

import { ShoppingBasketIcon } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function ShoppingCart() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <div className="relative">
      <ShoppingBasketIcon aria-label="Shopping cart" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
}
