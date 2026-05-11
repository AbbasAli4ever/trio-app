import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function BouquetHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/mp18tsxfgJ0g8r/img/hero-section-1.png"
      eyebrow="TRIO by Maham"
      title="Build Your Bouquet"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
