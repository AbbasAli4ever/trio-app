import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';
import { useTrayStore } from '@/store';

type Activity = {
  title: string;
  description: string;
  image: string;
  price: string;
  perks: string[];
};

const ACTIVITIES: Activity[] = [
  {
    title: 'Canvas Painting',
    description: '90-Min Guided Session. Paints, Brushes, 12×16" Canvas.',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1.png',
    price: 'Rs 3,500',
    perks: ['+ Hot Coffee', '+ Hot Coffee'],
  },
  {
    title: 'Bento Cake Decoration',
    description: 'Decorate A 4" Cake With Buttercream & Sprinkles.',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-1.png',
    price: 'Rs 2,800',
    perks: ['+ Iced Coffee', '+ Slice to take home'],
  },
  {
    title: 'DIY Flower Cone Bouquet',
    description: 'Build Your Own Seasonal Cone Bouquet With Our Florist.',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-2.png',
    price: 'Rs 4,200',
    perks: ['+ Lavender Latte', '+ Brownie'],
  },
  {
    title: 'DIY Charm Bracelet Bar',
    description: 'Pick Beads & Charms — Make 2 Bracelets To Keep.',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-3.png',
    price: 'Rs 2,200',
    perks: ['+ Mocktail', '+ Macaron'],
  },
  {
    title: 'Tote-Bag Painting',
    description: 'Paint A Cotton Tote With Fabric Paints.',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-4.png',
    price: 'Rs 2,400',
    perks: ['+ Iced Tea', '+ Cookie'],
  },
  {
    title: 'Paint Your Own Mug',
    description: 'Ceramic Mug, Food-Safe Paints. We Fire It For Pickup.',
    image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-5.png',
    price: 'Rs 2,600',
    perks: ['+ Hot Coffee', '+ Brownie'],
  },
];

export function ActivitiesCatalog() {
  const { t, width, isTablet } = useResponsive();
  const addItem = useTrayStore((s) => s.addItem);

  const cols = isTablet ? 3 : 1;
  const gap = t(16, 12);
  const hPad = t(48, 32);
  const cardWidth = (width - hPad - gap * (cols - 1)) / cols;
  const imgHeight = t(210, 180);
  const cardHeight = t(420, 360);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
      {ACTIVITIES.map((activity) => (
        <View
          key={activity.title}
          style={{
            width: cardWidth,
            height: cardHeight,
            backgroundColor: '#ffffff',
            borderRadius: t(20, 16),
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.06,
            shadowRadius: t(16, 10),
            elevation: 3,
          }}
        >
          {/* Image */}
          <Image
            source={{ uri: activity.image }}
            style={{ width: '100%', height: imgHeight }}
            resizeMode="cover"
          />

          {/* Content */}
          <View style={{ padding: t(20, 14), paddingTop: t(12, 10), paddingBottom: t(64, 54), gap: t(16, 10) }}>
            <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(20, 15), color: '#1e0736' }}>
              {activity.title}
            </Text>
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
              {activity.description}
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(8, 6) }}>
              {activity.perks.map((perk, idx) => (
                <View
                  key={idx}
                  style={{
                    backgroundColor: '#eee6fe',
                    borderRadius: t(55, 40),
                    paddingHorizontal: t(8, 6),
                    paddingVertical: t(4, 3),
                  }}
                >
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#775596' }}>
                    {perk}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Price + Add button — absolute at bottom */}
          <View
            style={{
              position: 'absolute',
              bottom: t(16, 12),
              left: t(20, 14),
              right: t(20, 14),
              flexDirection: 'row',
              alignItems: 'center',
              gap: t(16, 12),
            }}
          >
            <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 15), color: '#370c64', flexShrink: 0 }}>
              {activity.price}
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => addItem({ id: activity.title.toLowerCase().replace(/\s+/g, '-'), name: activity.title, price: activity.price, image: activity.image, category: 'activity' })}
              style={{
                flex: 1,
                height: t(44, 36),
                borderRadius: t(10, 8),
                backgroundColor: '#775596',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>+ Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
