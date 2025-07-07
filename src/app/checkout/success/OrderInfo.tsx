'use client';

import { useSearchParams } from 'next/navigation';

export default function OrderInfo() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <p>
      Your order ID is: <strong>{orderId || 'N/A'}</strong>
    </p>
  );
}
