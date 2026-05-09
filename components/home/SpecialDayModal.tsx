import { Modal, Pressable, Text, TouchableOpacity, View, Image } from 'react-native';
import { router } from 'expo-router';
import { useResponsive } from '@/hooks';

const QUICK_ACTIONS = ['View Birthday Bundle', 'Browse Decor'];

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function SpecialDayModal({ visible, onClose }: Props) {
  const { t } = useResponsive();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <Pressable
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: t(32, 20),
        }}
        onPress={onClose}
      >
        {/* Card */}
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: t(418, 360),
            backgroundColor: '#ffffff',
            borderRadius: t(24, 20),
            overflow: 'visible',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.08,
            shadowRadius: 24,
            elevation: 12,
          }}
        >
          {/* Close button — outside card top-right */}
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.8}
            style={{
              position: 'absolute',
              top: t(-12, -10),
              right: t(-12, -10),
              zIndex: 10,
              width: t(32, 28),
              height: t(32, 28),
              borderRadius: t(16, 14),
              backgroundColor: '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.12,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            <Text style={{ fontSize: t(14, 12), color: '#6e6e6e', lineHeight: t(16, 14) }}>✕</Text>
          </TouchableOpacity>

          <View style={{ padding: t(24, 20), gap: t(24, 20), borderRadius: t(24, 20), overflow: 'hidden', backgroundColor: '#ffffff' }}>

            {/* Header: illustration + title */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: t(16, 14) }}>
              <Image
                source={{ uri: 'https://c.animaapp.com/moy7pjnb7XftvN/img/birhtday-2-2.png' }}
                style={{ width: t(117, 96), height: t(136, 112) }}
                resizeMode="contain"
              />
              <View style={{ flex: 1, gap: t(8, 6), paddingTop: t(4, 2) }}>
                <Text
                  style={{
                    fontFamily: 'PlayfairDisplay_500Medium',
                    fontSize: t(32, 26),
                    lineHeight: t(34, 28),
                    color: '#1e0736',
                  }}
                >
                  Happy Birthday!
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat_500Medium',
                    fontSize: t(14, 12),
                    lineHeight: t(19.6, 16),
                    color: '#1e0736',
                    opacity: 0.7,
                  }}
                >
                  Two Cinema Seats, One Shareable Plate, Two Mocktails.
                </Text>
              </View>
            </View>

            {/* Quick Actions */}
            <View style={{ gap: t(16, 12) }}>
              <Text
                style={{
                  fontFamily: 'Montserrat_500Medium',
                  fontSize: t(16, 13),
                  lineHeight: t(19.5, 16),
                  color: '#1e0736',
                  opacity: 0.7,
                }}
              >
                Quick Actions
              </Text>
              <View style={{ gap: t(8, 6) }}>
                {QUICK_ACTIONS.map((label) => (
                  <TouchableOpacity
                    key={label}
                    activeOpacity={0.8}
                    onPress={() => {
                      onClose();
                      if (label === 'View Birthday Bundle') router.push('/smart-bundles');
                    }}
                    style={{
                      height: t(53, 44),
                      borderRadius: t(8, 7),
                      borderWidth: 1,
                      borderColor: '#b076ee',
                      backgroundColor: '#ffffff',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: t(24, 18),
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 4.37 },
                      shadowOpacity: 0.03,
                      shadowRadius: 8,
                      elevation: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: t(16, 13),
                        color: '#b076ee',
                      }}
                    >
                      {label}
                    </Text>
                    <Text style={{ fontSize: t(17, 14), color: '#b076ee' }}>→</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* CTA buttons */}
            <View style={{ gap: t(16, 12), alignItems: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.88}
                style={{
                  width: '100%',
                  height: t(48, 42),
                  borderRadius: t(10, 8),
                  backgroundColor: '#775596',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Inter_500Medium',
                    fontSize: t(16, 14),
                    color: '#ffffff',
                  }}
                >
                  Build the Full Package.
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onClose}
                activeOpacity={0.7}
                style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6) }}
              >
                <Text
                  style={{
                    fontFamily: 'Inter_500Medium',
                    fontSize: t(16, 14),
                    color: '#1e0736',
                  }}
                >
                  I'll Just Browse
                </Text>
                <Text style={{ fontSize: t(17, 14), color: '#b076ee' }}>→</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
