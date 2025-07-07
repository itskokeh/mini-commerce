export interface ProductSpecs {
  id: string;
  name: string;
  price_NGN: number;
  urls: string[];
  description: string;
}

export async function fetchProducts() {
  const res = await fetch('/products.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  // Seed to localStorage
  localStorage.setItem('products', JSON.stringify(data.products));
  return data.products as ProductSpecs[];
}

export async function getProductBySlug(slug: string) {
  const products = JSON.parse(
    localStorage.getItem('products') || '[]'
  ) as ProductSpecs[];
  const product = products.find((p) => p.id === slug);
  if (!product) throw new Error('Product not found');
  return product;
}
