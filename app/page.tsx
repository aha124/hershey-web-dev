import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhyLocal from '@/components/sections/WhyLocal';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyLocal />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
