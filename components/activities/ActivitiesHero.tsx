import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function ActivitiesHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-5.png')}
      eyebrow="TRIO by Maham"
      title="Activities"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
