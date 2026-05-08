import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { CTA_BOUQUET, CTA_SPIN } from '@/constants/homeData';

export function CtaSection() {
  const { isTablet } = useResponsive();
  const cardHeight = isTablet ? 153 : 140;

  return (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      {/* Spin CTA */}
      <TouchableOpacity activeOpacity={0.85} style={{ flex: 1 }}>
        <LinearGradient
          colors={['#775596', '#c66def']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: cardHeight,
            borderRadius: 22,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 22,
            gap: 16,
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 30,
              left: 30,
              width: 96,
              height: 96,
              backgroundColor: '#c46ced',
              borderRadius: 53,
              opacity: 1,
              shadowColor: '#c46ced',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 1,
              shadowRadius: 30,
              elevation: 20,
            }}
          />
          <Image
            source={{ uri: CTA_SPIN.image }}
            style={{ width: 110, height: 110, marginTop: -5, marginBottom: -5 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1, gap: 12, zIndex: 1 }}>
            <Text
              style={{
                fontFamily: 'Montserrat_400Regular',
                fontSize: 15,
                color: '#ffffff',
              }}
            >
              {CTA_SPIN.tagline}
            </Text>
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  fontFamily: 'PlayfairDisplay_600SemiBold',
                  fontSize: isTablet ? 32 : 24,
                  color: '#ffffff',
                  letterSpacing: -0.5,
                }}
              >
                {CTA_SPIN.title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  color: '#ffffff',
                }}
              >
                {CTA_SPIN.subtitle}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Bouquet Builder CTA */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={{
          flex: 1,
          height: cardHeight,
          backgroundColor: '#ffffff',
          borderRadius: 26,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 22,
          gap: 22,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.13,
          shadowRadius: 11,
          elevation: 4,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#fbebf0',
            alignItems: 'center',
            justifyContent: 'center',
           
          }}
        >
          <Image
            source={{ uri: CTA_BOUQUET.image }}
            style={{ width: 70, height: 78 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1, gap: 4 }}>
          <Text
            style={{
              fontFamily: 'PlayfairDisplay_500Medium',
              fontSize: isTablet ? 21 : 17,
              color: '#1a1a1a',
            }}
          >
            {CTA_BOUQUET.title}
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              color: '#6e6e6e',
              lineHeight: 18,
            }}
          >
            {CTA_BOUQUET.subtitle}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#775596',
            borderRadius: 5,
            paddingHorizontal: 6,
            paddingVertical: 3,
            position: 'absolute',
            right: 20,
            bottom: 15,
          }}
        >
          <Text
            style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
              color: '#ffffff',
            }}
          >
            →
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
