import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const WHEEL_OPTIONS = [
  {
    id: 'bite',
    label: 'Bite',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-1.png',
    wheelImage:
      'https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2-1.png',
    cta: 'Spin the Bite wheel',
    subtitle: 'A bestseller from the kitchen',
  },
  {
    id: 'bouquet',
    label: 'Bouquet',
    image:
      'https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-realistic-babys--2917355984-2.png',
    wheelImage:
      'https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2-1.png',
    cta: 'Spin the Bouquet wheel',
    subtitle: 'A fresh seasonal pick',
  },
  {
    id: 'experience',
    label: 'Experience',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-2.png',
    wheelImage:
      'https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2-1.png',
    cta: 'Spin the Experience wheel',
    subtitle: 'Something you\'ll remember',
  },
];

export function SpinContent() {
  const { t, isTablet } = useResponsive();
  const [selected, setSelected] = useState(WHEEL_OPTIONS[0]);

  const wheelSize = t(313, 260);

  return (
    <View style={{ alignItems: 'center', gap: t(0, 0) }}>
      {/* Heading block */}
      <View style={{ alignItems: 'center', gap: t(4, 2) }}>
        <Text
          style={{
            fontFamily: 'Montserrat_400Regular',
            fontSize: t(14.5, 12),
            color: '#1e0736',
          }}
        >
          Indecisive?
        </Text>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_500Medium',
            fontSize: t(44, 30),
            lineHeight: t(48, 34),
            color: '#1e0736',
          }}
        >
          Spin the Wheel
        </Text>
      </View>

      {/* Subtitle */}
      <Text
        style={{
          fontFamily: 'Montserrat_400Regular',
          fontSize: t(14.5, 12),
          color: '#1e0736',
          opacity: 0.7,
          textAlign: 'center',
          lineHeight: t(22, 18),
          marginTop: t(20, 14),
        }}
      >
        Three wheels, one tap.{'\n'}We pick you say yes (or spin again).
      </Text>

      {/* Category pills */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: t(10, 8),
          marginTop: t(20, 14),
        }}
      >
        {WHEEL_OPTIONS.map((option) => {
          const isActive = selected.id === option.id;
          return (
            <TouchableOpacity
              key={option.id}
              activeOpacity={0.8}
              onPress={() => setSelected(option)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: t(6, 4),
                borderRadius: t(41, 32),
                borderWidth: t(1.5, 1.5),
                borderColor: isActive ? '#1e0736' : 'transparent',
                backgroundColor: '#ffffff',
                paddingHorizontal: t(14, 10),
                paddingVertical: t(8, 6),
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 6,
                elevation: 2,
              }}
            >
              <Image
                source={{ uri: option.image }}
                style={{ width: t(28, 22), height: t(28, 22), borderRadius: t(4, 3) }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontFamily: 'Montserrat_500Medium',
                  fontSize: t(10.5, 9),
                  color: '#1e0736',
                  lineHeight: t(15, 13),
                }}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Wheel image */}
      <Image
        source={{ uri: selected.wheelImage }}
        style={{
          width: wheelSize,
          height: wheelSize,
          marginTop: t(28, 20),
        }}
        resizeMode="contain"
      />

      {/* CTA button */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={{
          borderRadius: t(70, 50),
          backgroundColor: '#775596',
          paddingHorizontal: t(16, 12),
          paddingVertical: t(10, 8),
          marginTop: t(16, 12),
          shadowColor: '#ffffff',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.45,
          shadowRadius: 4,
        }}
      >
        <Text
          style={{
            fontFamily: 'Inter_500Medium',
            fontSize: t(14, 12),
            color: '#ffffff',
          }}
        >
          {selected.cta}
        </Text>
      </TouchableOpacity>

      {/* Subtitle text */}
      <Text
        style={{
          fontFamily: 'Inter_500Medium',
          fontSize: t(14, 12),
          color: '#1e0736',
          marginTop: t(20, 14),
        }}
      >
        {selected.subtitle}
      </Text>
    </View>
  );
}
