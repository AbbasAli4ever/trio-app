import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PromoBanner } from '@/components/smart-bundles';
import { DecorHero, PackageGallery, PackageCustomizer } from '@/components/browse-decor';
import { useResponsive } from '@/hooks';

export default function BrowseDecorScreen() {
  const { t } = useResponsive();
  const [selectedPackageId, setSelectedPackageId] = useState('red-classic');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <View style={{ flex: 1 }}>
        <PromoBanner />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: t(140, 110),
            paddingHorizontal: t(24, 16),
            gap: t(32, 24),
          }}
          showsVerticalScrollIndicator={false}
        >
          <DecorHero />
          <PackageGallery selectedId={selectedPackageId} onSelect={setSelectedPackageId} />
          <PackageCustomizer selectedPackageId={selectedPackageId} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
