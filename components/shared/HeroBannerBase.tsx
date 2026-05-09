import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

type Props = {
  backgroundImage: string;
  eyebrow: string;
  title: string;
  paragraph?: string;
  backLabel?: string;
  onBack?: () => void;
  marginTop?: boolean;
};

export function HeroBannerBase({ backgroundImage, eyebrow, title, paragraph, backLabel, onBack, marginTop = false }: Props) {
  const { t } = useResponsive();

  return (
    <View style={{ paddingHorizontal: t(0, 0), marginTop: marginTop ? t(16, 12) : 0 }}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={{
          width: '100%',
          height: t(285, 200),
          borderRadius: t(24, 18),
          overflow: 'hidden',
        }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(13,3,23,1)', 'rgba(55,12,100,0.78)', 'rgba(55,12,100,0.3)', 'rgba(13,3,23,0)']}
          locations={[0, 0.42, 0.52, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />

        <View style={{ flex: 1, padding: t(40, 20), justifyContent: 'space-between' }}>
          {/* Back button — only rendered when backLabel + onBack are provided */}
          {backLabel && onBack ? (
            <TouchableOpacity
              onPress={onBack}
              activeOpacity={0.8}
              style={{ flexDirection: 'row', alignItems: 'center', gap: t(8, 6), alignSelf: 'flex-start' }}
            >
              <View
                style={{
                  width: t(24, 20),
                  height: t(24, 20),
                  borderRadius: t(6, 5),
                  backgroundColor: '#ffffff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: t(14, 12), color: '#1e0736', lineHeight: t(16, 14) }}>‹</Text>
              </View>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#ffffff' }}>
                {backLabel}
              </Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          {/* Bottom text block */}
          <View style={{ gap: t(4, 2) }}>
            <Text
              style={{
                fontFamily: 'PlayfairDisplay_400Regular_Italic',
                fontSize: t(20, 14),
                color: '#ffffff',
                marginBottom: -2,
              }}
            >
              {eyebrow}
            </Text>
            <Text
              style={{
                fontFamily: 'PlayfairDisplay_500Medium',
                fontSize: t(54, 30),
                lineHeight: t(60, 36),
                color: '#ffffff',
                marginBottom: paragraph ? t(4, 2) : 0,
              }}
            >
              {title}
            </Text>
            {paragraph ? (
              <View style={{ opacity: 0.9 }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat_400Regular',
                    fontSize: t(14, 11),
                    color: '#ffffff',
                    lineHeight: t(22, 17),
                  }}
                >
                  {paragraph}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
