import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const CATEGORIES = ['All', 'Single', 'Small', 'Medium', 'Large'];

const FLOWERS = [
  {
    id: 'books-roses',
    badge: 'SIGNATURE',
    badgeBg: 'rgba(163,224,188,0.8)',
    badgeColor: '#370c64',
    title: 'Books & Roses',
    description: 'Hand-Tied Roses Arranged With A Hardback Novel Our Most Instagrammed Bouquet.',
    price: 'Rs 6,500',
    image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1.png',
    category: 'Medium',
  },
  {
    id: 'strawberry-bouquet',
    badge: 'SIGNATURE',
    badgeBg: 'rgba(163,224,188,0.8)',
    badgeColor: '#370c64',
    title: 'Strawberry Bouquet',
    description: 'Fresh Strawberries Dipped In Chocolate, Nestled With Roses.',
    price: 'Rs 6,500',
    image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-1.png',
    category: 'Medium',
  },
  {
    id: 'strawberry-petite',
    badge: 'SIGNATURE',
    badgeBg: 'rgba(163,224,188,0.8)',
    badgeColor: '#370c64',
    title: 'Strawberry Petite',
    description: 'Smaller Strawberry & Rose Bouquet For A Quick Surprise.',
    price: 'Rs 6,500',
    image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-2.png',
    category: 'Small',
  },
  {
    id: 'like-you-man',
    badge: 'SIGNATURE',
    badgeBg: 'rgba(163,224,188,0.8)',
    badgeColor: '#370c64',
    title: 'Like You, Man.',
    description: 'A Bold Cone Bouquet With A Card That Says It Without Saying It.',
    price: 'Rs 6,500',
    image: 'https://c.animaapp.com/mp0xwaecNdkuMq/img/21765-1-3.png',
    category: 'Large',
  },
];

export function FlowerListing() {
  const { width, t, isTablet } = useResponsive();
  const [activeCategory, setActiveCategory] = useState('All');

  const cols = isTablet ? 3 : width >= 480 ? 2 : 1;
  const gap = t(16, 12);
  const cardWidth = (width - t(48, 32) - gap * (cols - 1)) / cols;
  const imgHeight = t(210, 160);

  const filtered = activeCategory === 'All'
    ? FLOWERS
    : FLOWERS.filter((f) => f.category === activeCategory);

  return (
    <View style={{ gap: t(16, 12) }}>
      {/* Category filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ flexDirection: 'row', gap: t(16, 10), paddingVertical: t(4, 2) }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => setActiveCategory(cat)}
              activeOpacity={0.8}
              style={{
                paddingHorizontal: t(20, 14),
                paddingVertical: t(8, 6),
                borderRadius: t(999, 999),
                backgroundColor: isActive ? '#1e0736' : '#ffffff',
                borderWidth: t(1.96, 1.5),
                borderColor: isActive ? '#1e0736' : 'transparent',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4.37 },
                shadowOpacity: isActive ? 0 : 0.05,
                shadowRadius: t(22, 14),
                elevation: isActive ? 0 : 2,
              }}
            >
              <Text
                style={{
                  fontFamily: isActive ? 'Montserrat_700Bold' : 'Montserrat_500Medium',
                  fontSize: t(14, 11),
                  lineHeight: t(19.6, 14),
                  color: isActive ? '#ffffff' : '#1e0736',
                }}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Cards grid */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {filtered.map((flower) => (
          <View
            key={flower.id}
            style={{
              width: cardWidth,
              height: t(400, 300),
              backgroundColor: '#ffffff',
              borderRadius: t(20, 16),
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4.37 },
              shadowOpacity: 0.05,
              shadowRadius: t(22, 14),
              elevation: 3,
            }}
          >
            {/* Image + badge */}
            <View>
              <Image
                source={{ uri: flower.image }}
                style={{ width: '100%', height: imgHeight }}
                resizeMode="cover"
              />
              <View
                style={{
                  position: 'absolute',
                  top: t(18, 12),
                  left: t(20, 14),
                  backgroundColor: flower.badgeBg,
                  borderRadius: t(28, 20),
                  paddingHorizontal: t(10, 7),
                  paddingVertical: t(3, 2),
                }}
              >
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 10), color: flower.badgeColor }}>
                  {flower.badge}
                </Text>
              </View>
            </View>

            {/* Content */}
            <View style={{ padding: t(20, 14), paddingTop: t(12, 10), paddingBottom: t(64, 52) }}>
              <View style={{ gap: t(16, 10) }}>
                <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(20, 15), color: '#1e0736' }}>
                  {flower.title}
                </Text>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                  {flower.description}
                </Text>
              </View>
            </View>

            {/* Price + button — absolute at card bottom */}
            <View
              style={{
                position: 'absolute',
                bottom: t(20, 14),
                left: t(20, 14),
                right: t(20, 14),
                flexDirection: 'row',
                alignItems: 'center',
                gap: t(24, 16),
              }}
            >
              <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 15), color: '#370c64', flexShrink: 0 }}>
                {flower.price}
              </Text>
              <TouchableOpacity
                activeOpacity={0.85}
                style={{
                  flex: 1,
                  backgroundColor: '#775596',
                  borderRadius: t(10, 8),
                  paddingVertical: t(10, 8),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>
                  + Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
