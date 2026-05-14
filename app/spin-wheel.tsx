import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SpinHero, SpinContent } from '@/components/spin-wheel';
import { useResponsive } from '@/hooks';

export default function SpinWheelScreen() {
  const { t } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: t(140, 110),
          paddingHorizontal: t(24, 16),
          gap: t(18, 14),
        }}
        showsVerticalScrollIndicator={false}
      >
        <SpinHero />
        <SpinContent />
      </ScrollView>
    </SafeAreaView>
  );
}
