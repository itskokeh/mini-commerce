'use client';

import { useCartStore } from '@/store/cartStore';
import Navbar from '../components/NavBar/Navbar';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';
// import Image from 'next/image';

const naira = getSymbolFromCurrency('NGN');

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getSubtotal, getTotalItems } =
    useCartStore();

  if (cart.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <p>
            Your cart is empty.{' '}
            <Link href="/" className="text-accent">
              Continue shopping
            </Link>
            .
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 p-4 bg-orange-100 rounded-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src={item.product.urls[0]}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-bold text-black">{item.product.name}</h3>
                <p className="text-accent">
                  {naira}
                  {item.product.price_NGN.toLocaleString('en-NG')} x{' '}
                  {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2 text-black">
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity - 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                  aria-label={`Decrease quantity of ${item.product.name}`}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                  aria-label={`Increase quantity of ${item.product.name}`}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500"
                  aria-label={`Remove ${item.product.name} from cart`}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="text-xl font-bold">
            Subtotal ({getTotalItems()} items): {naira}
            {getSubtotal().toLocaleString('en-NG')}
          </p>
          <Link href="/checkout">
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
