import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useResponsive } from '@/hooks';

// Symbol.png inline — four concentric arcs, white 10% opacity
function SymbolSvg({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 510 285" fill="none">
      <Path
        opacity={0.32}
        d="M64.741 -381.313C308.631 -381.313 509.482 -180.462 509.482 63.4281C509.482 309.112 308.631 508.169 64.741 508.169C-180.943 508.169 -380 309.112 -380 63.4281C-380 -180.462 -180.943 -381.313 64.741 -381.313ZM64.741 393.397C245.865 393.397 394.71 246.346 394.71 63.4281C394.71 -117.696 245.865 -266.541 64.741 -266.541C-118.177 -266.541 -265.228 -117.696 -265.228 63.4281C-265.228 246.346 -118.177 393.397 64.741 393.397ZM64.741 -166.116C190.273 -166.116 294.285 -62.1037 294.285 63.4281C294.285 190.753 190.273 292.972 64.741 292.972C-62.5841 292.972 -164.803 190.753 -164.803 63.4281C-164.803 -62.1037 -62.5841 -166.116 64.741 -166.116ZM64.741 178.2C127.507 178.2 179.513 127.987 179.513 63.4281C179.513 0.662191 127.507 -51.3438 64.741 -51.3438C0.181806 -51.3438 -50.0309 0.662191 -50.0309 63.4281C-50.0309 127.987 0.181806 178.2 64.741 178.2Z"
        fill="white"
        fillOpacity={0.1}
      />
    </Svg>
  );
}

export function SpinHero() {
  const { t } = useResponsive();

  const heroHeight = t(265, 220);
  const wheelSize = t(300, 250);

  return (
    <View
      style={{
        borderRadius: t(24, 18),
        overflow: 'hidden',
        marginTop: t(16, 12),
        height: heroHeight,
      }}
    >
      {/* Base purple gradient */}
      <LinearGradient
        colors={['rgba(119,85,150,1)', 'rgba(198,109,239,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Dark left-side overlay */}
      <LinearGradient
        colors={['rgba(13,3,23,1)', 'rgba(55,12,100,0.78)', 'rgba(55,12,100,0.3)', 'rgba(13,3,23,0)']}
        locations={[0, 0.42, 0.52, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '72%', bottom: 0 }}
      />

      {/* Symbol SVG — concentric arcs, positioned left-center */}
      <View
        style={{
          position: 'absolute',
          left: t(-10, -120),
          top: '10%',
          marginTop: t(-142, -110),
          opacity: 0.85,
        }}
        pointerEvents="none"
      >
        <SymbolSvg size={t(490, 285)} />
      </View>

      {/* Wheel image — oversized, anchored to right, half-cropped (overflow: hidden on parent clips it) */}
      <View
        style={{
          position: 'absolute',
          right: t(-70, -40),
          top: '70%',
          marginTop: -(wheelSize / 2),
          width: wheelSize,
          height: wheelSize,
        }}
        pointerEvents="none"
      >
        <Image source={require('@/public/spin-wheel/wheel.png')} style={{ width: wheelSize, height: wheelSize }} resizeMode="contain" />
      </View>

      {/* Content: back button + title */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: t(24, 18),
          justifyContent: 'space-between',
        }}
      >
        {/* Back button */}
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.8}
          style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6), alignSelf: 'flex-start' }}
        >
          <View
            style={{
              width: t(26, 20),
              height: t(26, 20),
              borderRadius: t(8, 6),
              backgroundColor: '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: t(16, 13), color: '#1e0736', lineHeight: t(18, 15) }}>‹</Text>
          </View>
          <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 9), color: '#ffffff' }}>
            BACK TO HOME
          </Text>
        </TouchableOpacity>

        {/* Title block */}
        <View style={{ gap: t(2, 1), marginBottom: t(24, 18) }}>
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
              fontSize: t(54, 34),
              lineHeight: t(58, 38),
              color: '#ffffff',
            }}
          >
            Spin the Wheel
          </Text>
        </View>
      </View>
    </View>
  );
}
