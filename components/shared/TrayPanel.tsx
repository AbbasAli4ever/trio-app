import { useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { useResponsive } from '@/hooks';
import { useTrayStore } from '@/store';
function ItemImage({ src, size }: { src: any; size: number }) {
  if (typeof src === 'string') return <Image source={{ uri: src }} style={{ width: size, height: size }} resizeMode="cover" />;
  return <Image source={src} style={{ width: size, height: size }} resizeMode="cover" />;
}

const SUGGESTED = {
  id: 'hitea-suggested',
  name: 'Hi-Tea for Two + Bouquet',
  price: 'Rs 10,350',
  image: require('@/public/smart-bundles/card1.png'),
  category: 'bundle',
};

export function TrayPanel() {
  const { t, width } = useResponsive();
  const { height: screenHeight } = useWindowDimensions();
  const { items, isOpen, closeTray, changeQty, submitOrder, addItem } = useTrayStore();

  const navbarHeight = t(80, 70);
  const trayMaxHeight = screenHeight * 0.6;
  const trayBottom = navbarHeight + t(16, 12);
  const trayWidth = Math.min(t(430, 340), width * 0.92);
  const slideAnim = useRef(new Animated.Value(trayWidth)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : trayWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen, trayWidth]);

  const subtotal = items.reduce((sum, item) => {
    const num = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? sum : sum + num * item.quantity;
  }, 0);

  const subtotalStr = subtotal > 0 ? `Rs ${subtotal.toLocaleString()}` : '—';

  if (!isOpen) return null;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: trayBottom,
        right: t(20, 14),
        width: trayWidth,
        maxHeight: trayMaxHeight,
        zIndex: 51,
        transform: [{ translateX: slideAnim }],
        backgroundColor: '#ffffff',
        borderRadius: t(16, 14),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.13,
        shadowRadius: 24,
        elevation: 16,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: t(24, 18),
          paddingTop: t(24, 20),
          paddingBottom: t(32, 24),
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: t(24, 16) }}>
          <View style={{ flex: 1, gap: t(8, 6) }}>
            <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(24, 20), color: '#1e0736', marginTop: -1 }}>
              Your Tray
            </Text>
            <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: t(14, 12), color: '#1e0736' }}>
              {items.length} item{items.length !== 1 ? 's' : ''} · server is notified live
            </Text>
          </View>
          <TouchableOpacity
            onPress={closeTray}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={{ width: t(24, 20), height: t(24, 20), alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontSize: t(20, 18), color: '#1e0736', lineHeight: t(22, 20) }}>—</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={{ marginVertical: t(24, 18), borderTopWidth: 1, borderStyle: 'dashed', borderColor: '#ded8e5' }} />

        {/* Tray items */}
        <View style={{ gap: 0 }}>
          {items.map((item, index) => (
            <View key={item.id}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(16, 12) }}>
                <View
                  style={{
                    width: t(72, 60),
                    height: t(72, 60),
                    borderRadius: t(12, 10),
                    overflow: 'hidden',
                    backgroundColor: '#d9d9d9',
                    flexShrink: 0,
                  }}
                >
                  <ItemImage src={item.image} size={t(72, 60)} />
                </View>

                <View style={{ flex: 1, gap: t(8, 6) }}>
                  <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(16, 13), color: '#1e0736' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.5, 15), color: '#1e0736', opacity: 0.7 }}>
                    {item.price}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6), flexShrink: 0 }}>
                  <TouchableOpacity
                    onPress={() => changeQty(item.id, -1)}
                    activeOpacity={0.7}
                    style={{ width: t(24, 20), height: t(24, 20), alignItems: 'center', justifyContent: 'center' }}
                  >
                    <View style={{ width: t(24, 20), height: t(24, 20), borderRadius: t(12, 10), borderWidth: 1.5, borderColor: '#775596', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: t(14, 12), color: '#775596', lineHeight: t(16, 14), marginTop: -1 }}>−</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: t(20, 16), color: '#1e0736', minWidth: t(16, 12), textAlign: 'center' }}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={() => changeQty(item.id, 1)}
                    activeOpacity={0.7}
                    style={{ width: t(24, 20), height: t(24, 20), alignItems: 'center', justifyContent: 'center' }}
                  >
                    <View style={{ width: t(24, 20), height: t(24, 20), borderRadius: t(12, 10), borderWidth: 1.5, borderColor: '#775596', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: t(14, 12), color: '#775596', lineHeight: t(16, 14), marginTop: -1 }}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {index < items.length - 1 && (
                <View style={{ marginVertical: t(16, 12), borderTopWidth: 1, borderStyle: 'dashed', borderColor: '#ded8e5' }} />
              )}
            </View>
          ))}
        </View>

        {/* You might also like */}
        <View style={{ marginTop: t(24, 18), backgroundColor: 'rgba(102,48,216,0.12)', borderRadius: t(8, 7), paddingHorizontal: t(16, 12), paddingVertical: t(8, 7) }}>
          <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), color: '#1e0736', marginTop: -1 }}>
            You might also like
          </Text>
          <View
            style={{
              marginTop: t(8, 6),
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: t(16, 12),
              borderRadius: t(8, 7),
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: '#775596',
              backgroundColor: 'rgba(102,48,216,0.08)',
              padding: t(8, 7),
            }}
          >
            <View style={{ width: t(50, 42), height: t(50, 42), borderRadius: t(8, 6), overflow: 'hidden', backgroundColor: '#d9d9d9', flexShrink: 0 }}>
              <ItemImage src={SUGGESTED.image} size={t(50, 42)} />
            </View>
            <View style={{ flex: 1, gap: t(8, 6) }}>
              <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(14, 11), color: '#1e0736' }}>
                {SUGGESTED.name}
              </Text>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.5, 15), color: '#1e0736', opacity: 0.7 }}>
                {SUGGESTED.price}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => addItem(SUGGESTED)}
              activeOpacity={0.7}
              style={{ width: t(24, 20), height: t(24, 20), alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              <View style={{ width: t(24, 20), height: t(24, 20), borderRadius: t(12, 10), borderWidth: 1.5, borderColor: '#775596', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: t(14, 12), color: '#775596', lineHeight: t(16, 14), marginTop: -1 }}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Subtotal */}
        <View style={{ marginTop: t(24, 18), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: t(24, 16) }}>
          <View style={{ flex: 1, gap: t(8, 6) }}>
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(16, 13), color: '#1e0736', marginTop: -1 }}>
              Subtotal
            </Text>
            <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: t(12, 10), color: '#1e0736' }}>
              {'Menu in transition · items\npriced on the day'}
            </Text>
          </View>
          <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 16), color: '#370c64', marginTop: -1 }}>
            {subtotalStr}
          </Text>
        </View>

        {/* Send to Kitchen */}
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={submitOrder}
          style={{
            marginTop: t(24, 18),
            width: '100%',
            height: t(48, 42),
            borderRadius: t(10, 8),
            backgroundColor: '#775596',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: t(8, 6),
          }}
        >
          <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 14), color: '#ffffff' }}>
            Send to Kitchen
          </Text>
          <Text style={{ fontSize: t(17.5, 15), color: '#ffffff' }}>→</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
}
