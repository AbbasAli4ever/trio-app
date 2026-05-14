import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActivitiesHero, ActivitiesIntro, ActivitiesCatalog } from '@/components/activities';
import { useResponsive } from '@/hooks';

export default function ActivitiesScreen() {
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
        <ActivitiesHero />
        <ActivitiesIntro />
        <ActivitiesCatalog />
      </ScrollView>
    </SafeAreaView>
  );
}
