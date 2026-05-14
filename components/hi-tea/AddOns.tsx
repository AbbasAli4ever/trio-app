import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';
import { useTrayStore } from '@/store';

const ADD_ONS = [
  { id: 'bellini-mocktail', label: 'Glass Of Bellini Mocktail', price: '+tbc' },
  { id: 'bouquet-table', label: 'Bouquet For The Table', price: '+Rs 2,500' },
  { id: 'polaroid-print', label: 'Extra Polaroid Print', price: '+Rs 350' },
];

export function AddOns() {
  const { t } = useResponsive();
  const addItem = useTrayStore((s) => s.addItem);
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  }

  function handleAddToTray() {
    const toAdd = ADD_ONS.filter((a) => selected.includes(a.id));
    toAdd.forEach((addon) => {
      addItem({
        id: addon.id,
        name: addon.label,
        price: addon.price.replace('+', '').trim(),
        image: null,
        category: 'hi-tea',
      });
    });
    setSelected([]);
  }

  return (
    <View style={{ gap: t(20, 14) }}>
      <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1d0636' }}>
        Make It Special — Add-ons
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t(16, 10) }}>
        {ADD_ONS.map((addon) => {
          const isActive = selected.includes(addon.id);
          return (
            <TouchableOpacity
              key={addon.id}
              onPress={() => toggle(addon.id)}
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

      {selected.length > 0 && (
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={handleAddToTray}
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            gap: t(8, 6),
            backgroundColor: '#775596',
            borderRadius: t(10, 8),
            paddingHorizontal: t(20, 14),
            paddingVertical: t(10, 8),
          }}
        >
          <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(15, 12), color: '#ffffff' }}>
            Add {selected.length} to Tray
          </Text>
          <Text style={{ fontSize: t(15, 12), color: '#ffffff' }}>→</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
