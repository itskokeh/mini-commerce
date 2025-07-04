import Link from 'next/link';
import SearchBtn from './Search';
import ShoppingCart from './ShoppingCart';
import Title from './Title';
import Profile from './Profile';
import Wishlist from './Wishlist';

export default function Navbar() {
  return (
    <header className="flex">
      {/* Title */}
      <div>
        <Title />
      </div>

      {/* Nav Links */}
      <nav className="flex">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
      </nav>

      {/* Icons */}
      <div>
        <Profile />
        <SearchBtn />
        <Wishlist />
        <ShoppingCart />
      </div>
    </header>
  );
}
