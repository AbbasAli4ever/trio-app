import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function SmartBundlesHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/home/HS.png')}
      eyebrow="TRIO by Maham"
      title="Smart Bundles"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
