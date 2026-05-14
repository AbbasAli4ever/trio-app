
import { Image, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
function PkgImg({ src, w, h }: { src: any; w: number; h: number }) {
  return <Image source={src} style={{ width: w, height: h, flexShrink: 0 }} resizeMode="contain" />;
}
import { useResponsive } from '@/hooks';
import { PACKAGE_OPTIONS, DECOR_ADD_ONS } from './SmallEventStep1Modal';
import { CAKE_OPTIONS } from './SmallEventStep2Modal';
import { CINEMA_PRICE_PER_SEAT } from './SmallEventStep3Modal';
import { EXTRAS_ADD_ONS } from './SmallEventStep4Modal';

function fmt(n: number) {
  return 'Rs ' + n.toLocaleString('en-PK');
}

type LineItem = { label: string; price: number; muted?: boolean };

type Props = {
  visible: boolean;
  onClose: () => void;
  onBack: () => void;
  onAddToTray: () => void;
  packageTitle: string;
  packageImage: any;
  // selections from all steps
  peopleCount: number;
  selectedPackageIdx: number;
  selectedDecorAddOns: string[];
  selectedCakeId: string | null;
  addCinema: boolean;
  ticketCount: number;
  selectedExtras: string[];
  total: number;
};

export function SmallEventStep5Modal({
  visible, onClose, onBack, onAddToTray,
  packageTitle, packageImage,
  peopleCount,
  selectedPackageIdx,
  selectedDecorAddOns,
  selectedCakeId,
  addCinema, ticketCount,
  selectedExtras,
  total,
}: Props) {
  const { t } = useResponsive();

  const pkg = PACKAGE_OPTIONS[selectedPackageIdx];
  const cake = selectedCakeId ? CAKE_OPTIONS.find((c) => c.id === selectedCakeId) : null;

  const lines: LineItem[] = [];

  // Base package
  lines.push({ label: `Decor · ${pkg.title}`, price: pkg.price });

  // Decor add-ons
  for (const id of selectedDecorAddOns) {
    const addon = DECOR_ADD_ONS.find((a) => a.id === id);
    if (addon) lines.push({ label: `+ ${addon.title}`, price: addon.price, muted: true });
  }

  // Cake
  if (cake) lines.push({ label: `Cake · ${cake.name}`, price: cake.price });

  // Cinema
  if (addCinema && ticketCount > 0) {
    lines.push({ label: `Cinema · ${ticketCount} seat${ticketCount > 1 ? 's' : ''}`, price: CINEMA_PRICE_PER_SEAT * ticketCount });
  }

  // Extras
  for (const id of selectedExtras) {
    const extra = EXTRAS_ADD_ONS.find((e) => e.id === id);
    if (extra) lines.push({ label: extra.name, price: extra.price });
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
                position: 'absolute', top: t(14, 12), right: t(16, 14), zIndex: 10,
                width: t(32, 26), height: t(32, 26), borderRadius: t(16, 13),
                backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: t(16, 13), color: '#6e6e6e' }}>✕</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(16, 12), paddingRight: t(32, 24) }}>
              <PkgImg src={packageImage} w={t(73, 54)} h={t(67, 50)} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                  Step 5 Of 5
                </Text>
                <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(21, 17), lineHeight: t(24, 20), color: '#1e0736' }}>
                  {packageTitle}
                </Text>
              </View>
            </View>

            {/* Progress bar — all active */}
            <View style={{ flexDirection: 'row', gap: t(10, 8), marginTop: t(24, 18) }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <View key={i} style={{ flex: 1, height: t(6, 5), borderRadius: 30, backgroundColor: '#775596' }} />
              ))}
            </View>
          </View>

          {/* Body */}
          <ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={{ paddingHorizontal: t(40, 24), paddingTop: t(24, 18), paddingBottom: t(32, 24), gap: t(16, 12) }}>
            {/* Header row */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), color: '#1d0636' }}>
                Your package
              </Text>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), color: '#1d0636' }}>
                {peopleCount} {peopleCount === 1 ? 'guest' : 'guests'}
              </Text>
            </View>

            {/* Line items */}
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
              {lines.map((item, idx) => (
                <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: t(16, 12) }}>
                  <Text style={{ flex: 1, fontFamily: 'Montserrat_500Medium', fontSize: t(15, 12), color: item.muted ? '#6e6e6e' : '#1e1e1e' }}>
                    {item.label}
                  </Text>
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(15, 12), color: item.muted ? '#6e6e6e' : '#1e1e1e', textAlign: 'right' }}>
                    {fmt(item.price)}
                  </Text>
                </View>
              ))}
            </View>

            {/* Total */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: t(8, 6) }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(24, 18), color: '#1d0636' }}>Total</Text>
              <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: t(24, 18), color: '#370c64' }}>
                {fmt(total)}
              </Text>
            </View>
          </ScrollView>

          <View style={{ height: 1, backgroundColor: 'rgba(110,110,110,0.2)' }} />

          {/* Footer */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: t(42, 24), paddingVertical: t(17, 14), gap: t(12, 10) }}>
            <TouchableOpacity
              onPress={onBack}
              activeOpacity={0.8}
              style={{ height: t(48, 40), paddingHorizontal: t(16, 14), borderRadius: t(10, 8), borderWidth: 1, borderColor: '#9a9a9a', backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: t(4, 3) }}
            >
              <Text style={{ fontSize: t(15, 12), color: '#000000' }}>←</Text>
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#000000' }}>Back</Text>
            </TouchableOpacity>

            <Text style={{ flex: 1, fontFamily: 'BebasNeue_400Regular', fontSize: t(24, 18), color: '#370c64', textAlign: 'center' }}>
              {fmt(total)}
            </Text>

            <TouchableOpacity
              onPress={onAddToTray}
              activeOpacity={0.85}
              style={{
                height: t(48, 40),
                paddingHorizontal: t(16, 14),
                borderRadius: t(70, 50),
                backgroundColor: '#775596',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: t(6, 4),
                shadowColor: '#ffffff',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.45,
                shadowRadius: 4,
              }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(14, 12), color: '#ffffff' }}>Add to Tray</Text>
              <Text style={{ fontSize: t(15, 13), color: '#ffffff' }}>🛍</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
