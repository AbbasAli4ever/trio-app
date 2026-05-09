import { router } from 'expo-router';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function SmartBundlesHero() {
  return (
    <HeroBannerBase
      backgroundImage="https://c.animaapp.com/moy8bt6h4zSfsO/img/hero-section.png"
      eyebrow="TRIO by Maham"
      title="Smart Bundles"
      backLabel="BACK TO HOME"
      onBack={() => router.back()}
      marginTop
    />
  );
}
