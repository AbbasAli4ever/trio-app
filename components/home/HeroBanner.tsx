import { HERO } from '@/constants/homeData';
import { HeroBannerBase } from '@/components/shared/HeroBannerBase';

export function HeroBanner() {
  return (
    <HeroBannerBase
      backgroundImage={HERO.backgroundImage}
      eyebrow="Welcome to"
      title="TRIO by Maham"
      paragraph={'Dining · Bouquets · Cinema · Decor · Hi-Tea · Activities\nAll Under One Roof.'}
      marginTop
    />
  );
}
