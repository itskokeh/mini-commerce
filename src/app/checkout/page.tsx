'use client';

import { useCartStore } from '@/store/cartStore';
import Navbar from '../components/NavBar/Navbar';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useTransition } from 'react';

const naira = getSymbolFromCurrency('NGN');

export default function Checkout() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const { cart, getSubtotal, getTotalItems, clearCart } = useCartStore();
  const router = useRouter();
  const orderId = Math.random().toString(36).slice(2, 10).toUpperCase();

  useEffect(() => {
    const hasNavigatedToSuccess = window.location.pathname.includes('success');
    if (cart.length === 0 && !hasNavigatedToSuccess) {
      router.push('/cart');
    }
  }, [cart, router]);

  const handleCheckout = () => {
    router.push(`/checkout/success?orderId=${orderId}`);
    startTransition(() => {
      setTimeout(() => clearCart(), 2000);
    });
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 p-4 bg-orange-100 rounded-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.product.urls[0]}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold text-black">{item.product.name}</h3>
                <p className="text-accent">
                  {naira}
                  {item.product.price_NGN.toLocaleString('en-NG')} x{' '}
                  {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xl font-bold mt-4">
          Total ({getTotalItems()} items): {naira}
          {getSubtotal().toLocaleString('en-NG')}
        </p>
        <button
          onClick={handleCheckout}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          aria-label="Place order"
        >
          Place Order
        </button>
      </div>
    </main>
  );
}
