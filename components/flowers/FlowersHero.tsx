import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function FlowersHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/mp0xwaecNdkuMq/img/hero-section.png"
      eyebrow="TRIO by Maham"
      title="Flowers"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
