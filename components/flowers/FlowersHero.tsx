import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function FlowersHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-3.png')}
      eyebrow="TRIO by Maham"
      title="Flowers"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
