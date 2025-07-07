// src/components/NavBar/Navbar.tsx
import Link from 'next/link';
import SearchBtn from './Search';
import ShoppingCart from './ShoppingCart';
import Title from './Title';
import Wishlist from './Wishlist';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="flex justify-between p-2 bg-primary-light pl-4 pr-4 items-center">
      <div className="rounded-lg p-1">
        <Title />
      </div>
      <nav className="flex gap-4 text-lg" aria-label="Main navigation">
        <Link
          href="/"
          className="hover:text-accent rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="hover:text-accent rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="hover:text-accent rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Blog
        </Link>
      </nav>
      <div className="flex gap-2" aria-label="User actions">
        <Link
          href="/search"
          className="hover:text-accent p-1 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <SearchBtn />
        </Link>
        <Link
          href="/wishlist"
          className="hover:text-accent p-1 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <Wishlist />
        </Link>
        <Link
          href="/cart"
          className="hover:text-accent p-1 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <ShoppingCart />
        </Link>
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
}
