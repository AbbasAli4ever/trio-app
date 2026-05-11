import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function CinemaHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/mp158p9uFQYlPn/img/hero-section.png"
      eyebrow="TRIO by Maham"
      title="Cinema"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
