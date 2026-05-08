import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { SPECIAL_DAYS } from '@/constants/homeData';

export function SpecialDaysSection() {
  const { isTablet, width } = useResponsive();
  const cols = isTablet ? 6 : 3;
  const gap = 12;
  const horizontalPad = 0;
  const cardWidth = (width - 48 - gap * (cols - 1) - horizontalPad * 2) / cols;
  const cardHeight = isTablet ? 102 : 90;

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 4 }}>
        <Text
          style={{
            fontFamily: 'Montserrat_500Medium',
            fontSize: 10,
            letterSpacing: 4,
            color: '#775596',
          }}
        >
          SPECIAL DAY?
        </Text>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_600SemiBold',
            fontSize: isTablet ? 24 : 20,
            color: '#1e0736',
          }}
        >
          Tell Us & We'll Make It Magical
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap,
        }}
      >
        {SPECIAL_DAYS.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={{
              width: cardWidth,
              height: cardHeight,
              backgroundColor: '#ffffff',
              borderRadius: 16,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              paddingHorizontal: 10,
              paddingVertical: 14,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.04,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 44, height: 40 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 11,
                color: '#370c64',
                textAlign: 'center',
              }}
            >
              {item.title}
            </Text>
            {/* <View
              style={{
                position: 'absolute',
                bottom: -8,
                left: '10%',
                right: '10%',
                height: 12,
                backgroundColor: '#a274fc',
                borderRadius: 80,
                opacity: 0.5,
              }}
            /> */}
            <View
  style={{
   position: 'absolute',
                bottom: -13,
                left: '10%',
                right: '10%',
                height: 12,
                backgroundColor: '#a274fc',
                borderRadius: 80,
              

    // Glow
    shadowColor: "#a274fc",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,

    // Android
    elevation: 30,
  }}
/>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
