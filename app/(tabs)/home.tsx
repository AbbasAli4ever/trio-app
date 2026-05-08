import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  BrowseSection,
  CtaSection,
  HeroBanner,
  HomeHeader,
  Navbar,
  SpecialDaysSection,
  SmartBundlesSection,
} from '@/components/home';
import { useResponsive } from '@/hooks';

export default function HomeScreen() {
  const { isTablet } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <View style={{ flex: 1 }}>
        <HomeHeader />
        <ScrollView
          contentContainerStyle={{
            paddingTop: isTablet ? 95 : 88,
            paddingBottom: isTablet ? 110 : 100,
            paddingHorizontal: 24,
            gap: 40,
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
        <Navbar />
      </View>
    </SafeAreaView>
  );
}
