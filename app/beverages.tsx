import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BeveragesHero, BeverageCategoryFilter, BeverageGrid } from '@/components/beverages';
import { useResponsive } from '@/hooks';

export default function BeveragesScreen() {
  const { t } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: t(140, 110),
          paddingHorizontal: t(24, 16),
          gap: t(24, 18),
        }}
        showsVerticalScrollIndicator={false}
      >
        <BeveragesHero />
        <BeverageCategoryFilter />
        <BeverageGrid />
      </ScrollView>
    </SafeAreaView>
  );
}
