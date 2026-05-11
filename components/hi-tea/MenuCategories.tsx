import { Image, Text, View } from 'react-native';
import { useResponsive } from '@/hooks';

const MENU_CATEGORIES = [
  {
    id: '1',
    title: 'Savouries',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg',
    items: [
      { text: 'Cucumber & Cream Cheese Sandwich', star: true },
      { text: 'Chicken Tikka Slider', star: false },
      { text: 'Mini Quiche', star: false },
      { text: 'Spinach & Feta Roll', star: false },
    ],
  },
  {
    id: '2',
    title: 'Scones',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg',
    items: [
      { text: 'Buttermilk Scone', star: true },
      { text: 'Clotted Cream', star: false },
      { text: 'House Strawberry Preserve', star: false },
      { text: 'Lemon Curd', star: false },
    ],
  },
  {
    id: '3',
    title: 'Sweets',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg',
    items: [
      { text: 'Macaron of the Day', star: true },
      { text: 'Lemon Tartlet', star: false },
      { text: 'Chocolate Eclair', star: false },
      { text: 'Mini Cheesecake', star: false },
    ],
  },
  {
    id: '4',
    title: 'Tea Pairing',
    image: 'https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg',
    items: [
      { text: 'Earl Grey', star: true },
      { text: 'Moroccan Mint', star: false },
      { text: 'Kashmiri Pink Chai', star: false },
      { text: 'Chamomile', star: false },
    ],
  },
];

export function MenuCategories() {
  const { t, width, isTablet } = useResponsive();

  const cols = isTablet ? 2 : 1;
  const gap = t(16, 12);
  const hPad = t(48, 32);
  const cardWidth = (width - hPad - gap * (cols - 1)) / cols;
  const imgWidth = t(160, 120);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
      {MENU_CATEGORIES.map((cat) => (
        <View
          key={cat.id}
          style={{
            width: cardWidth,
            backgroundColor: '#ffffff',
            borderRadius: t(20, 16),
            overflow: 'hidden',
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.06,
            shadowRadius: t(16, 10),
            elevation: 3,
          }}
        >
          {/* Number badge */}
          <View
            style={{
              position: 'absolute',
              top: t(10, 8),
              left: t(10, 8),
              zIndex: 10,
              backgroundColor: '#ffffff',
              borderRadius: t(55, 40),
              paddingHorizontal: t(10, 8),
              paddingVertical: t(4, 2),
              minWidth: t(30, 24),
              alignItems: 'center',
            }}
          >
            <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(24, 18), color: '#775596', lineHeight: t(26, 20) }}>
              {cat.id}
            </Text>
          </View>

          {/* Image */}
          <Image
            source={{ uri: cat.image }}
            style={{ width: imgWidth, flexShrink: 0 }}
            resizeMode="cover"
          />

          {/* Content */}
          <View style={{ flex: 1, paddingHorizontal: t(16, 12), paddingVertical: t(12, 10), gap: t(12, 8) }}>
            <Text style={{ fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(20, 15), color: '#1e0736' }}>
              {cat.title}
            </Text>
            <View style={{ gap: t(8, 6) }}>
              {cat.items.map((item, idx) => (
                <View key={idx} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: t(8, 6) }}>
                  <Text style={{ fontSize: t(12, 10), color: '#775596', marginTop: t(1, 1) }}>✳</Text>
                  <Text style={{ flex: 1, fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#775596', lineHeight: t(17, 14) }}>
                    {item.text}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
