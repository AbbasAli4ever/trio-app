import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function DiningHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-2.png')}
      eyebrow="TRIO by Maham"
      title="Dining"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
