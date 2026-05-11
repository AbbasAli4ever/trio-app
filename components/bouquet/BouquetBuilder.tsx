import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

type StemItem = {
  name: string;
  price: string;
  color: string;
  count: number;
};

type WrapItem = {
  name: string;
  price: string;
  color: string;
};

type RibbonItem = {
  name: string;
  price: string;
  color: string;
};

const STEMS: StemItem[] = [
  { name: 'Garden Rose', price: '+250', color: '#f2a8b8', count: 3 },
  { name: 'Peony', price: '+350', color: '#fae4ec', count: 9 },
  { name: 'Ranunculus', price: '+200', color: '#f6d6c5', count: 2 },
  { name: 'Lisianthus', price: '+220', color: '#e3d6f4', count: 1 },
  { name: 'Eucalyptus', price: '+150', color: '#d0e7d7', count: 1 },
];

const WRAPS: WrapItem[] = [
  { name: 'Brown Kraft', price: '+200', color: '#e8a7b7' },
  { name: 'Pink Tissue', price: '+250', color: '#f8d5dc' },
  { name: 'Linen Wrap', price: '+350', color: '#f4e3b9' },
];

const RIBBONS: RibbonItem[] = [
  { name: 'Satin Cream', price: '+150', color: '#fbf6ef' },
  { name: 'Velvet Burgundy', price: '+250', color: '#781e21' },
  { name: 'Silk Sage', price: '+200', color: '#d0e7d7' },
];

export function BouquetBuilder() {
  const { t, width, isTablet } = useResponsive();

  const [stemCounts, setStemCounts] = useState<Record<string, number>>(
    Object.fromEntries(STEMS.map((s) => [s.name, s.count]))
  );
  const [selectedWrap, setSelectedWrap] = useState<string>('Brown Kraft');
  const [selectedRibbon, setSelectedRibbon] = useState<string>('Satin Cream');

  const gap = t(16, 12);
  const outerPad = t(0, 0);
  const wrapCols = isTablet ? 3 : 3;
  const stemCols = isTablet ? 5 : 3;

  const stemCardWidth = (width - t(48, 32) - gap * (stemCols - 1)) / stemCols;
  const wrapCardWidth = (width - t(48, 32) - gap * (wrapCols - 1)) / wrapCols;

  const totalPrice = 1650;

  function incrementStem(name: string) {
    setStemCounts((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  }

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: t(32, 24),
        overflow: 'hidden',
        padding: t(24, 16),
        gap: t(32, 24),
      }}
    >
      {/* Live Preview image */}
      <View
        style={{
          width: '100%',
          height: t(302, 220),
          borderRadius: t(16, 12),
          overflow: 'hidden',
          backgroundColor: '#1a1a1a',
        }}
      >
        <Image
          source={{ uri: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/hero-section-2.png' }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        {/* dark overlay */}
        <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.10)' } as any} />
        {/* Live Preview button */}
        <View style={{ position: 'absolute', bottom: t(20, 14), right: t(20, 14) }}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={{
              borderRadius: t(50, 40),
              borderWidth: 2,
              borderColor: '#ffffff',
              backgroundColor: 'rgba(0,0,0,0.30)',
              paddingHorizontal: t(16, 12),
              paddingVertical: t(8, 6),
            }}
          >
            <Text
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: t(18, 14),
                color: '#ffffff',
                letterSpacing: t(0.5, 0.3),
              }}
            >
              Live - Preview
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Step 1 — Pick Stems */}
      <View style={{ gap: t(20, 14) }}>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_600SemiBold',
            fontSize: t(24, 18),
            color: '#1d0636',
            lineHeight: t(28, 22),
          }}
        >
          Step 1 · Pick Stems (tap To Add)
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
          {STEMS.map((stem) => (
            <TouchableOpacity
              key={stem.name}
              activeOpacity={0.8}
              onPress={() => incrementStem(stem.name)}
              style={{
                width: stemCardWidth,
                minHeight: t(55, 52),
                flexDirection: 'row',
                alignItems: 'center',
                gap: t(8, 6),
                borderRadius: t(16, 12),
                borderWidth: t(1.5, 1.5),
                borderColor: '#ede7f5',
                backgroundColor: '#ffffff',
                padding: t(8, 6),
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.04,
                shadowRadius: 6,
                elevation: 2,
              }}
            >
              <View
                style={{
                  width: t(30, 24),
                  height: t(30, 24),
                  borderRadius: t(8, 6),
                  backgroundColor: stem.color,
                  flexShrink: 0,
                }}
              />
              <View style={{ flex: 1, gap: t(2, 1) }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat_500Medium',
                    fontSize: t(10.5, 9),
                    color: '#1e0736',
                    lineHeight: t(15, 13),
                  }}
                  numberOfLines={1}
                >
                  {stem.name}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat_400Regular',
                    fontSize: t(8, 7.5),
                    color: '#1e0736',
                    opacity: 0.7,
                  }}
                >
                  {stem.price}
                </Text>
              </View>
              {stemCounts[stem.name] > 0 && (
                <View
                  style={{
                    minWidth: t(18, 15),
                    height: t(18, 15),
                    borderRadius: t(30, 25),
                    backgroundColor: '#775596',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: t(4, 3),
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Montserrat_400Regular',
                      fontSize: t(8, 7),
                      color: '#ffffff',
                    }}
                  >
                    {stemCounts[stem.name]}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Step 2 — Wrap */}
      <View style={{ gap: t(20, 14) }}>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_600SemiBold',
            fontSize: t(24, 18),
            color: '#1d0636',
            lineHeight: t(28, 22),
          }}
        >
          Step 2 · Wrap
        </Text>
        <View style={{ flexDirection: 'row', gap }}>
          {WRAPS.map((wrap) => {
            const isSelected = selectedWrap === wrap.name;
            return (
              <TouchableOpacity
                key={wrap.name}
                activeOpacity={0.8}
                onPress={() => setSelectedWrap(wrap.name)}
                style={{
                  flex: 1,
                  minHeight: t(74, 64),
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: t(8, 6),
                  borderRadius: t(16, 12),
                  borderWidth: t(1.5, 1.5),
                  borderColor: isSelected ? '#775596' : '#ede7f5',
                  backgroundColor: isSelected ? '#fdfbff' : '#ffffff',
                  padding: t(8, 6),
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.04,
                  shadowRadius: 6,
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: t(24, 20),
                    borderRadius: t(8, 6),
                    backgroundColor: wrap.color,
                  }}
                />
                <View style={{ gap: t(2, 1) }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat_500Medium',
                      fontSize: t(10.5, 9),
                      color: '#1e0736',
                      lineHeight: t(15, 13),
                    }}
                  >
                    {wrap.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat_400Regular',
                      fontSize: t(8, 7.5),
                      color: '#1e0736',
                      opacity: 0.7,
                    }}
                  >
                    {wrap.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Step 3 — Ribbon */}
      <View style={{ gap: t(20, 14) }}>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay_600SemiBold',
            fontSize: t(24, 18),
            color: '#1d0636',
            lineHeight: t(28, 22),
          }}
        >
          Step 3 · Ribbon
        </Text>
        <View style={{ flexDirection: 'row', gap }}>
          {RIBBONS.map((ribbon) => {
            const isSelected = selectedRibbon === ribbon.name;
            return (
              <TouchableOpacity
                key={ribbon.name}
                activeOpacity={0.8}
                onPress={() => setSelectedRibbon(ribbon.name)}
                style={{
                  flex: 1,
                  minHeight: t(74, 64),
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: t(8, 6),
                  borderRadius: t(16, 12),
                  borderWidth: t(1.5, 1.5),
                  borderColor: isSelected ? '#775596' : '#ede7f5',
                  backgroundColor: isSelected ? '#fdfbff' : '#ffffff',
                  padding: t(8, 6),
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.04,
                  shadowRadius: 6,
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: t(24, 20),
                    borderRadius: t(8, 6),
                    backgroundColor: ribbon.color,
                    borderWidth: ribbon.color === '#fbf6ef' ? 1 : 0,
                    borderColor: '#e0d8e0',
                  }}
                />
                <View style={{ gap: t(2, 1) }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat_500Medium',
                      fontSize: t(10.5, 9),
                      color: '#1e0736',
                      lineHeight: t(15, 13),
                    }}
                  >
                    {ribbon.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat_400Regular',
                      fontSize: t(8, 7.5),
                      color: '#1e0736',
                      opacity: 0.7,
                    }}
                  >
                    {ribbon.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Summary footer */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f2edfb',
          borderRadius: t(16, 12),
          padding: t(24, 16),
          gap: t(16, 12),
        }}
      >
        <View style={{ gap: t(4, 2) }}>
          <Text
            style={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: t(12, 10),
              color: '#1e0736',
            }}
          >
            Your bouquet
          </Text>
          <Text
            style={{
              fontFamily: 'BebasNeue_400Regular',
              fontSize: t(20, 16),
              color: '#370c64',
              lineHeight: t(24, 19),
            }}
          >
            Rs {totalPrice.toLocaleString()}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: t(8, 6),
            backgroundColor: '#775596',
            borderRadius: t(10, 8),
            paddingHorizontal: t(16, 12),
            paddingVertical: t(10, 8),
          }}
        >
          <Text
            style={{
              fontFamily: 'Inter_500Medium',
              fontSize: t(14, 12),
              color: '#ffffff',
            }}
          >
            Add to tray
          </Text>
          <Text style={{ fontSize: t(14, 12), color: '#ffffff' }}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
