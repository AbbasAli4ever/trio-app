import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

export function PromoBanner() {
  const { t } = useResponsive();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#f5eefb',
        paddingHorizontal: t(16, 12),
        paddingVertical: t(10, 8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: t(12, 8),
        minHeight: t(50, 44),
      }}
    >
      {/* Left: icon + text */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6), flex: 1, minWidth: 0 }}>
        <Image
          source={{ uri: 'https://c.animaapp.com/moy8bt6h4zSfsO/img/birhtday-2.png' }}
          style={{ width: t(28, 24), height: t(28, 24), flexShrink: 0 }}
          resizeMode="contain"
        />
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: t(4, 2) }}>
          <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: t(13, 11), color: '#1d0636' }}>
            BIRTHDAY MODE
          </Text>
          <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 10), color: '#6e6e6e' }}>
            CAKE, SPARKLERS & BUNDLE SAVINGS UNLOCKED
          </Text>
        </View>
      </View>

      {/* Right: CTA + close */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6), flexShrink: 0 }}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={{
            backgroundColor: '#775596',
            borderRadius: t(10, 8),
            paddingHorizontal: t(16, 12),
            paddingVertical: t(8, 6),
          }}
        >
          <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(12, 10), color: '#ffffff' }}>
            Build Package
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setVisible(false)}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={{ fontSize: t(16, 14), color: '#3c3c3c', lineHeight: t(18, 16) }}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
