import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function BouquetHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-7.png')}
      eyebrow="TRIO by Maham"
      title="Build Your Bouquet"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
