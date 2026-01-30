import type { Metadata } from 'next';
import DemoBanner from '@/components/demo/DemoBanner';
import RestaurantHero from '@/components/demo/RestaurantHero';
import RestaurantHours from '@/components/demo/RestaurantHours';
import RestaurantMenu from '@/components/demo/RestaurantMenu';
import RestaurantGallery from '@/components/demo/RestaurantGallery';
import RestaurantStory from '@/components/demo/RestaurantStory';
import RestaurantCTA from '@/components/demo/RestaurantCTA';
import RestaurantFooter from '@/components/demo/RestaurantFooter';

export const metadata: Metadata = {
  title: 'The Cocoa Table | Demo Restaurant Site',
  description: 'A demo restaurant website showcasing what a local restaurant site could look like. Built by Anthony Arbaiza.',
};

export default function RestaurantDemoPage() {
  return (
    <>
      <DemoBanner />
      <main className="pt-12">
        <RestaurantHero />
        <RestaurantHours />
        <RestaurantMenu />
        <RestaurantGallery />
        <RestaurantStory />
        <RestaurantCTA />
      </main>
      <RestaurantFooter />
    </>
  );
}
