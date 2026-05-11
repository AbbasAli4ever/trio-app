import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

export function SpinHero() {
  const { t } = useResponsive();

  return (
    <View
      style={{
        borderRadius: t(24, 18),
        overflow: 'hidden',
        marginTop: t(16, 12),
        minHeight: t(164, 140),
      }}
    >
      {/* Purple gradient background */}
      <LinearGradient
        colors={['rgba(119,85,150,1)', 'rgba(198,109,239,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      {/* Dark overlay on left side */}
      <LinearGradient
        colors={['rgba(13,3,23,1)', 'rgba(55,12,100,0.78)', 'rgba(55,12,100,0.3)', 'rgba(13,3,23,0)']}
        locations={[0, 0.42, 0.52, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '72%', bottom: 0 }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: t(30, 20),
          paddingBottom: t(24, 18),
          gap: t(16, 12),
        }}
      >
        {/* Left: back + title */}
        <View style={{ flex: 1, gap: t(38, 24) }}>
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.8}
            style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6), alignSelf: 'flex-start' }}
          >
            <View
              style={{
                width: t(28, 22),
                height: t(28, 22),
                borderRadius: t(8, 6),
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: t(16, 13), color: '#1e0736', lineHeight: t(18, 15) }}>‹</Text>
            </View>
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#ffffff' }}>
              BACK TO HOME
            </Text>
          </TouchableOpacity>

          <View style={{ gap: t(4, 2) }}>
            <Text
              style={{
                fontFamily: 'PlayfairDisplay_400Regular_Italic',
                fontSize: t(20, 14),
                color: '#ffffff',
              }}
            >
              TRIO by Maham
            </Text>
            <Text
              style={{
                fontFamily: 'PlayfairDisplay_500Medium',
                fontSize: t(44, 28),
                lineHeight: t(48, 32),
                color: '#ffffff',
              }}
            >
              Spin the Wheel
            </Text>
          </View>
        </View>

        {/* Right: wheel image */}
        <Image
          source={{
            uri: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2.png',
          }}
          style={{
            width: t(207, 140),
            height: t(207, 140),
            marginTop: t(-6, -4),
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
