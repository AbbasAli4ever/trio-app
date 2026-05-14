import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function BeveragesHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-6.png')}
      eyebrow="TRIO by Maham"
      title="Beverages"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
