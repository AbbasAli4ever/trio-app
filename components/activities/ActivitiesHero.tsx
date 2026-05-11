import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function ActivitiesHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/mp18tsxfgJ0g8r/img/hero-section.png"
      eyebrow="TRIO by Maham"
      title="Activities"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
