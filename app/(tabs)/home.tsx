import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  BrowseSection,
  CtaSection,
  HeroBanner,
  HomeHeader,
  SpecialDaysSection,
  SmartBundlesSection,
} from '@/components/home';
import { useResponsive } from '@/hooks';

export default function HomeScreen() {
  const { t } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top']}>
      <View style={{ flex: 1 }}>
        <HomeHeader />
        <ScrollView
          contentContainerStyle={{
            paddingTop: t(95, 82),
            paddingBottom: t(140, 110),
            paddingHorizontal: t(24, 16),
            gap: t(40, 24),
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <HeroBanner />
          <SpecialDaysSection />
          <SmartBundlesSection />
          <BrowseSection />
          <CtaSection />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
