import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, View } from 'react-native';

import { useResponsive } from '@/hooks';

export function HeroBanner() {
  const { isTablet } = useResponsive();

  return (
    <ImageBackground
      source={{ uri: 'https://c.animaapp.com/6tGBECKN/img/hero-section.png' }}
      style={{
        width: '100%',
        height: isTablet ? 285 : 220,
        borderRadius: 24,
        overflow: 'hidden',
        marginTop: 16,
      }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={[
          'rgba(13,3,23,1)',
          'rgba(55,12,100,0.78)',
          'rgba(55,12,100,0.3)',
          'rgba(13,3,23,0)',
        ]}
        locations={[0, 0.42, 0.52, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: 40,
          bottom: 30,
        }}
      >
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_400Regular_Italic',
            fontSize: 20,
            color: '#ffffff',
            marginBottom: -2,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_500Medium',
            fontSize: isTablet ? 54 : 36,
            color: '#ffffff',
            lineHeight: isTablet ? 60 : 42,
            marginBottom: 4,
          }}
        >
          TRIO by Maham
        </Text>
        <View style={{ opacity: 0.9 }}>
          <Text
            style={{
              fontFamily: 'Montserrat_400Regular',
              fontSize: 14,
              color: '#ffffff',
              lineHeight: 22,
            }}
          >
            {'Dining · Bouquets · Cinema · Decor · Hi-Tea · Activities\nAll Under One Roof.'}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
