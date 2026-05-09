import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { SMART_BUNDLES, type SmartBundle } from '@/constants/homeData';
import { SpecialDayModal } from './SpecialDayModal';

function BundleCard({ bundle, cardWidth, cardHeight, t, onAddPress }: {
  bundle: SmartBundle;
  cardWidth: number;
  cardHeight: number;
  t: (a: number, b?: number) => number;
  onAddPress?: () => void;
}) {
  const headerHeight = t(163, 130);

  return (
    <View style={{ width: cardWidth, height: cardHeight, borderRadius: t(20, 16), overflow: 'hidden', backgroundColor: bundle.headerBg }}>
      <View style={{ height: headerHeight, backgroundColor: bundle.headerBg }}>
        <Image
          source={{ uri: bundle.image }}
          style={{ position: 'absolute', top: 2, left: 0, width: t(177, 140), height: t(150, 120) }}
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            top: t(20, 14),
            right: t(20, 14),
            backgroundColor: bundle.badgeBg,
            borderRadius: 4,
            paddingHorizontal: t(10, 8),
            paddingVertical: t(4, 3),
            width: t(100, 80),
            height: t(30, 24),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(18, 14), color: bundle.badgeText }}>
            SAVE 20%
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: bundle.bodyBg, padding: t(20, 14), paddingTop: t(12, 10), justifyContent: 'space-between' }}>
        <View style={{ gap: t(16, 10) }}>
          <View style={{ gap: t(8, 5) }}>
            <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(18, 14), color: '#150929' }}>
              {bundle.title}
            </Text>
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#160a29', opacity: 0.7, lineHeight: t(19, 15) }}>
              {bundle.description}
            </Text>
          </View>
          <View style={{ gap: t(6, 4) }}>
            {bundle.features.map((feature) => (
              <View key={feature} style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6) }}>
                <View style={{ width: t(8, 6), height: t(8, 6), borderRadius: 4, backgroundColor: bundle.featureColor }} />
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 9), color: bundle.featureColor }}>
                  {feature}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ gap: t(10, 8) }}>
          {bundle.originalPrice ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(12, 8) }}>
              <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 16), color: '#370c64' }}>
                {bundle.price}
              </Text>
              <Text style={{ fontFamily: 'Inter_400Regular', fontSize: t(11, 9), color: '#9a9a9a', textDecorationLine: 'line-through' }}>
                {bundle.originalPrice}
              </Text>
            </View>
          ) : (
            <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(18, 15), color: '#370c64' }}>
              {bundle.price}
            </Text>
          )}

          {bundle.buttonGradient ? (
            <TouchableOpacity activeOpacity={0.85} onPress={onAddPress}>
              <LinearGradient
                colors={bundle.buttonGradient as [string, string]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: t(10, 8), paddingVertical: t(12, 9), alignItems: 'center' }}
              >
                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(15, 12), color: '#ffffff' }}>+ Add bundle</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={onAddPress}
              style={{ backgroundColor: bundle.buttonBg, borderRadius: t(10, 8), paddingVertical: t(12, 9), alignItems: 'center' }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(15, 12), color: '#ffffff' }}>+ Add bundle</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export function SmartBundlesSection() {
  const { width, t } = useResponsive();
  const [modalVisible, setModalVisible] = useState(false);

  // cols: 3 on tablet (≥768), 2 on medium (≥480), 1 on small
  const cols = width >= 768 ? 3 : width >= 480 ? 2 : 1;
  const gap = t(16, 12);
  const hPad = t(48, 32);
  const cardWidth = (width - hPad - gap * (cols - 1)) / cols;
  const cardHeight = t(444, 360);

  return (
    <View style={{ gap: t(16, 12) }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1d0636' }}>
          Smart Bundles
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(14, 12), color: '#775596' }}>See all →</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {SMART_BUNDLES.map((bundle) => (
          <BundleCard
            key={bundle.id}
            bundle={bundle}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            t={t}
            onAddPress={bundle.id === 'birthday' ? () => setModalVisible(true) : undefined}
          />
        ))}
      </View>

      <SpecialDayModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}
