import { Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const SHOWTIMES = [
  { time: '10:00 AM', availability: '25/25 Left', seats: 25 },
  { time: '12:30 PM', availability: '25/25 Left', seats: 25 },
  { time: '3:00 PM', availability: '18/25 Left', seats: 18 },
  { time: '5:30 PM', availability: '10/25 Left', seats: 10 },
  { time: '8:00 PM', availability: '5/25 Left', seats: 5 },
];

type Props = {
  selected: string | null;
  onSelect: (time: string) => void;
};

export function ShowtimeSelection({ selected, onSelect }: Props) {
  const { t, width, isTablet } = useResponsive();

  const hPad = isTablet ? t(48, 32) : 32;
  const cols = isTablet ? 3 : 2;
  const gap = t(16, 12);
  const cardWidth = (width - hPad - gap * (cols - 1)) / cols;

  return (
    <View style={{ gap: t(14, 10) }}>
      <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1d0636' }}>
        Showtime — Pick Any
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {SHOWTIMES.map((slot) => {
          const isSelected = selected === slot.time;
          const isFull = slot.seats === 0;
          const isLow = slot.seats > 0 && slot.seats <= 5;
          const availColor = isFull ? '#f87171' : isLow ? '#fb923c' : '#b076ee';

          return (
            <TouchableOpacity
              key={slot.time}
              activeOpacity={isFull ? 1 : 0.8}
              onPress={() => { if (!isFull) onSelect(slot.time); }}
              style={{
                width: cardWidth,
                borderRadius: t(16, 12),
                borderWidth: isSelected ? t(1.5, 1) : 1,
                borderColor: isSelected ? '#775596' : isFull ? '#e5e7eb' : '#000000',
                backgroundColor: isSelected ? 'rgba(219,181,255,0.19)' : isFull ? '#f9f9f9' : '#ffffff',
                opacity: isFull ? 0.6 : 1,
                padding: t(20, 14),
                gap: t(16, 10),
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: t(8, 6) }}>
                <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: t(22, 16), color: isSelected ? '#775596' : '#1e0736' }}>
                  {slot.time}
                </Text>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13, 10), color: availColor }}>
                  {slot.availability}
                </Text>
              </View>
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13, 10), color: '#1e0736', opacity: 0.7 }}>
                {isSelected ? '✓  Selected · pick your movie' : '●  Open slot · pick your movie'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
