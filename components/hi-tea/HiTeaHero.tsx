import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function HiTeaHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/mp158p9uFQYlPn/img/hero-section-2.png"
      eyebrow="TRIO by Maham"
      title="Hi-Tea"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
