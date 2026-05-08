import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { BROWSE_CARDS } from '@/constants/homeData';

export function BrowseSection() {
  const { isTablet, width } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const cardHeight = 200;
  const gap = 16;
  const containerWidth = width - 48;
  const visibleCards = isTablet ? 3 : 1;
  const cardWidth = isTablet
    ? (containerWidth - gap * (visibleCards - 1)) / visibleCards
    : containerWidth * 0.78;

  const totalDots = BROWSE_CARDS.length - visibleCards + 1;
  const maxIndex = totalDots - 1;

  function handleScroll(e: { nativeEvent: { contentOffset: { x: number } } }) {
    const x = e.nativeEvent.contentOffset.x;
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
    <View style={{ gap: 16 }}>
      <Text
        style={{
          fontFamily: 'PlayfairDisplay_600SemiBold',
          fontSize: isTablet ? 24 : 20,
          color: '#1d0636',
        }}
      >
        Browse
      </Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap }}
        decelerationRate="fast"
        snapToInterval={cardWidth + gap}
        snapToAlignment="start"
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      >
        {BROWSE_CARDS.map((card) => (
          <TouchableOpacity key={card.id} activeOpacity={0.9}>
            <ImageBackground
              source={{ uri: card.backgroundImage }}
              style={{ width: cardWidth, height: cardHeight, borderRadius: 16, overflow: 'hidden' }}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.43)', 'rgba(0,0,0,0.99)']}
                locations={[0.3, 0.53, 1]}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 16,
                  gap: 6,
                  alignItems: 'center',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, width: '100%' }}>
                  <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1, height: 1 }}
                  />
                  <Text
                    style={{
                      fontFamily: 'PlayfairDisplay_500Medium',
                      fontSize: 24,
                      color: '#ffffff',
                    }}
                  >
                    {card.title}
                  </Text>
                  <LinearGradient
                    colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1, height: 1 }}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'Manrope_500Medium',
                    fontSize: 11,
                    color: '#ffffff',
                    textAlign: 'center',
                    letterSpacing: 0.5,
                  }}
                >
                  {card.subtitle}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Prev / Next controls */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        {/* Prev button */}
        <TouchableOpacity
          onPress={() => goToIndex(activeIndex - 1)}
          disabled={!canGoPrev}
          activeOpacity={0.8}
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            backgroundColor: canGoPrev ? '#ffffff' : '#f0edf5',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: canGoPrev ? 0.08 : 0,
            shadowRadius: 6,
            elevation: canGoPrev ? 3 : 0,
          }}
        >
          <Feather name="chevron-left" size={16} color={canGoPrev ? '#775596' : '#c5b8d8'} />
        </TouchableOpacity>

        {/* Pill indicator — one dot per scroll position */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          {Array.from({ length: totalDots }).map((_, i) => (
            <View
              key={i}
              style={{
                height: 8,
                width: i === activeIndex ? 20 : 8,
                borderRadius: 4,
                backgroundColor: i === activeIndex ? '#775596' : '#e0d8ec',
              }}
            />
          ))}
        </View>

        {/* Next button */}
        <TouchableOpacity
          onPress={() => goToIndex(activeIndex + 1)}
          disabled={!canGoNext}
          activeOpacity={0.8}
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            backgroundColor: canGoNext ? '#775596' : '#e0d8ec',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#775596',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: canGoNext ? 0.35 : 0,
            shadowRadius: 8,
            elevation: canGoNext ? 4 : 0,
          }}
        >
          <Feather name="chevron-right" size={16} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
