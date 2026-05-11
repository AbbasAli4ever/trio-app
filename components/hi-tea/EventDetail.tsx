import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const INCLUDES = ['Robot Cake-Trolley delivery', 'Polaroid memory print'];

export function EventDetail() {
  const { t, isTablet } = useResponsive();

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: t(32, 24),
        padding: t(40, 24),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: isTablet ? 'row' : 'column', alignItems: isTablet ? 'center' : 'flex-start', justifyContent: 'space-between', gap: t(32, 24) }}>

        {/* Left: text */}
        <View style={{ flex: 1, gap: t(24, 18) }}>
          {/* Time + title + price */}
          <View style={{ gap: t(16, 10) }}>
            <View style={{ gap: t(4, 2) }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(20, 15), color: '#1e0736' }}>
                3:00 PM — 7:00 PM, Daily
              </Text>
              <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(44, 32), lineHeight: t(44, 33), color: '#1e0736' }}>
                Hi-Tea at TRIO
              </Text>
            </View>
            <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(32, 24), lineHeight: t(32, 24), color: '#370c64' }}>
              Hi-Tea for 2 — Rs 4,999 / pair.
            </Text>
          </View>

          {/* Includes */}
          <View style={{ gap: t(16, 12) }}>
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), color: '#1e0736' }}>
              Includes
            </Text>
            <View style={{ gap: t(12, 8) }}>
              {INCLUDES.map((item) => (
                <View
                  key={item}
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: '#e5deec',
                    borderRadius: t(28, 20),
                    paddingHorizontal: t(16, 12),
                    paddingVertical: t(3, 2),
                  }}
                >
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), color: '#370c64' }}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Reserve button */}
          <TouchableOpacity
            activeOpacity={0.88}
            style={{
              alignSelf: 'flex-start',
              height: t(44, 38),
              paddingHorizontal: t(16, 14),
              borderRadius: t(10, 8),
              backgroundColor: '#775596',
              flexDirection: 'row',
              alignItems: 'center',
              gap: t(6, 4),
            }}
          >
            <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>
              Reserve · Rs 4,999 / pair
            </Text>
            <Text style={{ fontSize: t(16, 13), color: '#ffffff' }}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Right: images */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', alignSelf: isTablet ? 'auto' : 'center' }}>
          <Image
            source={{ uri: 'https://c.animaapp.com/mp158p9uFQYlPn/img/magnific-create-a-realistic-babys--2917355984-1.png' }}
            style={{ width: t(220, 160), height: t(260, 190) }}
            resizeMode="contain"
          />
          <Image
            source={{ uri: 'https://c.animaapp.com/mp158p9uFQYlPn/img/image-11.png' }}
            style={{ width: t(170, 120), height: t(220, 160), marginLeft: t(-88, -60) }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}
