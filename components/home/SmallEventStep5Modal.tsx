import { Modal, Pressable, Text, TouchableOpacity, View, Image } from 'react-native';
import { useResponsive } from '@/hooks';

const PACKAGE_ROWS = [
  { label: 'Decor · Black & Silver Balloons', price: 'Rs 10,000', muted: false },
  { label: '+ Balloon arch', price: 'Rs 3,500', muted: true },
  { label: '+ Fairy light wall', price: 'Rs 2,500', muted: true },
  { label: '+ Custom neon sign', price: 'Rs 6,000', muted: true },
  { label: '+ Name cake topper', price: 'Rs 1,200', muted: true },
  { label: 'Cinema · 1 seats', price: 'Rs 800', muted: false },
  { label: 'Polaroid camera + film', price: 'Rs 2,500', muted: false },
];

type Props = {
  visible: boolean;
  onClose: () => void;
  onBack: () => void;
  onAddToTray: () => void;
};

export function SmallEventStep5Modal({ visible, onClose, onBack, onAddToTray }: Props) {
  const { t } = useResponsive();

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
            {/* Close */}
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.8}
              style={{
                position: 'absolute',
                top: t(14, 12),
                right: t(16, 14),
                zIndex: 10,
                width: t(32, 26),
                height: t(32, 26),
                borderRadius: t(16, 13),
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: t(16, 13), color: '#6e6e6e' }}>✕</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(16, 12), paddingRight: t(32, 24) }}>
              <Image
                source={{ uri: 'https://c.animaapp.com/mp13qtn823bRPq/img/birhtday-1-8.png' }}
                style={{ width: t(73, 54), height: t(67, 50), flexShrink: 0 }}
                resizeMode="contain"
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                  Step 5 Of 5
                </Text>
                <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(21, 17), lineHeight: t(24, 20), color: '#1e0736' }}>
                  Small Event Package
                </Text>
              </View>
            </View>

            {/* Progress bar — all active */}
            <View style={{ flexDirection: 'row', gap: t(10, 8), marginTop: t(24, 18) }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    height: t(6, 5),
                    borderRadius: 30,
                    backgroundColor: i <= 3 ? '#775596' : 'rgba(110,110,110,0.22)',
                  }}
                />
              ))}
            </View>
          </View>

          {/* Body */}
          <View style={{ paddingHorizontal: t(40, 24), paddingTop: t(24, 18), paddingBottom: t(32, 24), gap: t(16, 12) }}>
            {/* Header row */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), color: '#1d0636' }}>
                Your package
              </Text>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), color: '#1d0636' }}>
                15 guests
              </Text>
            </View>

            {/* Package rows */}
            <View
              style={{
                borderWidth: 1,
                borderColor: 'rgba(110,110,110,0.2)',
                backgroundColor: 'rgba(223,223,223,0.26)',
                borderRadius: t(10, 8),
                paddingHorizontal: t(16, 14),
                paddingVertical: t(12, 10),
                gap: t(16, 12),
              }}
            >
              {PACKAGE_ROWS.map((item, idx) => (
                <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: t(16, 12) }}>
                  <Text style={{ flex: 1, fontFamily: 'Montserrat_500Medium', fontSize: t(15, 12), color: item.muted ? '#6e6e6e' : '#1e1e1e' }}>
                    {item.label}
                  </Text>
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(15, 12), color: item.muted ? '#6e6e6e' : '#1e1e1e', textAlign: 'right' }}>
                    {item.price}
                  </Text>
                </View>
              ))}
            </View>

            {/* Total */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: t(20, 14) }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(24, 18), color: '#1d0636' }}>
                Total
              </Text>
              <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: t(24, 18), color: '#370c64' }}>
                Rs 26,500
              </Text>
            </View>
          </View>

          {/* Separator */}
          <View style={{ height: 1, backgroundColor: 'rgba(110,110,110,0.2)' }} />

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
              Rs 26,500
            </Text>

            <TouchableOpacity
              onPress={onAddToTray}
              activeOpacity={0.85}
              style={{
                height: t(48, 40),
                paddingHorizontal: t(16, 14),
                borderRadius: t(10, 8),
                backgroundColor: '#775596',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>Add to tray</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
