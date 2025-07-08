import Navbar from './components/NavBar/Navbar';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <Link
          href="/"
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
