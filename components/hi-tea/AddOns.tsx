import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const ADD_ONS = [
  { label: 'Glass Of Bellini Mocktail', price: '+tbc' },
  { label: 'Bouquet For The Table', price: '+2,500' },
  { label: 'Extra Polaroid Print', price: '+350' },
];

export function AddOns() {
  const { t } = useResponsive();
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  }

  return (
    <View style={{ gap: t(20, 14) }}>
      <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1d0636' }}>
        Make It Special — Add-ons
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
        {ADD_ONS.map((addon) => {
          const isActive = selected.includes(addon.label);
          return (
            <TouchableOpacity
              key={addon.label}
              onPress={() => toggle(addon.label)}
              activeOpacity={0.8}
              style={{
                height: t(40, 34),
                flexDirection: 'row',
                alignItems: 'center',
                gap: t(6, 4),
                borderRadius: t(999, 999),
                borderWidth: t(1.96, 1.5),
                borderColor: isActive ? '#775596' : '#ebe5f1',
                backgroundColor: isActive ? '#f0e8fa' : '#ffffff',
                paddingHorizontal: t(16, 12),
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: isActive ? 0 : 0.05,
                shadowRadius: t(8, 6),
                elevation: isActive ? 0 : 2,
              }}
            >
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13.7, 11), color: '#1e0736' }}>
                {addon.label}
              </Text>
              <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(13.7, 11), color: '#775596' }}>
                {addon.price}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
