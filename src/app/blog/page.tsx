import Navbar from '../components/NavBar/Navbar';
import getSymbolFromCurrency from 'currency-symbol-map';
import ImageSlideshow from '../components/SlideShow/ImageSlideshow';
import { ShoppingBasketIcon } from 'lucide-react'

interface ProductSpecs {
  id: string;
  name: string;
  price_NGN: number;
  urls: string[];
  description: string;
}

const naira = getSymbolFromCurrency('NGN');

async function getProducts() {
  try {
    const res = await fetch('http://localhost:3000/products.json/', {
      next: {
        revalidate: 0,
      },
    });
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return data.products as ProductSpecs[];
  } catch (error) {
    console.log('An error occurred', error);
    return undefined;
  }
}
export default async function Blog() {
  const products = await getProducts();

  if (!products) {
    return (
      <>
        <Navbar />
        <div>No Products Found</div>
      </>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="grid custom-grid gap-3 m-3">
        {products.map((product) => (
          <div key={product.id} className="p-3 bg-orange-100 rounded-lg flex flex-col">
            <ImageSlideshow images={product.urls} alt={product.name} />
            <h3 className="text-2xl font-extrabold text-black m-2 mb-1">{product.name}</h3>
            <p className='text-orange-900 ml-2 mb-1'>
              {naira}
              {product.price_NGN.toLocaleString('en-NG')}
            </p>
            <p className='text-gray-500 ml-2 mb-4'>{product.description}</p>
            <div className='bg-green-500 align-center rounded-lg mt-auto'>
              <p className='text-white justify-center items-center flex min-h-12 cursor-pointer hover:bg-green-700 hover:rounded-lg hover:underline'>
              <span><ShoppingBasketIcon /></span>Add to Cart</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
