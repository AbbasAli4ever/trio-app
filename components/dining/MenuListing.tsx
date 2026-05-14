import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';
import { useTrayStore } from '@/store';

const CATEGORIES = ['All', 'Salads', 'Starters', 'Sandwiches', 'Pasta', 'Mains', 'Asian', 'Pizaa'];

const MENU_ITEMS = [
  {
    id: 'garden-greens',
    name: 'Garden Greens',
    price: 'TBC',
    description: 'Iceberg, Cucumber, Cherry Tomato, Balsamic Glaze.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
    category: 'Salads',
  },
  {
    id: 'caesar-classic',
    name: 'Caesar Classic',
    price: 'TBC',
    description: 'Romaine, Parmesan Crisp, Anchovy Dressing, Croutons.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-1.png',
    tags: [
      { label: 'BEST SELLER', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
    ],
    category: 'Salads',
  },
  {
    id: 'quinoa',
    name: 'Quinoa & Pomegranate',
    price: 'TBC',
    description: 'Tri-color Quinoa, Mint, Pomegranate, Lemon-tahini.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-2.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
    category: 'Salads',
  },
  {
    id: 'burrata',
    name: 'Burrata Peach',
    price: 'TBC',
    description: 'Stone Fruit, Basil Oil, Toasted Pistachio, Sea Salt.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-3.png',
    tags: [
      { label: 'SIGNATURE', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
    category: 'Starters',
  },
  {
    id: 'sweet-corn',
    name: 'Sweet Corn',
    price: 'TBC',
    description: 'Velvet Broth, Charred Corn, Chive Oil.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-4.png',
    tags: [
      { label: 'BEST SELLER', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
    ],
    category: 'Starters',
  },
  {
    id: 'roasted-tomato',
    name: 'Roasted Tomato',
    price: 'TBC',
    description: 'Slow-roasted Heirloom Tomato, Cream, Sourdough Toast.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-5.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
    category: 'Starters',
  },
  {
    id: 'thai-coconut',
    name: 'Thai Coconut',
    price: 'TBC',
    description: 'Lemongrass, Kaffir Lime, Mushroom, Coconut Milk.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-6.png',
    tags: [
      { label: 'SIGNATURE', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
    category: 'Asian',
  },
  {
    id: 'truffle-fries',
    name: 'Truffle Fries',
    price: 'TBC',
    description: 'Hand-cut, Parmesan, Truffle Oil, Lemon Aioli.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-7.png',
    tags: [
      { label: 'BEST SELLER', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
    ],
    category: 'Starters',
  },
  {
    id: 'cheese-board',
    name: 'Cheese Board',
    price: 'TBC',
    description: 'Aged Cheddar, Brie, Gouda, Fig Jam, Honeycomb.',
    image: 'https://c.animaapp.com/mp0v1bwjBLhRkO/img/21765-1-8.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
    category: 'Starters',
  },
];

export function MenuListing() {
  const { width, t, isTablet } = useResponsive();
  const [activeCategory, setActiveCategory] = useState('All');
  const addItem = useTrayStore((s) => s.addItem);

  const cols = isTablet ? 3 : width >= 480 ? 2 : 1;
  const gap = t(16, 12);
  const cardWidth = (width - t(48, 32) - gap * (cols - 1)) / cols;
  const imgHeight = t(210, 150);

  const filtered = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <View style={{ gap: t(16, 12) }}>
      {/* Category filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: t(8, 6), flexDirection: 'row', paddingVertical: t(4, 2) }}
        bounces={false}
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
                borderColor: isActive ? '#1e0736' : '#ebe6f0',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4.37 },
                shadowOpacity: 0.05,
                shadowRadius: t(22, 14),
                elevation: isActive ? 0 : 2,
              }}
            >
              <Text
                style={{
                  fontFamily: isActive ? 'Montserrat_700Bold' : 'Montserrat_500Medium',
                  fontSize: t(13.7, 11),
                  lineHeight: t(19.2, 14),
                  color: isActive ? '#ffffff' : '#1e0736',
                }}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Menu grid */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {filtered.map((item) => (
          <View
            key={item.id}
            style={{
              width: cardWidth,
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
            {/* Image + tags */}
            <View>
              <Image
                source={{ uri: item.image }}
                style={{ width: '100%', height: imgHeight }}
                resizeMode="cover"
              />
              {/* Tags overlay */}
              <View
                style={{
                  position: 'absolute',
                  top: t(18, 12),
                  left: t(16, 10),
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: t(7, 5),
                }}
              >
                {item.tags.map((tag) => (
                  <View
                    key={tag.label}
                    style={{
                      backgroundColor: tag.bg,
                      borderRadius: t(28, 20),
                      paddingHorizontal: t(10, 7),
                      paddingVertical: t(3, 2),
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'Montserrat_500Medium',
                        fontSize: t(14, 10),
                        color: tag.color,
                      }}
                    >
                      {tag.label}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Content */}
            <View style={{ flex: 1, padding: t(20, 14), paddingTop: t(12, 10), gap: t(24, 16) }}>
              {/* Name + price + description */}
              <View style={{ gap: t(16, 10) }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: t(16, 10) }}>
                  <Text style={{ flex: 1, fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(20, 14), color: '#1e0736' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 14), lineHeight: t(31, 20), color: '#370c64', flexShrink: 0 }}>
                    {item.price}
                  </Text>
                </View>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                  {item.description}
                </Text>
              </View>

              {/* Buttons */}
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6) }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    minWidth: t(91, 70),
                    borderRadius: t(10, 8),
                    borderWidth: 1,
                    borderColor: '#775596',
                    backgroundColor: '#ffffff',
                    paddingHorizontal: t(20, 14),
                    paddingVertical: t(10, 8),
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 12), color: '#775596' }}>
                    +Extras
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image, category: 'dining' })}
                  style={{
                    flex: 1,
                    borderRadius: t(10, 8),
                    backgroundColor: '#775596',
                    paddingVertical: t(10, 8),
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 12), color: '#ffffff' }}>
                    + Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
