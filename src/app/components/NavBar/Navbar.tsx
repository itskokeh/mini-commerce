import Link from 'next/link';
import SearchBtn from './Search';
import ShoppingCart from './ShoppingCart';
import Title from './Title';
import Profile from './Profile';
import Wishlist from './Wishlist';

export default function Navbar() {
  return (
    <header className="flex justify-between p-2 bg-primary-light w-screen pl-4 pr-4 items-center">
      {/* Title */}
      <div className="rounded-lg p-1 cursor-pointer">
        <Title />
      </div>

      {/* Nav Links */}
      <nav className="flex gap-4 text-lg">
        <Link href="/" className="hover:text-accent rounded-lg p-1">
          Home
        </Link>
        <Link
          href="/#about"
          className="hover:text-accent rounded-lg p-1"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="hover:text-accent rounded-lg p-1"
        >
          Blog
        </Link>
      </nav>

      {/* Icons */}
      <div className="flex gap-2">
      {/* <Profile /> */}
        <Link
          href="/search"
          className='hover:text-accent p-1'>
          <SearchBtn />
        </Link>
        <Link
          href="/wishlist"
          className="hover:text-accent p-1"
        >
          <Wishlist />
        </Link>
        <Link
          href="/cart"
          className="hover:text-accent p-1"
        >
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}

// TODO add custom underline to the Navbar
