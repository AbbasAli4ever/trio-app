import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlowersHero, FlowerListing } from '@/components/flowers';
import { useResponsive } from '@/hooks';

export default function FlowersScreen() {
  const { t } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: t(48, 32),
          paddingHorizontal: t(24, 16),
          gap: t(24, 18),
        }}
        showsVerticalScrollIndicator={false}
      >
        <FlowersHero />
        <FlowerListing />
      </ScrollView>
    </SafeAreaView>
  );
}
