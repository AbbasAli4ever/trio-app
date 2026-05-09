import { useWindowDimensions } from 'react-native';

const TABLET_SCALE = 0.768;
const MOBILE_BASE = 390;

export function useResponsive() {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;
  const mobileScale = Math.min(width / MOBILE_BASE, 1);

  // t(val) — tablet: val * 0.768 (fit 1000px design into 768px)
  // t(val, mob) — mobile: mob * mobileScale
  function t(tabletVal: number, mobileVal?: number): number {
    if (isTablet) return Math.round(tabletVal * TABLET_SCALE * 10) / 10;
    const mob = mobileVal ?? tabletVal * 0.45;
    return Math.round(mob * mobileScale * 10) / 10;
  }

  // alias
  const fs = t;
  const s = t;

  return { width, height, isTablet, scale: TABLET_SCALE, t, fs, s };
}
