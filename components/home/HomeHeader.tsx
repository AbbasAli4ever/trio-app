import { Image, Text, View } from 'react-native';

import { useResponsive } from '@/hooks';

export function HomeHeader() {
  const { t } = useResponsive();

  return (
    <View
      style={{
        position: 'absolute',
        top: t(24, 12),
        left: t(24, 16),
        right: t(24, 16),
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: t(11, 11),
        paddingHorizontal: t(16, 12),
        paddingVertical: t(8, 6),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 7,
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: 'https://c.animaapp.com/6tGBECKN/img/trio-purple-1@2x.png' }}
        style={{ width: t(51, 36), height: t(51, 36), borderRadius: 4 }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontFamily: 'Inter_500Medium',
          fontSize: t(11, 9),
          letterSpacing: t(2, 1.5),
          color: '#6e6e6e',
        }}
      >
        TABLE 12 · THURSDAY
      </Text>
    </View>
  );
}
