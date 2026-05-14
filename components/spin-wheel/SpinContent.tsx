import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';
import { SpinResultCard } from './SpinResultCard';
import { useTrayStore } from '@/store';

const WHEEL_OPTIONS = [
  {
    id: 'bite',
    label: 'Bite',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-1.png',
    cta: 'Spin the Bite wheel',
    subtitle: 'A bestseller from the kitchen',
    result: {
      label: 'YOUR BITE',
      title: 'Hot Honey Burrata',
      description: 'Tomato, Burrata, Hot Honey, Basil.',
      priceText: 'TBC',
      image: 'https://c.animaapp.com/mp2fevugkzU6Ke/img/rectangle-5.png',
    },
  },
  {
    id: 'bouquet',
    label: 'Bouquet',
    image:
      'https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-realistic-babys--2917355984-2.png',
    cta: 'Spin the Bouquet wheel',
    subtitle: 'A fresh seasonal pick',
    result: {
      label: 'YOUR BOUQUET',
      title: 'Garden Rose Cone',
      description: 'Garden Rose, Eucalyptus, Pink Tissue Wrap.',
      priceText: 'Rs 2,200',
      image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-realistic-babys--2917355984-2.png',
    },
  },
  {
    id: 'experience',
    label: 'Experience',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-2.png',
    cta: 'Spin the Experience wheel',
    subtitle: "Something you'll remember",
    result: {
      label: 'YOUR PICK',
      title: 'Canvas Painting Session',
      description: '90-Min Guided Session. Paints, Brushes, 12×16" Canvas.',
      priceText: 'Rs 3,500',
      image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-2.png',
    },
  },
];

export function SpinContent() {
  const { t } = useResponsive();
  const addItem = useTrayStore((s) => s.addItem);
  const [selected, setSelected] = useState(WHEEL_OPTIONS[0]);
  const [showResult, setShowResult] = useState(false);

  const wheelSize = t(313, 260);

  function handleSpin() {
    setShowResult(true);
  }

  function handleSpinAgain() {
    setShowResult(false);
  }

  function handleCategoryChange(option: typeof WHEEL_OPTIONS[0]) {
    setSelected(option);
    setShowResult(false);
  }

  return (
    <View style={{ alignItems: 'center', gap: t(0, 0) }}>
      {/* Heading block */}
      <View style={{ alignItems: 'center', gap: t(4, 2) }}>
        <Text
          style={{
            fontFamily: 'Montserrat_400Regular',
            fontSize: t(17, 14),
            color: '#1e0736',
          }}
        >
          Indecisive?
        </Text>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_500Medium',
            fontSize: t(54, 34),
            lineHeight: t(58, 38),
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
          fontSize: t(16, 13),
          color: '#1e0736',
          opacity: 0.7,
          textAlign: 'center',
          lineHeight: t(24, 20),
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
              onPress={() => handleCategoryChange(option)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: t(6, 4),
                borderRadius: t(41, 32),
                borderWidth: 1.5,
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
                  fontSize: t(12, 10.5),
                  color: '#1e0736',
                  lineHeight: t(16, 14),
                }}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Wheel image */}
      <Image source={require('@/public/spin-wheel/wheel.png')} style={{ width: wheelSize, height: wheelSize, marginTop: t(28, 20) }} resizeMode="contain" />

      {/* CTA button */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={handleSpin}
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
            fontSize: t(16, 13),
            color: '#ffffff',
          }}
        >
          {selected.cta}
        </Text>
      </TouchableOpacity>

      {/* Subtitle text */}
      {!showResult && (
        <Text
          style={{
            fontFamily: 'Inter_500Medium',
            fontSize: t(16, 13),
            color: '#1e0736',
            marginTop: t(20, 14),
          }}
        >
          {selected.subtitle}
        </Text>
      )}

      {/* Result card — appears after spin */}
      {showResult && (
        <View style={{ width: '100%', marginTop: t(20, 16) }}>
          <SpinResultCard
            label={selected.result.label}
            title={selected.result.title}
            description={selected.result.description}
            priceText={selected.result.priceText}
            image={selected.result.image}
            onSpinAgain={handleSpinAgain}
            onAddToTray={() => {
              addItem({
                id: `spin-${selected.id}`,
                name: selected.result.title,
                price: selected.result.priceText,
                image: selected.result.image,
                category: 'spin',
              });
            }}
          />
        </View>
      )}
    </View>
  );
}
