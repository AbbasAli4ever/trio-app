import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';
import { PRECURATED_BUNDLES, type BundleCard } from '@/constants/homeData';

function BundleCardItem({
  bundle,
  t,
  isTablet,
  onAddBundle,
}: {
  bundle: BundleCard;
  t: (a: number, b?: number) => number;
  isTablet: boolean;
  onAddBundle: (bundle: BundleCard) => void;
}) {
  const imgSize = t(192, 140);
  const cardHeight = t(220, undefined);

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: t(20, 16),
        overflow: 'hidden',
        flexDirection: 'row',
        height: isTablet ? cardHeight : undefined,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4.37 },
        shadowOpacity: 0.05,
        shadowRadius: t(22, 16),
        elevation: 3,
      }}
    >
      {/* Left: image + SAVE badge */}
      <View style={{ width: imgSize, flexShrink: 0 }}>
        <Image
          source={bundle.image}
          style={{ width: imgSize, height: '100%', minHeight: t(192, 150) }}
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            top: t(20, 14),
            left: t(20, 14),
            zIndex: 1,
            height: t(30, 24),
            width: t(100, 78),
            backgroundColor: '#ffffff',
            borderRadius: t(8, 6),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: t(10, 7),
          }}
        >
          <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(24, 18), color: '#775596', lineHeight: t(26, 20) }}>
            SAVE 20%
          </Text>
        </View>
      </View>

      {/* Right: content */}
      <View style={{ flex: 1, padding: t(20, 14), paddingTop: t(12, 10), justifyContent: 'space-between', gap: t(12, 8) }}>
        <View style={{ gap: t(12, 8) }}>
          <View style={{ gap: t(8, 5) }}>
            <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(20, 15), color: '#1e0736' }}>
              {bundle.title}
            </Text>
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), lineHeight: t(16.5, 13), color: '#1e0736', opacity: 0.7 }}>
              {bundle.description}
            </Text>
          </View>

          <View style={{ gap: t(4, 3), paddingBottom: t(6, 4) }}>
            {bundle.features.map((item) => (
              <View key={item} style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6) }}>
                <Text style={{ fontSize: t(12, 10), color: '#775596' }}>✦</Text>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#775596' }}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Price + button */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: t(16, 10) }}>
          <View style={{ gap: t(4, 3), minWidth: t(63, 50) }}>
            {bundle.originalPrice ? (
              <Text style={{ fontFamily: 'Inter_400Regular', fontSize: t(11, 9), color: '#9a9a9a', textDecorationLine: 'line-through' }}>
                {bundle.originalPrice}
              </Text>
            ) : null}
            <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 16), color: '#370c64', lineHeight: t(22, 18) }}>
              {bundle.price}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => onAddBundle(bundle)}
            style={{
              flex: 1,
              backgroundColor: '#775596',
              borderRadius: t(10, 8),
              paddingVertical: t(10, 8),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>
              + Add bundle
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

type Props = {
  onAddBundle: (bundle: BundleCard) => void;
};

export function PreCuratedBundles({ onAddBundle }: Props) {
  const { width, t, isTablet } = useResponsive();

  const cols = isTablet ? 2 : 1;
  const hPad = t(24, 16);
  const gap = t(24, 16);
  const cardWidth = cols === 2 ? (width - hPad * 2 - gap) / 2 : width - hPad * 2;

  return (
    <View style={{ paddingTop: t(50, 32), gap: t(24, 18) }}>
      <View style={{ gap: t(8, 6) }}>
        <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), letterSpacing: t(2, 1.5), color: '#775596' }}>
          PRE-CURATED · SAVE UP TO 20%
        </Text>
        <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: t(19, 15), lineHeight: t(23, 19), color: 'rgba(29,6,54,0.7)' }}>
          Hand-picked combinations our regulars love — tap any to add the whole set.
        </Text>
      </View>

      {cols === 2 ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
          {PRECURATED_BUNDLES.map((bundle) => (
            <View key={bundle.id} style={{ width: cardWidth }}>
              <BundleCardItem bundle={bundle} t={t} isTablet={isTablet} onAddBundle={onAddBundle} />
            </View>
          ))}
        </View>
      ) : (
        <View style={{ gap }}>
          {PRECURATED_BUNDLES.map((bundle) => (
            <BundleCardItem key={bundle.id} bundle={bundle} t={t} isTablet={isTablet} onAddBundle={onAddBundle} />
          ))}
        </View>
      )}
    </View>
  );
}
