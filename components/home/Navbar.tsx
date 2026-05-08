import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { NAV_OPTIONS } from '@/constants/homeData';

type NavItemProps = {
  label: string;
  imageSrc: string | null;
  isActive: boolean;
  fontSize: number;
  onPress: () => void;
};

function NavItem({ label, imageSrc, isActive, fontSize, onPress }: NavItemProps) {
  if (isActive) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.85}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e0736',
          borderRadius: 67.69,
          paddingHorizontal: 16,
          paddingVertical: 9.85,
          gap: 4.92,
        }}
      >
        {imageSrc && (
          <Image
            source={{ uri: imageSrc }}
            style={{ width: 28, height: 28 }}
            resizeMode="cover"
          />
        )}
        <Text
          style={{
            fontFamily: 'Montserrat_700Bold',
            fontSize,
            lineHeight: fontSize * 1.4,
            color: '#ffffff',
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 66.31,
        borderWidth: 2.41,
        borderColor: '#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 9.85,
        gap: 4.92,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5.38 },
        shadowOpacity: 0.05,
        shadowRadius: 13.45,
        elevation: 2,
      }}
    >
      {imageSrc && (
        <Image
          source={{ uri: imageSrc }}
          style={{ width: 28, height: 28 }}
          resizeMode="cover"
        />
      )}
      <Text
        style={{
          fontFamily: 'Montserrat_500Medium',
          fontSize,
          lineHeight: fontSize * 1.4,
          color: '#1e0736',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function Navbar() {
  const { isTablet } = useResponsive();
  const [activeId, setActiveId] = useState('home');
  const fontSize = isTablet ? 17.23 : 15;

  return (
    <View
      style={{
        position: 'absolute',
        bottom: isTablet ? 20 : 16,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 100,
      }}
      pointerEvents="box-none"
    >
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 14.77,
          borderWidth: 1,
          borderColor: '#e3e3e3',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 14,
          elevation: 8,
          maxWidth: 960,
          width: '95%',
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 9.85,
            paddingVertical: 9.85,
            gap: 8,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
          bounces={false}
        >
          {NAV_OPTIONS.map((option) => (
            <NavItem
              key={option.id}
              label={option.label}
              imageSrc={option.imageSrc}
              isActive={option.id === activeId}
              fontSize={fontSize}
              onPress={() => setActiveId(option.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
