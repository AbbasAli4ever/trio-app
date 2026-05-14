import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BouquetHero, BouquetBuilder } from '@/components/bouquet';
import { useResponsive } from '@/hooks';

export default function BuildBouquetScreen() {
  const { t } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: t(140, 110),
          paddingHorizontal: t(24, 16),
          gap: t(20, 16),
        }}
        showsVerticalScrollIndicator={false}
      >
        <BouquetHero />
        <BouquetBuilder />
      </ScrollView>
    </SafeAreaView>
  );
}
