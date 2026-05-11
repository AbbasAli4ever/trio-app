import { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { useResponsive } from '@/hooks';

type Props = {
  visible: boolean;
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
};

export function SmallEventStep3Modal({ visible, onClose, onBack, onNext }: Props) {
  const { t } = useResponsive();
  const [addCinema, setAddCinema] = useState(true);
  const [ticketCount, setTicketCount] = useState(1);

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
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 0.08,
            shadowRadius: 32,
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
                width: t(32, 28),
                height: t(32, 28),
                borderRadius: t(16, 14),
                backgroundColor: '#d9d9d9',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: t(13, 11), color: '#000000' }}>✕</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(16, 12), paddingRight: t(40, 32) }}>
              <Image
                source={{ uri: 'https://c.animaapp.com/mp13qtn823bRPq/img/birhtday-1.png' }}
                style={{ width: t(73, 54), height: t(67, 50) }}
                resizeMode="contain"
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                  Step 3 Of 5
                </Text>
                <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(21, 17), lineHeight: t(24, 20), color: '#1e0736' }}>
                  Small Event Package
                </Text>
              </View>
            </View>

            {/* Progress bar */}
            <View style={{ flexDirection: 'row', gap: t(12, 8), marginTop: t(24, 18) }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    height: t(6, 5),
                    borderRadius: 30,
                    backgroundColor: i <= 2 ? '#775596' : 'rgba(110,110,110,0.22)',
                  }}
                />
              ))}
            </View>
          </View>

          {/* Body */}
          <View style={{ paddingHorizontal: t(40, 24), paddingTop: t(24, 18), paddingBottom: t(44, 32), gap: t(16, 12) }}>
            {/* Cinema yes/no */}
            <View style={{ gap: t(12, 10) }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), color: '#1d0636' }}>
                Add a private cinema slot?
              </Text>
              <View style={{ flexDirection: 'row', gap: t(12, 10) }}>
                <TouchableOpacity
                  onPress={() => setAddCinema(true)}
                  activeOpacity={0.85}
                  style={{
                    flex: 1,
                    height: t(44, 38),
                    borderRadius: t(10, 8),
                    backgroundColor: addCinema ? '#775596' : '#d5d2d7',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: addCinema ? '#ffffff' : '#1e1e1e' }}>
                    Yes, add cinema
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setAddCinema(false)}
                  activeOpacity={0.85}
                  style={{
                    flex: 1,
                    height: t(44, 38),
                    borderRadius: t(10, 8),
                    backgroundColor: !addCinema ? '#775596' : '#d5d2d7',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: !addCinema ? '#ffffff' : '#1e1e1e' }}>
                    Skip
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Ticket counter */}
            <View style={{ gap: t(12, 8) }}>
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
                }}
              >
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(15, 12), color: '#1e1e1e' }}>
                  TICKETS | Rs 800 EACH
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(10, 8) }}>
                  <TouchableOpacity
                    onPress={() => setTicketCount((p) => Math.max(0, p - 1))}
                    activeOpacity={0.7}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <View style={{ width: t(24, 20), height: t(24, 20), borderRadius: t(12, 10), borderWidth: 1, borderColor: '#9a9a9a', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: t(14, 12), color: '#9a9a9a', lineHeight: t(16, 14) }}>−</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(20, 16), color: '#1e0736', minWidth: t(20, 16), textAlign: 'center' }}>
                    {ticketCount}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setTicketCount((p) => p + 1)}
                    activeOpacity={0.7}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <View style={{ width: t(24, 20), height: t(24, 20), borderRadius: t(12, 10), borderWidth: 1, borderColor: '#775596', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: t(14, 12), color: '#775596', lineHeight: t(16, 14) }}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 9), color: '#6e6e6e' }}>
                Pick Your Movie Or Request A Custom Title — We'll Confirm The Slot.
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
