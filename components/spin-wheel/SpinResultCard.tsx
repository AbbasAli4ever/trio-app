import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

type Props = {
  label: string;
  title: string;
  description: string;
  priceText: string;
  image: string;
  onSpinAgain: () => void;
  onAddToTray: () => void;
};

export function SpinResultCard({ label, title, description, priceText, image, onSpinAgain, onAddToTray }: Props) {
  const { t, isTablet } = useResponsive();

  const imgSize = t(185, 148);

  return (
    <View
      style={{
        width: 450,
        backgroundColor: '#ffffff',
        borderRadius: t(20, 16),
        overflow: 'hidden',
        flexDirection: isTablet ? 'row' : 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: t(16, 10),
        elevation: 4,
        marginHorizontal: "auto"
      }}
    >
      {/* Left image with label badge */}
      <View style={{ width: imgSize, height: imgSize, flexShrink: 0 }}>
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        {/* "YOUR BITE" badge */}
        <View
          style={{
            position: 'absolute',
            top: t(10, 8),
            left: t(14, 10),
            backgroundColor: '#ffffff',
            borderRadius: t(8, 6),
            paddingHorizontal: t(10, 8),
            paddingVertical: t(4, 3),
          }}
        >
          <Text
            style={{
              fontFamily: 'BebasNeue_400Regular',
              fontSize: t(16, 13),
              color: '#775596',
              lineHeight: t(18, 15),
            }}
          >
            {label}
          </Text>
        </View>
      </View>

      {/* Right content */}
      <View
        style={{
          flex: 1,
          padding: t(20, 14),
          paddingTop: t(12, 10),
          gap: t(12, 10),
          justifyContent: 'center',
        }}
      >
        {/* Title + description */}
        <View style={{ gap: t(6, 4) }}>
          <Text
            style={{
              fontFamily: 'PlayfairDisplay_500Medium',
              fontSize: t(16, 14),
              color: '#1e0736',
              lineHeight: t(22, 19),
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: t(9, 8),
              color: '#1e0736',
              opacity: 0.7,
              lineHeight: t(13, 11),
            }}
          >
            {description}
          </Text>
        </View>

        {/* Price */}
        <Text
          style={{
            fontFamily: 'BebasNeue_400Regular',
            fontSize: t(16, 14),
            color: '#370c64',
            lineHeight: t(18, 16),
          }}
        >
          {priceText}
        </Text>

        {/* Buttons */}
        <View style={{ flexDirection: 'row', gap: t(12, 8) }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onSpinAgain}
            style={{
              flex: 1,
              height: t(40, 34),
              borderRadius: t(10, 8),
              borderWidth: 1,
              borderColor: '#060505',
              backgroundColor: 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Inter_500Medium',
                fontSize: t(13, 11),
                color: '#060505',
              }}
            >
              Spin Again
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onAddToTray}
            style={{
              flex: 1,
              height: t(40, 34),
              borderRadius: t(10, 8),
              backgroundColor: '#775596',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Inter_500Medium',
                fontSize: t(13, 11),
                color: '#ffffff',
              }}
            >
              Add to tray
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
