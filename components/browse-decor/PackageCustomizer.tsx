import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';
import { useTrayStore } from '@/store';
import { DECOR_PACKAGES } from './PackageGallery';

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
  { id: 'f-red-roses', label: 'Red Roses', price: 500, image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-1-1.png' },
  { id: 'f-white-roses', label: 'White Roses', price: 500, image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-2-1.png' },
  { id: 'f-pink-roses', label: 'Pink Roses', price: 500, image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-5-1.png' },
  { id: 'f-tulips', label: 'Tulips', price: 500, image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-6-1.png' },
  { id: 'f-babys-breath', label: "Baby's Breath", price: 500, image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png' },
  { id: 'f-lavender-1', label: 'Lavender Sprays', price: 500, image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-8-1.png' },
  { id: 'f-lavender-2', label: 'Lavender Sprays', price: 500, image: 'https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png' },
];

const ADD_ONS = [
  { id: 'balloon-arch', label: 'Balloon Arch', price: 3500, priceLabel: '+Rs 3,500', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1.png' },
  { id: 'fairy-light', label: 'Fairy Light Wall', price: 2500, priceLabel: '+Rs 2,500', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1-1.png' },
  { id: 'neon-sign', label: 'Custom Neon Sign', price: 6000, priceLabel: '+Rs 6,000', image: 'https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1-2.png' },
];

const MAX_FINISHING = 3;

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

type Props = {
  selectedPackageId: string;
};

export function PackageCustomizer({ selectedPackageId }: Props) {
  const { t } = useResponsive();
  const addItem = useTrayStore((s) => s.addItem);

  const [selectedBrowse, setSelectedBrowse] = useState('default');
  const [selectedFlower, setSelectedFlower] = useState('pink-roses');
  const [selectedFinishing, setSelectedFinishing] = useState<string[]>([]);
  const [selectedAddon, setSelectedAddon] = useState('balloon-arch');

  const pkg = DECOR_PACKAGES.find((p) => p.id === selectedPackageId) ?? DECOR_PACKAGES[0];
  const addon = ADD_ONS.find((a) => a.id === selectedAddon)!;
  const finishingTotal = selectedFinishing.reduce((sum, id) => {
    const f = FINISHING_OPTIONS.find((o) => o.id === id);
    return sum + (f?.price ?? 0);
  }, 0);
  const total = pkg.price + addon.price + finishingTotal;
  const totalLabel = `Rs ${total.toLocaleString('en-PK')}`;

  function toggleFinishing(id: string) {
    setSelectedFinishing((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_FINISHING) return prev;
      return [...prev, id];
    });
  }

  function handleAddToTray() {
    const browse = BROWSE_OPTIONS.find((o) => o.id === selectedBrowse)!;
    const flower = FLOWER_OPTIONS.find((o) => o.id === selectedFlower)!;
    const finishing = selectedFinishing.map((id) => FINISHING_OPTIONS.find((o) => o.id === id)!.label);

    addItem({
      id: `decor-${selectedPackageId}-${selectedBrowse}-${selectedAddon}`,
      name: pkg.title,
      price: totalLabel,
      image: pkg.image,
      category: 'decor',
      meta: {
        package: pkg.title,
        palette: browse.label,
        flower: flower.label,
        finishingTouches: finishing,
        addon: addon.label,
        breakdown: {
          packageBase: pkg.price,
          addonPrice: addon.price,
          finishingTotal,
          total,
        },
      },
    });
  }

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

          {/* Live Preview */}
          <View style={{ borderRadius: t(16, 12), overflow: 'hidden', height: t(543, 260) }}>
            <Image
              source={{ uri: pkg.image }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                bottom: t(24, 16),
                right: t(24, 16),
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

          {/* Selected package label */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(18, 14), color: '#1e0736', flex: 1 }}>
              {pkg.title}
            </Text>
            <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 15), color: '#370c64' }}>
              {pkg.priceLabel}
            </Text>
          </View>

          {/* Browse palette */}
          <View style={{ gap: t(20, 14) }}>
            <SectionTitle label="Browse" t={t} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: t(16, 10), flexDirection: 'row' }}>
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
            <SectionTitle label="Flowers — Pick Any" t={t} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
              {FLOWER_OPTIONS.map((flower) => (
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

          {/* Finishing Touches — multi-select up to 3 */}
          <View style={{ gap: t(20, 14) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6) }}>
              <SectionTitle label="Finishing Touches" t={t} />
              <View style={{ backgroundColor: '#f2edfb', borderRadius: t(12, 8), paddingHorizontal: t(8, 6), paddingVertical: t(2, 1) }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 9), color: '#775596' }}>
                  {selectedFinishing.length}/{MAX_FINISHING}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
              {FINISHING_OPTIONS.map((item) => {
                const isActive = selectedFinishing.includes(item.id);
                const isDisabled = !isActive && selectedFinishing.length >= MAX_FINISHING;
                return (
                  <PillButton
                    key={item.id}
                    label={item.label}
                    isActive={isActive}
                    onPress={() => !isDisabled && toggleFinishing(item.id)}
                    t={t}
                    left={
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: t(28, 22), height: t(28, 22), opacity: isDisabled ? 0.4 : 1 }}
                        resizeMode="cover"
                      />
                    }
                  />
                );
              })}
            </View>
            {finishingTotal > 0 && (
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#775596' }}>
                +Rs {finishingTotal.toLocaleString('en-PK')} for finishing touches
              </Text>
            )}
          </View>

          {/* Add-ons */}
          <View style={{ gap: t(20, 14) }}>
            <SectionTitle label="Add-Ons" t={t} />
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
                      borderWidth: 1.5,
                      borderColor: isActive ? '#1e0736' : 'transparent',
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
                            {addon.priceLabel}
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
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {isActive && <Text style={{ color: '#ffffff', fontSize: t(10, 8), lineHeight: t(12, 10) }}>✓</Text>}
                        </View>
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
            <View style={{ flex: 1, gap: t(4, 3) }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13, 11), color: '#775596' }}>
                Total
              </Text>
              <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(28, 20), color: '#370c64' }}>
                {totalLabel}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={handleAddToTray}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: t(8, 6),
                backgroundColor: '#775596',
                borderRadius: t(70, 50),
                paddingHorizontal: t(20, 14),
                paddingVertical: t(12, 9),
              }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>
                🛍 Add to Tray
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}
