import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function CinemaHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-4.png')}
      eyebrow="TRIO by Maham"
      title="Cinema"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
