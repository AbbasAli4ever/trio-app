import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { SPECIAL_DAYS } from '@/constants/homeData';

export function SpecialDaysSection() {
  const { isTablet, width, t } = useResponsive();
  const cols = isTablet ? 6 : 3;
  const gap = t(12, 8);
  const cardWidth = (width - (isTablet ? t(48, 32) : 32) - gap * (cols - 1)) / cols;
  const cardHeight = t(102, 82);

  return (
    <View style={{ gap: t(16, 12) }}>
      <View style={{ gap: 4 }}>
        <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(10, 9), letterSpacing: t(4, 3), color: '#775596' }}>
          SPECIAL DAY?
        </Text>
        <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1e0736' }}>
          Tell Us & We'll Make It Magical
        </Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {SPECIAL_DAYS.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={{
              width: cardWidth,
              height: cardHeight,
              backgroundColor: '#ffffff',
              borderRadius: t(14, 12),
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              gap: t(6, 4),
              paddingHorizontal: t(10, 6),
              paddingVertical: t(14, 10),
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: t(44, 32), height: t(40, 30) }}
              resizeMode="contain"
            />
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 9), color: '#370c64', textAlign: 'center' }}>
              {item.title}
            </Text>
            <View
              style={{
                position: 'absolute',
                bottom: -8,
                left: '5%',
                right: '5%',
                height: t(8, 6),
                borderRadius: 80,
                backgroundColor: '#a274fc',
                opacity: 0.75,
                shadowColor: '#a274fc',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 20,
                elevation: 20,
                marginTop: -2,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
