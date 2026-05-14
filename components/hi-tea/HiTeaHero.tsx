import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function HiTeaHero() {
  return (
    <HeroBannerBase
      backgroundImage={require('@/public/images/HS-5.png')}
      eyebrow="TRIO by Maham"
      title="Hi-Tea"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
