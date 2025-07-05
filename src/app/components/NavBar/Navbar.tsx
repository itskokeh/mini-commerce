import Link from 'next/link';
import SearchBtn from './Search';
import ShoppingCart from './ShoppingCart';
import Title from './Title';
import Profile from './Profile';
import Wishlist from './Wishlist';

export default function Navbar() {
  return (
    <header className="flex justify-between p-2 bg-primary-light w-screen">
      {/* Title */}
      <div className="rounded-lg p-1 cursor-pointer">
        <Title />
      </div>

      {/* Nav Links */}
      <nav className="flex gap-4 rad">
        <Link href="/" className="hover:bg-primary-dark e rounded-lg p-1">
          Home
        </Link>
        <Link
          href="/#about"
          className="hover:bg-primary-dark hover:text-background rounded-lg p-1"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="hover:bg-primary-dark hover:text-background rounded-lg p-1"
        >
          Blog
        </Link>
      </nav>

      {/* Icons */}
      <div className="flex gap-2">
        <Profile />
        <SearchBtn />
        <Link
          href="/wishlist"
          className="hover:bg-primary-dark hover:text-background rounded-lg p-1 hover:underline hover:underline-offset-4"
        >
          <Wishlist />
        </Link>
        <Link
          href="/cart"
          className="hover:bg-primary-dark hover:text-background rounded-lg p-1 hover:underline hover:underline-offset-4"
        >
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}

// TODO add custom underline to the Navbar
