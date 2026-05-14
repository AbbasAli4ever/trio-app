import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { BROWSE_CARDS } from '@/constants/homeData';

const CARD_ROUTES: Record<string, string> = {
  dining: '/(tabs)/dining',
  beverages: '/(tabs)/beverages',
  flowers: '/(tabs)/flowers',
  cinema: '/(tabs)/cinema',
  decor: '/browse-decor',
  'hi-tea': '/(tabs)/hi-tea',
};

export function BrowseSection() {
  const { isTablet, width, t } = useResponsive();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const isDragging = useRef(false);

  const cardHeight = t(200, 160);
  const gap = t(16, 12);
  const containerWidth = width - (isTablet ? t(48) : 32);
  const visibleCards = isTablet ? 3 : 1;
  const cardWidth = isTablet
    ? (containerWidth - gap * (visibleCards - 1)) / visibleCards
    : containerWidth * 0.78;

  const totalDots = BROWSE_CARDS.length - visibleCards + 1;
  const maxIndex = totalDots - 1;

  function updateIndex(x: number) {
    const idx = Math.round(x / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(idx, maxIndex)));
  }

  function goToIndex(idx: number) {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    scrollRef.current?.scrollTo({ x: clamped * (cardWidth + gap), animated: true });
    setActiveIndex(clamped);
  }

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  return (
    <View style={{ gap: t(16, 12) }}>
      <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 20), color: '#1d0636' }}>
        Browse
      </Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap }}
        decelerationRate="normal"
        snapToInterval={cardWidth + gap}
        snapToAlignment="start"
        disableIntervalMomentum
        onScrollBeginDrag={() => { isDragging.current = true; }}
        onMomentumScrollEnd={(e) => {
          isDragging.current = false;
          updateIndex(e.nativeEvent.contentOffset.x);
        }}
        onScrollEndDrag={(e) => {
          isDragging.current = false;
          updateIndex(e.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={16}
      >
        {BROWSE_CARDS.map((card) => (
          <View
            key={card.id}
            onTouchStart={() => { isDragging.current = false; }}
            onTouchEnd={() => {
              if (!isDragging.current) router.push(CARD_ROUTES[card.id] as any);
            }}
          >
            <ImageBackground
              source={card.backgroundImage}
              style={{ width: cardWidth, height: cardHeight, borderRadius: t(16, 12), overflow: 'hidden' }}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.43)', 'rgba(0,0,0,0.99)']}
                locations={[0.3, 0.53, 1]}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              />
              <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: t(16, 12), gap: t(6, 4), alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6), width: '100%' }}>
                  <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{ flex: 1, height: 1 }}
                  />
                  <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(24, 18), color: '#ffffff' }}>
                    {card.title}
                  </Text>
                  <LinearGradient
                    colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{ flex: 1, height: 1 }}
                  />
                </View>
                <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: t(11, 9), color: '#ffffff', textAlign: 'center', letterSpacing: 0.5 }}>
                  {card.subtitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: t(12, 10) }}>
        <TouchableOpacity
          onPress={() => goToIndex(activeIndex - 1)}
          disabled={!canGoPrev}
          activeOpacity={0.8}
          style={{
            width: t(32, 28), height: t(32, 28), borderRadius: t(10, 8),
            backgroundColor: canGoPrev ? '#ffffff' : '#f0edf5',
            alignItems: 'center', justifyContent: 'center',
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
            shadowOpacity: canGoPrev ? 0.08 : 0, shadowRadius: 6, elevation: canGoPrev ? 3 : 0,
          }}
        >
          <Feather name="chevron-left" size={t(16, 14)} color={canGoPrev ? '#775596' : '#c5b8d8'} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(6, 5) }}>
          {Array.from({ length: totalDots }).map((_, i) => (
            <View key={i} style={{ height: t(8, 6), width: i === activeIndex ? t(20, 16) : t(8, 6), borderRadius: 4, backgroundColor: i === activeIndex ? '#775596' : '#e0d8ec' }} />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => goToIndex(activeIndex + 1)}
          disabled={!canGoNext}
          activeOpacity={0.8}
          style={{
            width: t(32, 28), height: t(32, 28), borderRadius: t(10, 8),
            backgroundColor: canGoNext ? '#775596' : '#e0d8ec',
            alignItems: 'center', justifyContent: 'center',
            shadowColor: '#775596', shadowOffset: { width: 0, height: 4 },
            shadowOpacity: canGoNext ? 0.35 : 0, shadowRadius: 8, elevation: canGoNext ? 4 : 0,
          }}
        >
          <Feather name="chevron-right" size={t(16, 14)} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
