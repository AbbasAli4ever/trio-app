import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PromoBanner, SmartBundlesHero, PreCuratedBundles, TrayPanel } from '@/components/smart-bundles';
import { useResponsive } from '@/hooks';
import { type BundleCard } from '@/constants/homeData';

type TrayItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export default function SmartBundlesScreen() {
  const { t } = useResponsive();
  const [trayOpen, setTrayOpen] = useState(false);
  const [trayItems, setTrayItems] = useState<TrayItem[]>([]);

  function handleAddBundle(bundle: BundleCard) {
    setTrayItems((prev) => {
      const existing = prev.find((i) => i.id === bundle.id);
      if (existing) {
        return prev.map((i) => i.id === bundle.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: bundle.id, name: bundle.title, price: bundle.price, image: bundle.image, quantity: 1 }];
    });
    setTrayOpen(true);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <View style={{ flex: 1 }}>
        <PromoBanner />
        <ScrollView
          contentContainerStyle={{ paddingBottom: t(48, 32), paddingHorizontal: t(24, 16) }}
          showsVerticalScrollIndicator={false}
        >
          <SmartBundlesHero />
          <PreCuratedBundles onAddBundle={handleAddBundle} />
        </ScrollView>

        <TrayPanel
          visible={trayOpen}
          onClose={() => setTrayOpen(false)}
          initialItems={trayItems}
        />
      </View>
    </SafeAreaView>
  );
}
