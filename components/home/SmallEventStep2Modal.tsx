import { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const CAKE_OPTIONS = [
  { name: 'Belgian Chocolate', price: 'Rs 3,500', image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-4.png' },
  { name: 'Red Velvet', price: 'Rs 3,800', image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-5.png' },
  { name: 'Pistachio Rose', price: 'Rs 5,000', image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-8.png' },
  { name: 'Carrot & Walnut', price: 'Rs 5,000', image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-9.png' },
];

type Props = {
  visible: boolean;
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
};

export function SmallEventStep2Modal({ visible, onClose, onBack, onNext }: Props) {
  const { t } = useResponsive();
  const [selectedCake, setSelectedCake] = useState(CAKE_OPTIONS[0].name);

  const gap = t(12, 10);
  const cardWidth = (t(588, 340) - t(80, 48) - gap) / 2;
  const imgH = t(120, 90);

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
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: t(16, 12) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(16, 12), flex: 1, minWidth: 0 }}>
                <Image
                  source={{ uri: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/birhtday-1-7.png' }}
                  style={{ width: t(73, 54), height: t(67, 50), flexShrink: 0 }}
                  resizeMode="contain"
                />
                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                    Step 2 Of 5
                  </Text>
                  <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(21, 17), lineHeight: t(24, 20), color: '#1e0736' }}>
                    Small Event Package
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={onClose}
                activeOpacity={0.8}
                style={{
                  width: t(24, 20),
                  height: t(24, 20),
                  borderRadius: t(12, 10),
                  backgroundColor: '#ffffff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                  flexShrink: 0,
                }}
              >
                <Text style={{ fontSize: t(12, 10), color: '#6e6e6e' }}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Progress bar */}
            <View style={{ flexDirection: 'row', gap: t(10, 8), marginTop: t(20, 16) }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    height: t(6, 5),
                    borderRadius: 30,
                    backgroundColor: i <= 1 ? '#775596' : 'rgba(110,110,110,0.22)',
                  }}
                />
              ))}
            </View>
          </View>

          {/* Scrollable body */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{ paddingHorizontal: t(40, 24), paddingTop: t(20, 16), paddingBottom: t(8, 6) }}
          >
            <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: t(16, 13), color: '#1d0636', marginBottom: t(12, 10) }}>
              Choose A Cake (Optional)
            </Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
              {CAKE_OPTIONS.map((cake) => {
                const isSelected = selectedCake === cake.name;
                return (
                  <TouchableOpacity
                    key={cake.name}
                    activeOpacity={0.85}
                    onPress={() => setSelectedCake(cake.name)}
                    style={{
                      width: cardWidth,
                      borderRadius: t(20, 16),
                      borderWidth: t(1.5, 1),
                      borderColor: isSelected ? '#775596' : '#ececec',
                      backgroundColor: '#ffffff',
                      overflow: 'hidden',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: isSelected ? 0 : 0.04,
                      shadowRadius: isSelected ? 0 : 8,
                      elevation: isSelected ? 0 : 2,
                    }}
                  >
                    <Image source={{ uri: cake.image }} style={{ width: '100%', height: imgH }} resizeMode="cover" />
                    <View style={{ paddingHorizontal: t(20, 14), paddingTop: t(14, 10), paddingBottom: t(24, 16), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: t(12, 8) }}>
                      <Text style={{ flex: 1, fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(15, 12), lineHeight: t(20, 16), color: '#1e0736' }}>
                        {cake.name}
                      </Text>
                      <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(15, 12), color: '#370c64', flexShrink: 0 }}>
                        {cake.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Separator */}
          <View style={{ height: 1, backgroundColor: 'rgba(110,110,110,0.2)', marginTop: t(8, 6) }} />

          {/* Footer */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: t(42, 24), paddingVertical: t(17, 14), gap: t(12, 10) }}>
            <TouchableOpacity
              onPress={onBack}
              activeOpacity={0.8}
              style={{
                height: t(48, 40),
                paddingHorizontal: t(16, 14),
                borderRadius: t(10, 8),
                borderWidth: 1,
                borderColor: '#9a9a9a',
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: t(4, 3),
              }}
            >
              <Text style={{ fontSize: t(15, 12), color: '#000000' }}>←</Text>
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#000000' }}>Back</Text>
            </TouchableOpacity>

            <Text style={{ flex: 1, fontFamily: 'BebasNeue_400Regular', fontSize: t(24, 18), color: '#370c64', textAlign: 'center' }}>
              Rs 23,500
            </Text>

            <TouchableOpacity
              onPress={onNext}
              activeOpacity={0.85}
              style={{
                height: t(48, 40),
                paddingHorizontal: t(16, 14),
                borderRadius: t(10, 8),
                backgroundColor: '#775596',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: t(6, 4),
              }}
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
