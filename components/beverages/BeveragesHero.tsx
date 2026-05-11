import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function BeveragesHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/mp158p9uFQYlPn/img/hero-section-1.png"
      eyebrow="TRIO by Maham"
      title="Beverages"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
