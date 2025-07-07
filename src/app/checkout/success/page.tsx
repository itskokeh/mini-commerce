'use client';

import Navbar from '../../components/NavBar/Navbar';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Success() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>
        <p>
          Your order ID is: <strong>{orderId || 'N/A'}</strong>
        </p>
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
