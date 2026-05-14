import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { useRouter, useSegments } from 'expo-router';

import { useResponsive } from '@/hooks';
import { NAV_OPTIONS } from '@/constants/homeData';
import { useTrayStore } from '@/store';

// Last segment → nav id
const SEGMENT_TO_ID: Record<string, string> = {
  index: 'home',
  dining: 'dining',
  beverages: 'drinks',
  flowers: 'flowers',
  cinema: 'cinema',
  'hi-tea': 'hi-tea',
  'smart-bundles': 'bundles',
};

// Nav id → tab screen name (segment)
const ID_TO_SEGMENT: Record<string, string> = {
  home: 'index',
  dining: 'dining',
  drinks: 'beverages',
  flowers: 'flowers',
  cinema: 'cinema',
  'hi-tea': 'hi-tea',
  bundles: 'smart-bundles',
};

type NavItemProps = {
  label: string;
  imageSrc: ImageSourcePropType | null;
  isActive: boolean;
  t: (a: number, b?: number) => number;
  fontSize: number;
  onPress: () => void;
};

function NavItem({ label, imageSrc, isActive, t, fontSize, onPress }: NavItemProps) {
  const pX = t(16, 10);
  const pY = t(9.85, 7);
  const imgSize = t(28, 20);

  if (isActive) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.85}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e0736',
          borderRadius: 67.69,
          paddingHorizontal: pX,
          paddingVertical: pY,
          gap: 4,
        }}
      >
        {imageSrc && <Image source={imageSrc} style={{ width: imgSize, height: imgSize }} resizeMode="cover" />}
        <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize, lineHeight: fontSize * 1.4, color: '#ffffff' }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 66.31,
        borderWidth: t(2.41, 1.5),
        borderColor: '#ffffff',
        paddingHorizontal: pX,
        paddingVertical: pY,
        gap: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5.38 },
        shadowOpacity: 0.05,
        shadowRadius: 13.45,
        elevation: 2,
      }}
    >
      {imageSrc && <Image source={imageSrc} style={{ width: imgSize, height: imgSize }} resizeMode="cover" />}
      <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize, lineHeight: fontSize * 1.4, color: '#1e0736' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function Navbar() {
  const { t } = useResponsive();
  const router = useRouter();
  const segments = useSegments();
  const fontSize = t(17.23, 12);
  const { items, openTray } = useTrayStore();
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  // Last segment is the screen name, e.g. ['(tabs)', 'dining'] → 'dining'
  const lastSegment = segments[segments.length - 1] ?? 'home';
  const activeId = SEGMENT_TO_ID[lastSegment] ?? 'home';

  return (
    <View
      style={{ position: 'absolute', bottom: t(20, 12), left: 0, right: 0, alignItems: 'center', zIndex: 100 }}
      pointerEvents="box-none"
    >
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: t(14.77, 12),
          borderWidth: 1,
          borderColor: '#e3e3e3',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 14,
          elevation: 8,
          maxWidth: 960,
          width: '95%',
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: t(9.85, 6),
            paddingVertical: t(9.85, 6),
            gap: t(8, 5),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          bounces={false}
        >
          {NAV_OPTIONS.map((option) => (
            <NavItem
              key={option.id}
              label={option.label}
              imageSrc={option.imageSrc}
              isActive={option.id === activeId}
              t={t}
              fontSize={fontSize}
              onPress={() => {
                const segment = ID_TO_SEGMENT[option.id];
                const path = segment === 'index' ? '/(tabs)' : `/(tabs)/${segment}`;
                router.replace(path as any);
              }}
            />
          ))}

          {/* Tray button */}
          <TouchableOpacity
            onPress={openTray}
            activeOpacity={0.8}
            style={{
              width: t(44, 34),
              height: t(44, 34),
              borderRadius: t(22, 17),
              backgroundColor: '#1e0736',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Text style={{ fontSize: t(18, 14) }}>🛍</Text>
            {totalQty > 0 && (
              <View
                style={{
                  position: 'absolute',
                  top: -2,
                  right: -2,
                  backgroundColor: '#775596',
                  borderRadius: 10,
                  minWidth: t(18, 15),
                  height: t(18, 15),
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 3,
                }}
              >
                <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: t(9, 8), color: '#ffffff', lineHeight: t(11, 10) }}>
                  {totalQty > 99 ? '99+' : totalQty}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
