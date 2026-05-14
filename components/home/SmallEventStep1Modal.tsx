
import { Image, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
function PkgImg({ src, w, h, flexShrink }: { src: any; w: number; h: number; flexShrink?: number }) {
  return <Image source={src} style={{ width: w, height: h, flexShrink: flexShrink ?? 0 }} resizeMode="contain" />;
}
import { useResponsive } from '@/hooks';

export const PACKAGE_OPTIONS = [
  { id: 'red-classic', title: 'Red Decor-Classic', price: 5000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-6.png' },
  { id: 'red-cake', title: 'Red Decor-with Cake & Bouquet', price: 5000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-7.png' },
  { id: 'white-floral', title: 'White Decor-Floral Arch', price: 5000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-10.png' },
  { id: 'pink-white', title: 'Pink & White-Artificial', price: 5000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-11.png' },
  { id: 'black-silver', title: 'Black & Silver Balloon', price: 5000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-12.png' },
  { id: 'pink-full', title: 'Pink- Full Setup', price: 5000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-13.png' },
];

export const DECOR_ADD_ONS = [
  { id: 'balloon-arch', title: 'Balloon Arch', price: 3500, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/magnific-create-a-realistic-balloo-2917545837-1.png' },
  { id: 'fairy-light', title: 'Fairy Light Wall', price: 2500, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/magnific-create-a-realistic-balloo-2917545837-1-1.png' },
  { id: 'neon-sign', title: 'Custom Neon Sign', price: 6000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/magnific-create-a-realistic-balloo-2917545837-1-2.png' },
  { id: 'banner', title: 'Personalized Banner', price: 2000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/magnific-create-a-realistic-balloo-2917545837-1-3.png' },
  { id: 'cake-topper', title: 'Name Cake Topper', price: 1200, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/magnific-create-a-realistic-balloo-2917545837-1-4.png' },
  { id: 'polaroid-wall', title: 'Polaroid Wall', price: 3000, image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/magnific-create-a-realistic-balloo-2917545837-1-5.png' },
];

function fmt(n: number) {
  return 'Rs ' + n.toLocaleString('en-PK');
}

type Props = {
  visible: boolean;
  onClose: () => void;
  onNext: () => void;
  packageTitle: string;
  packageImage: any;
  // lifted state
  peopleCount: number;
  onPeopleCountChange: (n: number) => void;
  selectedPackageIdx: number;
  onPackageChange: (idx: number) => void;
  selectedDecorAddOns: string[];
  onDecorAddOnsChange: (ids: string[]) => void;
  runningTotal: number;
};

export function SmallEventStep1Modal({
  visible, onClose, onNext,
  packageTitle, packageImage,
  peopleCount, onPeopleCountChange,
  selectedPackageIdx, onPackageChange,
  selectedDecorAddOns, onDecorAddOnsChange,
  runningTotal,
}: Props) {
  const { t } = useResponsive();

  const gap = t(12, 10);
  const cardWidth = (t(588, 340) - t(80, 48) - gap) / 2;
  const imgH = t(120, 90);

  function toggleAddOn(id: string) {
    onDecorAddOnsChange(
      selectedDecorAddOns.includes(id)
        ? selectedDecorAddOns.filter((a) => a !== id)
        : [...selectedDecorAddOns, id]
    );
  }

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <Pressable
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: t(24, 16), paddingVertical: t(32, 24) }}
        onPress={onClose}
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: t(588, 420),
            backgroundColor: '#ffffff',
            borderRadius: t(24, 20),
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.08,
            shadowRadius: 24,
            elevation: 12,
            maxHeight: '92%',
          }}
        >
          {/* Header */}
          <View
            style={{
              backgroundColor: 'rgba(119,85,150,0.1)',
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(110,110,110,0.15)',
              paddingHorizontal: t(40, 24),
              paddingTop: t(16, 14),
              paddingBottom: t(20, 16),
            }}
          >
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.8}
              style={{
                position: 'absolute',
                top: t(14, 12),
                right: t(16, 14),
                zIndex: 10,
                width: t(28, 24),
                height: t(28, 24),
                borderRadius: t(14, 12),
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}
            >
              <Text style={{ fontSize: t(13, 11), color: '#6f6f6f' }}>✕</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(16, 12) }}>
              <PkgImg src={packageImage} w={t(73, 54)} h={t(67, 50)} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                  Step 1 Of 5
                </Text>
                <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(21, 17), lineHeight: t(24, 20), color: '#1e0736' }}>
                  {packageTitle}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', gap: t(12, 8), marginTop: t(20, 16) }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <View key={i} style={{ flex: 1, height: t(6, 5), borderRadius: 30, backgroundColor: i === 0 ? '#775596' : 'rgba(110,110,110,0.22)' }} />
              ))}
            </View>
          </View>

          {/* Scrollable body */}
          <ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={{ paddingHorizontal: t(40, 24), paddingTop: t(24, 18), paddingBottom: t(8, 6) }}>
            {/* People counter */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: 'rgba(110,110,110,0.2)',
                backgroundColor: 'rgba(223,223,223,0.26)',
                borderRadius: t(10, 8),
                paddingHorizontal: t(16, 14),
                paddingVertical: t(17, 14),
                marginBottom: t(22, 16),
              }}
            >
              <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(16, 13), color: '#1e0736' }}>
                How many people?
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(10, 8) }}>
                <TouchableOpacity onPress={() => onPeopleCountChange(Math.max(1, peopleCount - 1))} activeOpacity={0.7} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <View style={{ width: t(24, 20), height: t(24, 20), borderRadius: t(12, 10), borderWidth: 2, borderColor: '#9a9a9a', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: t(14, 12), color: '#9a9a9a', lineHeight: t(16, 14) }}>−</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(20, 16), color: '#1e0736', minWidth: t(20, 16), textAlign: 'center' }}>
                  {peopleCount}
                </Text>
                <TouchableOpacity onPress={() => onPeopleCountChange(peopleCount + 1)} activeOpacity={0.7} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <View style={{ width: t(24, 20), height: t(24, 20), borderRadius: t(12, 10), borderWidth: 2, borderColor: '#775596', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: t(14, 12), color: '#775596', lineHeight: t(16, 14) }}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Package grid */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
              {PACKAGE_OPTIONS.map((pkg, idx) => {
                const isSelected = selectedPackageIdx === idx;
                return (
                  <TouchableOpacity
                    key={pkg.id}
                    activeOpacity={0.85}
                    onPress={() => onPackageChange(idx)}
                    style={{
                      width: cardWidth,
                      borderRadius: t(20, 16),
                      borderWidth: t(1.5, 1),
                      borderColor: isSelected ? '#775596' : '#ececec',
                      backgroundColor: '#ffffff',
                      overflow: 'hidden',
                    }}
                  >
                    <Image source={{ uri: pkg.image }} style={{ width: '100%', height: imgH }} resizeMode="cover" />
                    <View style={{ paddingHorizontal: t(16, 12), paddingTop: t(14, 10), paddingBottom: t(20, 14), flexDirection: 'row', alignItems: 'flex-start', gap: t(12, 8) }}>
                      <Text style={{ flex: 1, fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(15, 12), lineHeight: t(20, 15), color: '#1e0736' }}>
                        {pkg.title}
                      </Text>
                      <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(15, 12), color: '#370c64', flexShrink: 0 }}>
                        {fmt(pkg.price)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Add-ons */}
            <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(16, 13), color: '#1d0636', marginTop: t(22, 16), marginBottom: t(13, 10) }}>
              Add-Ons (Optional)
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(8, 6) }}>
              {DECOR_ADD_ONS.map((addon) => {
                const isSelected = selectedDecorAddOns.includes(addon.id);
                return (
                  <TouchableOpacity
                    key={addon.id}
                    activeOpacity={0.85}
                    onPress={() => toggleAddOn(addon.id)}
                    style={{
                      width: cardWidth,
                      borderRadius: t(14, 11),
                      borderWidth: 1,
                      borderColor: isSelected ? '#1d0636' : '#d9d9d9',
                      backgroundColor: '#ffffff',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: t(13, 10),
                      paddingHorizontal: t(13, 10),
                      paddingVertical: t(8, 7),
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: isSelected ? 0 : 3.6 },
                      shadowOpacity: isSelected ? 0 : 0.05,
                      shadowRadius: isSelected ? 0 : 18,
                      elevation: isSelected ? 0 : 2,
                    }}
                  >
                    <Image source={{ uri: addon.image }} style={{ width: t(46, 36), height: t(46, 36), borderRadius: t(8, 6) }} resizeMode="cover" />
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13, 10), color: '#150929' }}>{addon.title}</Text>
                      <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(16, 13), color: '#370c64', marginTop: t(6, 4) }}>
                        +{fmt(addon.price)}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: t(15, 13),
                        height: t(15, 13),
                        borderRadius: t(2, 1.5),
                        borderWidth: t(1.6, 1.4),
                        borderColor: isSelected ? '#1d0636' : '#9a9a9a',
                        backgroundColor: '#ffffff',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isSelected && <Text style={{ fontSize: t(10, 8), color: '#1d0636', lineHeight: t(12, 10) }}>✓</Text>}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          <View style={{ height: 1, backgroundColor: 'rgba(110,110,110,0.2)', marginTop: t(8, 6) }} />

          {/* Footer */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: t(42, 24), paddingVertical: t(17, 14), gap: t(12, 10) }}>
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.8}
              style={{ height: t(48, 40), paddingHorizontal: t(16, 14), borderRadius: t(10, 8), borderWidth: 1, borderColor: '#9a9a9a', backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#000000' }}>Cancel</Text>
            </TouchableOpacity>

            <Text style={{ flex: 1, fontFamily: 'BebasNeue_400Regular', fontSize: t(24, 18), color: '#370c64', textAlign: 'center' }}>
              {fmt(runningTotal)}
            </Text>

            <TouchableOpacity
              onPress={onNext}
              activeOpacity={0.85}
              style={{ height: t(48, 40), paddingHorizontal: t(16, 14), borderRadius: t(10, 8), backgroundColor: '#775596', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: t(6, 4) }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>Next</Text>
              <Text style={{ fontSize: t(17, 14), color: '#ffffff' }}>→</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
