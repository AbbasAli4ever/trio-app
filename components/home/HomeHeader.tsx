import { Image, Text, View } from 'react-native';

export function HomeHeader() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 24,
        left: 24,
        right: 24,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 11,
        paddingHorizontal: 16,
        paddingVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 7,
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: 'https://c.animaapp.com/6tGBECKN/img/trio-purple-1@2x.png' }}
        style={{ width: 51, height: 51, borderRadius: 4 }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontFamily: 'Inter_500Medium',
          fontSize: 11,
          letterSpacing: 2,
          color: '#6e6e6e',
        }}
      >
        TABLE 12 · THURSDAY
      </Text>
    </View>
  );
}
