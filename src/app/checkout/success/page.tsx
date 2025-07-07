import Navbar from '../../components/NavBar/Navbar';
import Link from 'next/link';
import { Suspense } from 'react';
import OrderInfo from './OrderInfo';

export default function Success() {
  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>

        <Suspense fallback={<p>Generating your order ID...</p>}>
          <OrderInfo />
        </Suspense>

        <p className="mt-2">Your order has been successfully placed.</p>
        <Link
          href="/"
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
