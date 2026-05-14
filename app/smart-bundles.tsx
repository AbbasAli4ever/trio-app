import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PromoBanner, SmartBundlesHero, PreCuratedBundles } from '@/components/smart-bundles';
import { useResponsive } from '@/hooks';
import { type BundleCard } from '@/constants/homeData';
import { useTrayStore } from '@/store';

export default function SmartBundlesScreen() {
  const { t } = useResponsive();
  const addItem = useTrayStore((s) => s.addItem);

  function handleAddBundle(bundle: BundleCard) {
    addItem({
      id: bundle.id,
      name: bundle.title,
      price: bundle.price,
      image: bundle.image,
      category: 'bundle',
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top']}>
      <PromoBanner />
      <ScrollView
        contentContainerStyle={{ paddingBottom: t(140, 110), paddingHorizontal: t(24, 16) }}
        showsVerticalScrollIndicator={false}
      >
        <SmartBundlesHero />
        <PreCuratedBundles onAddBundle={handleAddBundle} />
      </ScrollView>
    </SafeAreaView>
  );
}
