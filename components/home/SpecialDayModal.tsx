import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { useResponsive } from '@/hooks';

type QuickAction = {
  label: string;
  route?: string;
};

type ModalConfig = {
  image: any;
  title: string;
  description: string;
  quickActions: QuickAction[];
  ctaLabel: string;
  ctaRoute?: string;
  onCtaPress?: () => void;
};

export const BIRTHDAY_MODAL: ModalConfig = {
  image: require('@/public/home/birthday.png'),
  title: 'Happy Birthday!',
  description: 'Two Cinema Seats, One Shareable Plate, Two Mocktails.',
  quickActions: [
    { label: 'View Birthday Bundle', route: '/smart-bundles' },
    { label: 'Browse Decor', route: '/browse-decor' },
  ],
  ctaLabel: 'Build the Full Package.',
  ctaRoute: '/smart-bundles',
};

export const ANNIVERSARY_MODAL: ModalConfig = {
  image: require('@/public/home/aniversary.png'),
  title: 'Anniversary\nMode on',
  description: 'Romance Pairings Unlocked. Want Us To Set The Table With Rose Petals And Candles?',
  quickActions: [
    { label: 'Browse Decor', route: '/browse-decor' },
    { label: 'Hi-Tea Spread', route: '/(tabs)/hi-tea' },
  ],
  ctaLabel: 'Build the Full Package.',
  ctaRoute: '/smart-bundles',
};

export const DATE_NIGHT_MODAL: ModalConfig = {
  image: require('@/public/home/datenight.png'),
  title: 'Date Night\nAwaits',
  description: 'Candlelit Table, Curated Playlist, Rose Petal Trails — Let Us Set The Mood For Two.',
  quickActions: [
    { label: 'Cinema Date Package', route: '/(tabs)/cinema' },
    { label: 'Hi-Tea for Two', route: '/(tabs)/hi-tea' },
  ],
  ctaLabel: 'Build the Full Package.',
  ctaRoute: '/(tabs)/smart-bundles',
};

export const BRIDAL_SHOWER_MODAL: ModalConfig = {
  image: require('@/public/home/shower.png'),
  title: 'Bridal Shower\nVibes',
  description: 'Floral Decor, Hi-Tea Spread, Bouquets & A Cake Surprise — All In One Dreamy Set-Up.',
  quickActions: [
    { label: 'Hi-Tea Spread', route: '/(tabs)/hi-tea' },
    { label: 'Build a Bouquet', route: '/build-bouquet' },
  ],
  ctaLabel: 'Build the Full Package.',
  ctaRoute: '/(tabs)/smart-bundles',
};

export const FRIENDS_DATE_MODAL: ModalConfig = {
  image: require('@/public/home/FriendsDate.png'),
  title: 'Squad\nMode On',
  description: 'Group Hi-Tea, Snack Platters, Activities & A Bouquet To Split — Because Best Friends Deserve The Best.',
  quickActions: [
    { label: 'Group Hi-Tea', route: '/(tabs)/hi-tea' },
    { label: 'Browse Activities', route: '/activities' },
  ],
  ctaLabel: 'Build the Full Package.',
  ctaRoute: '/(tabs)/smart-bundles',
};

export const SMALL_EVENT_MODAL: ModalConfig = {
  image: require('@/public/home/SmallEvent.png'),
  title: 'Small event',
  description: 'Up To 30 Guests. We Can Do Private Cinema, Hi-Tea Spread And Full Decor, Just Say The Word.',
  quickActions: [
    { label: 'Browse Decor', route: '/browse-decor' },
    { label: 'Hi-Tea Spread', route: '/(tabs)/hi-tea' },
  ],
  ctaLabel: 'Build the Full Package.',
  ctaRoute: '/smart-bundles',
};

type Props = {
  visible: boolean;
  onClose: () => void;
  config: ModalConfig;
};

export function SpecialDayModal({ visible, onClose, config }: Props) {
  const { t } = useResponsive();
  const imgW = t(117, 96);
  const imgH = t(130, 108);

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <Pressable
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: t(32, 20) }}
        onPress={onClose}
      >
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

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: t(16, 14) }}>
              <Image source={config.image} style={{ width: imgW, height: imgH }} resizeMode="contain" />
              <View style={{ flex: 1, gap: t(8, 6), paddingTop: t(4, 2) }}>
                <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(32, 26), lineHeight: t(34, 28), color: '#1e0736' }}>
                  {config.title}
                </Text>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 12), lineHeight: t(19.6, 16), color: '#1e0736', opacity: 0.7 }}>
                  {config.description}
                </Text>
              </View>
            </View>

            <View style={{ gap: t(16, 12) }}>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), lineHeight: t(19.5, 16), color: '#1e0736', opacity: 0.7 }}>
                Quick Actions
              </Text>
              <View style={{ gap: t(8, 6) }}>
                {config.quickActions.map((action) => (
                  <TouchableOpacity
                    key={action.label}
                    activeOpacity={0.8}
                    onPress={() => { onClose(); if (action.route) router.push(action.route as never); }}
                    style={{
                      height: t(53, 44),
                      borderRadius: t(8, 7),
                      borderWidth: 1,
                      borderColor: '#b076ee',
                      backgroundColor: '#ffffff',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: t(12, 18),
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 4.37 },
                      shadowOpacity: 0.03,
                      shadowRadius: 8,
                      elevation: 1,
                    }}
                  >
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: t(16, 13), color: '#b076ee' }}>{action.label}</Text>
                    <View style={{ width: t(32, 26), height: t(32, 26), borderRadius: t(8, 6), backgroundColor: '#775596', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: t(15, 12), color: '#ffffff' }}>→</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={{ gap: t(16, 12), alignItems: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.88}
                onPress={() => {
                  if (config.onCtaPress) { config.onCtaPress(); }
                  else { onClose(); if (config.ctaRoute) router.push(config.ctaRoute as never); }
                }}
                style={{ width: '100%', height: t(48, 42), borderRadius: t(10, 8), backgroundColor: '#775596', alignItems: 'center', justifyContent: 'center' }}
              >
                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 14), color: '#ffffff' }}>{config.ctaLabel}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onClose} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6) }}>
                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 14), color: '#1e0736' }}>I'll Just Browse</Text>
                <Text style={{ fontSize: t(17, 14), color: '#b076ee' }}>→</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
