import Image from 'next/image';
import Navbar from './components/NavBar/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Image
        src={'/images/apple-touch-icon.png'}
        alt={'...'}
        width={0}
        height={0}
      />
    </main>
  );
}
