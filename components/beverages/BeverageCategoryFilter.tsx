import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useResponsive } from '@/hooks';

const CATEGORIES = ['All', 'Hot Coffee', 'Cold Coffee', 'Matcha', 'Mocktails', 'Smoothies', 'Juices', 'Shakes'];

export function BeverageCategoryFilter() {
  const { t } = useResponsive();
  const [active, setActive] = useState('All');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{ flexDirection: 'row', gap: t(8, 6), paddingVertical: t(4, 2) }}
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <TouchableOpacity
            key={cat}
            onPress={() => setActive(cat)}
            activeOpacity={0.8}
            style={{
              height: t(36, 30),
              paddingHorizontal: t(16, 12),
              borderRadius: t(999, 999),
              borderWidth: 1,
              borderColor: isActive ? '#775596' : '#e0d8e8',
              backgroundColor: isActive ? '#775596' : '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: isActive ? 'Montserrat_700Bold' : 'Montserrat_500Medium',
                fontSize: t(14, 11),
                color: isActive ? '#ffffff' : '#1e0736',
              }}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
