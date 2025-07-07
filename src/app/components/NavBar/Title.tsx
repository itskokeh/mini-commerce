import Link from 'next/link';

export default function Title() {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold">
        Fruity<span className="text-accent">Store</span>
        <span className="text-secondary-light">.</span>
      </h1>
    </Link>
  );
}
