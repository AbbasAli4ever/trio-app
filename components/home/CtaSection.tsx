import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { CTA_BOUQUET, CTA_SPIN } from '@/constants/homeData';

export function CtaSection() {
  const { t } = useResponsive();
  const router = useRouter();
  const cardHeight = t(153, 120);

  return (
    <View style={{ flexDirection: 'row', gap: t(16, 10) }}>
      {/* Spin CTA */}
      <TouchableOpacity activeOpacity={0.85} style={{ flex: 1 }} onPress={() => router.push('/spin-wheel')}>
        <LinearGradient
          colors={['#775596', '#c66def']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: cardHeight,
            borderRadius: t(22, 16),
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
            padding: t(22, 14),
            gap: t(16, 10),
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: t(30, 20),
              left: t(30, 16),
              width: t(96, 70),
              height: t(96, 70),
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
            source={CTA_SPIN.image}
            style={{ width: t(110, 80), height: t(110, 80), marginTop: -5, marginBottom: -5 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1, gap: t(12, 6), zIndex: 1 }}>
            <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: t(15, 11), color: '#ffffff' }}>
              {CTA_SPIN.tagline}
            </Text>
            <View style={{ gap: t(4, 2) }}>
              <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(32, 18), color: '#ffffff', letterSpacing: -0.5 }}>
                {CTA_SPIN.title}
              </Text>
              <Text style={{ fontFamily: 'Inter_400Regular', fontSize: t(12, 10), color: '#ffffff' }}>
                {CTA_SPIN.subtitle}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Bouquet Builder CTA */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push('/build-bouquet')}
        style={{
          flex: 1,
          height: cardHeight,
          backgroundColor: '#ffffff',
          borderRadius: t(26, 16),
          flexDirection: 'row',
          alignItems: 'center',
          padding: t(22, 14),
          gap: t(22, 10),
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.13,
          shadowRadius: 11,
          elevation: 4,
        }}
      >
        <View
          style={{
            width: t(60, 44),
            height: t(60, 44),
            borderRadius: t(30, 22),
            backgroundColor: '#fbebf0',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
          <Image
            source={CTA_BOUQUET.image}
            style={{ width: t(70, 50), height: t(78, 56) }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1, gap: t(4, 3) }}>
          <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(21, 14), color: '#1a1a1a' }}>
            {CTA_BOUQUET.title}
          </Text>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: t(12, 10), color: '#6e6e6e', lineHeight: t(18, 14) }}>
            {CTA_BOUQUET.subtitle}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#775596',
            borderRadius: 5,
            paddingHorizontal: t(6, 5),
            paddingVertical: t(3, 2),
            position: 'absolute',
            right: t(20, 12),
            bottom: t(15, 10),
          }}
        >
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: t(16, 13), color: '#ffffff' }}>→</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
