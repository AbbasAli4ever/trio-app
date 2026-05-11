import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function DiningHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-6.png"
      eyebrow="TRIO by Maham"
      title="Dining"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
