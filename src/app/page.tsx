import Navbar from './components/NavBar/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <h2 className="h-screen">The main content</h2>
      <h3 id="about"> This is the about</h3>
    </main>
  );
}
