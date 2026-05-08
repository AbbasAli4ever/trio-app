import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { SMART_BUNDLES, type SmartBundle } from '@/constants/homeData';

function BundleCard({ bundle, cardWidth, cardHeight }: { bundle: SmartBundle; cardWidth: number; cardHeight: number }) {
  const headerHeight = 163;

  return (
    <View
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: bundle.headerBg,
      }}
    >
      {/* Header with image */}
      <View style={{ height: headerHeight, backgroundColor: bundle.headerBg, position: 'relative' }}>
        <Image
          source={{ uri: bundle.image }}
          style={{ position: 'absolute', top: 2, left: 0, width: 177, height: 150 }}
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: bundle.badgeBg,
            borderRadius: 4,
            paddingHorizontal: 10,
            paddingVertical: 4,
            width: 100,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'BebasNeue_400Regular',
              fontSize: 18,
              color: bundle.badgeText,
            }}
          >
            SAVE 20%
          </Text>
        </View>
      </View>

      {/* Body */}
      <View
        style={{
          flex: 1,
          backgroundColor: bundle.bodyBg,
          padding: 20,
          paddingTop: 12,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ gap: 16 }}>
          <View style={{ gap: 8 }}>
            <Text
              style={{
                fontFamily: 'PlayfairDisplay_500Medium',
                fontSize: 18,
                color: '#150929',
              }}
            >
              {bundle.title}
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 12,
                color: '#160a29',
                opacity: 0.7,
                lineHeight: 19,
              }}
            >
              {bundle.description}
            </Text>
          </View>
          <View style={{ gap: 6 }}>
            {bundle.features.map((feature) => (
              <View key={feature} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: bundle.featureColor,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat_500Medium',
                    fontSize: 11,
                    color: bundle.featureColor,
                  }}
                >
                  {feature}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ gap: 10 }}>
          {bundle.originalPrice ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Text
                style={{
                  fontFamily: 'BebasNeue_400Regular',
                  fontSize: 20,
                  color: '#370c64',
                }}
              >
                {bundle.price}
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_400Regular',
                  fontSize: 11,
                  color: '#9a9a9a',
                  textDecorationLine: 'line-through',
                }}
              >
                {bundle.originalPrice}
              </Text>
            </View>
          ) : (
            <Text
              style={{
                fontFamily: 'BebasNeue_400Regular',
                fontSize: 18,
                color: '#370c64',
              }}
            >
              {bundle.price}
            </Text>
          )}

          {bundle.buttonGradient ? (
            <TouchableOpacity activeOpacity={0.85}>
              <LinearGradient
                colors={bundle.buttonGradient as [string, string]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 10,
                  paddingVertical: 12,
                  alignItems: 'center',
                  shadowColor: '#fff',
                  shadowOffset: { width: 0, height: -2 },
                  shadowOpacity: 0.45,
                  shadowRadius: 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    color: '#ffffff',
                  }}
                >
                  + Add bundle
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.85}
              style={{
                backgroundColor: bundle.buttonBg,
                borderRadius: 10,
                paddingVertical: 12,
                alignItems: 'center',
                shadowColor: '#fff',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.45,
                shadowRadius: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Inter_500Medium',
                  fontSize: 15,
                  color: '#ffffff',
                }}
              >
                + Add bundle
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export function SmartBundlesSection() {
  const { isTablet } = useResponsive();
  const cardWidth = isTablet ? 312 : 260;
  const cardHeight = isTablet ? 444 : 380;

  return (
    <View style={{ gap: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_600SemiBold',
            fontSize: isTablet ? 24 : 20,
            color: '#1d0636',
          }}
        >
          Smart Bundles
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              fontFamily: 'Inter_500Medium',
              fontSize: 14,
              color: '#775596',
            }}
          >
            See all →
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingRight: 4 }}
        decelerationRate="fast"
        snapToInterval={cardWidth + 16}
        snapToAlignment="start"
      >
        {SMART_BUNDLES.map((bundle) => (
          <BundleCard
            key={bundle.id}
            bundle={bundle}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
          />
        ))}
      </ScrollView>
    </View>
  );
}
