'use client';

import Link from 'next/link';
import SearchBtn from './Search';
import ShoppingCart from './ShoppingCart';
import Title from './Title';
import Wishlist from './Wishlist';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-between p-4 bg-primary-light min-w-full items-center sticky top-0 z-50">
      {/* Title */}
      <div className="rounded-lg p-1">
        <Title />
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-accent"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation (Desktop + Mobile) */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 text-lg absolute md:static top-16 left-0 right-0 bg-primary-light md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="hover:text-accent rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="hover:text-accent rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/blog"
          className="hover:text-accent rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        {/* Icons (Move to Menu on Mobile) */}
        <div className="flex gap-2 mt-4 md:mt-0" aria-label="User actions">
          <Link
            href="/search"
            className="hover:text-accent p-1 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            <SearchBtn />
          </Link>
          <Link
            href="/wishlist"
            className="hover:text-accent p-1 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            <Wishlist />
          </Link>
          <Link
            href="/cart"
            className="hover:text-accent p-1 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </header>
  );
}
