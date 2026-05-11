import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

type Tag = {
  label: string;
  bg: string;
  color: string;
};

type Beverage = {
  name: string;
  price: string;
  description: string;
  image: string;
  tags: Tag[];
};

const BEVERAGES: Beverage[] = [
  {
    name: 'Espresso',
    price: 'TBC',
    description: 'Single Shot, Our House Blend.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
  },
  {
    name: 'Doppio',
    price: 'TBC',
    description: 'Double Shot, No Milk.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-1.png',
    tags: [{ label: 'BEST SELLER', bg: 'rgba(176,118,238,0.9)', color: '#370c64' }],
  },
  {
    name: 'Cappuccino',
    price: 'TBC',
    description: 'Velvet Steam Milk, Fine Micro-foam.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-2.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
  },
  {
    name: 'Vanilla Matcha Latte',
    price: 'TBC',
    description: 'Ceremonial Matcha, Vanilla, Milk Over Ice.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-3.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
  },
  {
    name: 'Spanish Matcha',
    price: 'TBC',
    description: 'Matcha + Condensed Milk, Soft & Sweet.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-4.png',
    tags: [{ label: 'BEST SELLER', bg: 'rgba(176,118,238,0.9)', color: '#370c64' }],
  },
  {
    name: 'Strawberry Matcha',
    price: 'TBC',
    description: 'Strawberry Purée, Matcha, Milk.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-5.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
  },
  {
    name: 'Flat White',
    price: 'TBC',
    description: 'Double Ristretto, Silk Milk.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-6.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
  },
  {
    name: 'Piccolo',
    price: 'TBC',
    description: 'Ristretto + A Dash Of Steamed Milk.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-7.png',
    tags: [{ label: 'BEST SELLER', bg: 'rgba(176,118,238,0.9)', color: '#370c64' }],
  },
  {
    name: 'Cortado',
    price: 'TBC',
    description: 'Equal Parts Espresso & Milk, Served Warm.',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-8.png',
    tags: [
      { label: 'VEG', bg: 'rgba(176,118,238,0.9)', color: '#370c64' },
      { label: 'LIGHT', bg: 'rgba(163,224,188,0.8)', color: '#370c64' },
    ],
  },
];

export function BeverageGrid() {
  const { t, width, isTablet } = useResponsive();

  const cols = isTablet ? 3 : 1;
  const gap = t(16, 12);
  const hPad = t(48, 32);
  const cardWidth = (width - hPad - gap * (cols - 1)) / cols;
  const imgHeight = t(210, 180);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
      {BEVERAGES.map((bev) => (
        <View
          key={bev.name}
          style={{
            width: cardWidth,
            height: t(390, 340),
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
          {/* Image + badge row */}
          <View>
            <Image
              source={{ uri: bev.image }}
              style={{ width: '100%', height: imgHeight }}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                top: t(18, 12),
                left: t(16, 12),
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: t(7, 5),
              }}
            >
              {bev.tags.map((tag) => (
                <View
                  key={tag.label}
                  style={{
                    backgroundColor: tag.bg,
                    borderRadius: t(28, 20),
                    paddingHorizontal: t(10, 8),
                    paddingVertical: t(3, 2),
                  }}
                >
                  <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13, 10), color: tag.color }}>
                    {tag.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Content */}
          <View style={{ padding: t(20, 14), paddingTop: t(12, 10), paddingBottom: t(64, 54) }}>
            {/* Name + price + description */}
            <View style={{ gap: t(16, 10) }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: t(16, 10) }}>
                <Text style={{ flex: 1, fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(20, 15), color: '#1e0736' }}>
                  {bev.name}
                </Text>
                <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 15), color: '#370c64', flexShrink: 0 }}>
                  {bev.price}
                </Text>
              </View>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                {bev.description}
              </Text>
            </View>
          </View>

          {/* Buttons — absolute at card bottom */}
          <View
            style={{
              position: 'absolute',
              bottom: t(16, 12),
              left: t(20, 14),
              right: t(20, 14),
              flexDirection: 'row',
              gap: t(8, 6),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: t(44, 36),
                paddingHorizontal: t(16, 12),
                borderRadius: t(10, 8),
                borderWidth: 1,
                borderColor: '#d7d0de',
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: t(80, 64),
              }}
            >
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#775596' }}>+Extras</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
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
