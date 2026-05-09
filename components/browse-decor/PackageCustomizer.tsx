import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const BROWSE_OPTIONS = [
  { id: 'default', label: 'Default', swatches: ['#f9dcd7', '#d4595c', '#9e272b'], lastHasBorder: false },
  { id: 'pink-white', label: 'Pink & White', swatches: ['#fbe4ec', '#f2a8b8', '#ffffff'], lastHasBorder: true },
  { id: 'all-white', label: 'All White', swatches: ['#ffffff', '#f4ecec', '#d3c4c4'], lastHasBorder: false },
  { id: 'black-silver', label: 'Black & Silver', swatches: ['#1a1a1a', '#c0c0c0', '#ffffff'], lastHasBorder: false },
  { id: 'lavender', label: 'Lavender', swatches: ['#e8def9', '#b9a3e0', '#6e5ba0'], lastHasBorder: false },
];

const FLOWER_OPTIONS = [
  { id: 'red-roses', label: 'Red Roses', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-1-1.png' },
  { id: 'white-roses', label: 'White Roses', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-2-1.png' },
  { id: 'pink-roses', label: 'Pink Roses', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-5-1.png' },
  { id: 'tulips', label: 'Tulips', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-6-1.png' },
  { id: 'babys-breath', label: "Baby's Breath", image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png' },
  { id: 'lavender-1', label: 'Lavender Sprays', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-8-1.png' },
  { id: 'lavender-2', label: 'Lavender Sprays', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-9.png' },
];

const FINISHING_OPTIONS = [
  { id: 'f-red-roses', label: 'Red Roses', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-1-1.png' },
  { id: 'f-white-roses', label: 'White Roses', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-2-1.png' },
  { id: 'f-pink-roses', label: 'Pink Roses', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-5-1.png' },
  { id: 'f-tulips', label: 'Tulips', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-6-1.png' },
  { id: 'f-babys-breath', label: "Baby's Breath", image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png' },
  { id: 'f-lavender-1', label: 'Lavender Sprays', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-8-1.png' },
  { id: 'f-lavender-2', label: 'Lavender Sprays', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png' },
];

const ADD_ONS = [
  { id: 'balloon-arch', label: 'Balloon Arch', price: '+Rs 3,500', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1.png' },
  { id: 'fairy-light', label: 'Fairy Light Wall', price: '+Rs 2,500', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1-1.png' },
  { id: 'neon-sign', label: 'Custom Neon Sign', price: '+Rs 6,000', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1-2.png' },
];

function SectionTitle({ label, t }: { label: string; t: (a: number, b?: number) => number }) {
  return (
    <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1d0636' }}>
      {label}
    </Text>
  );
}

function PillButton({ label, isActive, onPress, left, t }: {
  label: string;
  isActive: boolean;
  onPress: () => void;
  left?: React.ReactNode;
  t: (a: number, b?: number) => number;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: t(6, 4),
        paddingHorizontal: t(16, 12),
        paddingVertical: t(8, 6),
        borderRadius: t(54, 40),
        backgroundColor: '#ffffff',
        borderWidth: t(1.96, 1.5),
        borderColor: isActive ? '#1e0736' : '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4.37 },
        shadowOpacity: 0.05,
        shadowRadius: t(22, 14),
        elevation: isActive ? 0 : 2,
      }}
    >
      {left}
      <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13.7, 11), lineHeight: t(19.2, 14), color: '#1e0736' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function PackageCustomizer() {
  const { t } = useResponsive();

  const [selectedBrowse, setSelectedBrowse] = useState('default');
  const [selectedFlower, setSelectedFlower] = useState('pink-roses');
  const [selectedFinishing, setSelectedFinishing] = useState('f-pink-roses');
  const [selectedAddon, setSelectedAddon] = useState('balloon-arch');

  return (
    <View style={{ gap: t(32, 24) }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: t(24, 18),
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.04,
          shadowRadius: t(20, 14),
          elevation: 2,
        }}
      >
        <View style={{ padding: t(24, 18), gap: t(32, 24) }}>

          {/* Live Preview image */}
          <View style={{ borderRadius: t(16, 12), overflow: 'hidden', height: t(543, 260) }}>
            <Image
              source={{ uri: 'https://c.animaapp.com/moybk94uF21O9Y/img/hero-section-1.png' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                bottom: t(24, 16),
                right: t(24, 16),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: t(4, 3),
                borderRadius: t(54, 40),
                borderWidth: t(1.96, 1.5),
                borderColor: '#ffffff',
                backgroundColor: 'rgba(0,0,0,0.3)',
                paddingHorizontal: t(16, 12),
                paddingVertical: t(8, 6),
              }}
            >
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(24, 16), lineHeight: t(33.6, 22), color: '#ffffff' }}>
                Live - Preview
              </Text>
            </View>
          </View>

          {/* Browse */}
          <View style={{ gap: t(20, 14) }}>
            <SectionTitle label="Browse" t={t} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: t(16, 10), flexDirection: 'row', flexWrap: 'wrap' }}>
              {BROWSE_OPTIONS.map((opt) => (
                <PillButton
                  key={opt.id}
                  label={opt.label}
                  isActive={selectedBrowse === opt.id}
                  onPress={() => setSelectedBrowse(opt.id)}
                  t={t}
                  left={
                    <View style={{ flexDirection: 'row' }}>
                      {opt.swatches.map((color, i) => (
                        <View
                          key={i}
                          style={{
                            width: t(13.33, 10),
                            height: t(13.33, 10),
                            borderRadius: t(6.67, 5),
                            backgroundColor: color,
                            marginLeft: i > 0 ? -t(3, 2) : 0,
                            borderWidth: opt.lastHasBorder && i === opt.swatches.length - 1 ? 1 : 0,
                            borderColor: '#f0f0f0',
                          }}
                        />
                      ))}
                    </View>
                  }
                />
              ))}
            </ScrollView>
          </View>

          {/* Flowers */}
          <View style={{ gap: t(20, 14) }}>
            <SectionTitle label="Flowers- Pick Any" t={t} />
            <View style={{ gap: t(16, 10) }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
                {FLOWER_OPTIONS.slice(0, 5).map((flower) => (
                  <PillButton
                    key={flower.id}
                    label={flower.label}
                    isActive={selectedFlower === flower.id}
                    onPress={() => setSelectedFlower(flower.id)}
                    t={t}
                    left={<Image source={{ uri: flower.image }} style={{ width: t(28, 22), height: t(28, 22) }} resizeMode="cover" />}
                  />
                ))}
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
                {FLOWER_OPTIONS.slice(5).map((flower) => (
                  <PillButton
                    key={flower.id}
                    label={flower.label}
                    isActive={selectedFlower === flower.id}
                    onPress={() => setSelectedFlower(flower.id)}
                    t={t}
                    left={<Image source={{ uri: flower.image }} style={{ width: t(28, 22), height: t(28, 22) }} resizeMode="cover" />}
                  />
                ))}
              </View>
            </View>
          </View>

          {/* Finishing Touches */}
          <View style={{ gap: t(20, 14) }}>
            <SectionTitle label="Finishing Touches" t={t} />
            <View style={{ gap: t(16, 10) }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
                {FINISHING_OPTIONS.slice(0, 5).map((item) => (
                  <PillButton
                    key={item.id}
                    label={item.label}
                    isActive={selectedFinishing === item.id}
                    onPress={() => setSelectedFinishing(item.id)}
                    t={t}
                    left={<Image source={{ uri: item.image }} style={{ width: t(28, 22), height: t(28, 22) }} resizeMode="cover" />}
                  />
                ))}
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
                {FINISHING_OPTIONS.slice(5).map((item) => (
                  <PillButton
                    key={item.id}
                    label={item.label}
                    isActive={selectedFinishing === item.id}
                    onPress={() => setSelectedFinishing(item.id)}
                    t={t}
                    left={<Image source={{ uri: item.image }} style={{ width: t(28, 22), height: t(28, 22) }} resizeMode="cover" />}
                  />
                ))}
              </View>
            </View>
          </View>

          {/* Add-ons */}
          <View style={{ gap: t(20, 14) }}>
            <SectionTitle label="Finishing Touches" t={t} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 12) }}>
              {ADD_ONS.map((addon) => {
                const isActive = selectedAddon === addon.id;
                return (
                  <TouchableOpacity
                    key={addon.id}
                    onPress={() => setSelectedAddon(addon.id)}
                    activeOpacity={0.8}
                    style={{
                      flex: 1,
                      minWidth: t(200, 140),
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      gap: t(16, 10),
                      padding: t(16, 12),
                      borderRadius: t(16, 12),
                      backgroundColor: '#ffffff',
                      borderWidth: 1,
                      borderColor: isActive ? '#1d0636' : 'transparent',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 4.37 },
                      shadowOpacity: isActive ? 0 : 0.05,
                      shadowRadius: t(22, 14),
                      elevation: isActive ? 0 : 2,
                    }}
                  >
                    <Image
                      source={{ uri: addon.image }}
                      style={{ width: t(56, 44), height: t(56, 44), borderRadius: t(8, 6) }}
                      resizeMode="cover"
                    />
                    <View style={{ flex: 1, gap: t(8, 6) }}>
                      <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, gap: t(8, 6) }}>
                          <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(20, 14), color: '#150929' }}>
                            {addon.label}
                          </Text>
                          <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 14), color: '#370c64' }}>
                            {addon.price}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: t(18, 14),
                            height: t(18, 14),
                            borderRadius: t(4, 3),
                            borderWidth: 2,
                            borderColor: '#1d0636',
                            backgroundColor: isActive ? '#1d0636' : 'transparent',
                          }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Footer total + CTA */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: t(24, 16),
              backgroundColor: '#f2edfb',
              borderRadius: t(12, 10),
              padding: t(32, 20),
            }}
          >
            <View style={{ flex: 1, gap: t(8, 6) }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), color: '#1e0736' }}>
                Total
              </Text>
              <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 15), color: '#370c64' }}>
                Rs 15,000
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.88}
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
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>
                Add to tray
              </Text>
              <Text style={{ fontSize: t(17.5, 14), color: '#ffffff' }}>→</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}
