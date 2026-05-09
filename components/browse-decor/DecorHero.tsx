import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function DecorHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/moybk94uF21O9Y/img/hero-section.png"
      eyebrow="TRIO by Maham"
      title="Occasion Decor"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
