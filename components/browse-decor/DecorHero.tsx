import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function DecorHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-1.png')}
      eyebrow="TRIO by Maham"
      title="Occasion Decor"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
