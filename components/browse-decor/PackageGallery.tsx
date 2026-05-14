import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

export type DecorPackage = {
  id: string;
  title: string;
  price: number;
  priceLabel: string;
  description: string;
  image: string;
};

export const DECOR_PACKAGES: DecorPackage[] = [
  {
    id: 'red-classic',
    title: 'Red Decor-Classic',
    price: 5000,
    priceLabel: 'Rs 5,000',
    description: 'Rose Centerpiece With Candle Light, Romantic & Intimate',
    image: 'https://c.animaapp.com/moybk94uF21O9Y/img/21765-1.png',
  },
  {
    id: 'red-cake',
    title: 'Red Decor-with cake & bouquet',
    price: 5000,
    priceLabel: 'Rs 5,000',
    description: 'Rose Centrepiece, Candle Light, Plus A Fresh Bouquet And Cake On Us.',
    image: 'https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-1.png',
  },
  {
    id: 'white-arch',
    title: 'White Decor - Floral Arch',
    price: 12000,
    priceLabel: 'Rs 12,000',
    description: 'Table Floral Arrangement, Custom Card And A Back Floral Arch. Includes Cake.',
    image: 'https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-2.png',
  },
  {
    id: 'pink-white-art',
    title: 'Pink & White — Artificial',
    price: 5000,
    priceLabel: 'Rs 5,000',
    description: 'Vases Of Pink And White Artificial Flowers With Candle Light. Soft And Pretty.',
    image: 'https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-3.png',
  },
  {
    id: 'black-silver',
    title: 'Black & Silver Balloons',
    price: 10000,
    priceLabel: 'Rs 10,000',
    description: 'Full Balloon Backdrop With Three Placement Decks For Cakes And Gifts. Fairy Lights And Happy Birthday Tag.',
    image: 'https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-4.png',
  },
  {
    id: 'pink-white-fresh',
    title: 'Pink & White — Fresh Florals',
    price: 15000,
    priceLabel: 'Rs 15,000',
    description: 'Fresh Pink And White Florals, Candle Light And A Custom Card.',
    image: 'https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-5.png',
  },
];

type Props = {
  selectedId: string;
  onSelect: (id: string) => void;
};

export function PackageGallery({ selectedId, onSelect }: Props) {
  const { width, t, isTablet } = useResponsive();

  const cols = isTablet ? 3 : width >= 480 ? 2 : 1;
  const gap = t(16, 12);
  const cardWidth = (width - t(48, 32) - gap * (cols - 1)) / cols;
  const imgHeight = t(210, 140);

  const rows: DecorPackage[][] = [];
  for (let i = 0; i < DECOR_PACKAGES.length; i += cols) {
    rows.push(DECOR_PACKAGES.slice(i, i + cols));
  }

  return (
    <View style={{ gap: t(20, 16) }}>
      <View style={{ gap: t(4, 3) }}>
        <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), letterSpacing: t(2, 1.5), color: '#775596' }}>
          BIRTHDAYS · ANNIVERSARIES · BRIDAL · PROPOSALS · EVENTS
        </Text>
        <View style={{ gap: t(2, 1) }}>
          <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), lineHeight: t(48, 28), color: '#1d0636' }}>
            Set The Scene
          </Text>
          <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: t(14, 11), lineHeight: t(28, 18), color: 'rgba(29,6,54,0.7)' }}>
            Pick A Package, Then Customise The Palette, Flowers And Finishing Touches
          </Text>
        </View>
      </View>

      <View style={{ gap }}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
            {row.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.85}
                  onPress={() => onSelect(item.id)}
                  style={{
                    width: cardWidth,
                    backgroundColor: '#ffffff',
                    borderRadius: t(20, 16),
                    overflow: 'hidden',
                    borderWidth: 2,
                    borderColor: isSelected ? '#1e0736' : 'transparent',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4.37 },
                    shadowOpacity: 0.05,
                    shadowRadius: t(22, 16),
                    elevation: 3,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: '100%', height: imgHeight }}
                    resizeMode="cover"
                  />
                  <View style={{ padding: t(20, 14), paddingTop: t(12, 10), gap: t(16, 10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: t(16, 10) }}>
                      <Text style={{ flex: 1, fontFamily: 'PlayfairDisplay_500Medium', fontSize: t(20, 14), color: '#1e0736' }}>
                        {item.title}
                      </Text>
                      <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(20, 14), color: '#370c64', flexShrink: 0 }}>
                        {item.priceLabel}
                      </Text>
                    </View>
                    <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), lineHeight: t(19.6, 15), color: '#1e0736', opacity: 0.7 }}>
                      {item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}
