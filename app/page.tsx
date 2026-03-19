import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BottomCards from '@/components/BottomCards';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-6 md:px-12 py-6 max-w-[1600px] mx-auto">
      <Navbar />
      <Hero />
      <BottomCards />
    </main>
  );
}
