import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CinemaHero, OfferDetails, DateSelection, ShowtimeSelection, ReservationSummary } from '@/components/cinema';
import { useResponsive } from '@/hooks';
import { useTrayStore } from '@/store';

const today = new Date();
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function CinemaScreen() {
  const { t } = useResponsive();
  const { items, setQuantity, openTray } = useTrayStore();
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState({ day: today.getDate(), month: today.getMonth(), year: today.getFullYear() });
  const [selectedShowtime, setSelectedShowtime] = useState<string | null>('3:00 PM');

  const dateLabel = `${selectedDate.day} ${MONTHS[selectedDate.month]} ${selectedDate.year}`;
  const slotId = `cinema-${selectedDate.year}-${selectedDate.month}-${selectedDate.day}-${selectedShowtime ?? 'no-time'}`;
  const existingQty = items.find((i) => i.id === slotId)?.quantity ?? 0;

  function handleReserve() {
    const newQty = existingQty + ticketCount;
    setQuantity(
      slotId,
      newQty,
      {
        id: slotId,
        name: `Cinema · ${dateLabel} · ${selectedShowtime ?? ''}`,
        price: `Rs 800`,
        image: 'https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-2.png',
        category: 'cinema',
      }
    );
    openTray();
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: t(140, 110),
          paddingHorizontal: t(24, 16),
          gap: t(24, 18),
        }}
        showsVerticalScrollIndicator={false}
      >
        <CinemaHero />
        <OfferDetails />
        <DateSelection selectedDate={selectedDate} onSelectDate={setSelectedDate} />
        <ShowtimeSelection selected={selectedShowtime} onSelect={setSelectedShowtime} />
        <ReservationSummary ticketCount={ticketCount} onTicketCountChange={setTicketCount} />

        {/* Reserve button */}
        <View style={{ alignItems: 'flex-end', paddingTop: t(8, 4) }}>
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={handleReserve}
            style={{
              width: '100%',
              maxWidth: t(374, 280),
              height: t(44, 38),
              borderRadius: t(10, 8),
              backgroundColor: '#775596',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: t(6, 4),
              alignSelf: 'flex-end',
            }}
          >
            <Text style={{ fontFamily: 'Inter_500Medium', fontSize: t(16, 13), color: '#ffffff' }}>
              Reserve {ticketCount} Seat{ticketCount !== 1 ? 's' : ''}
            </Text>
            <Text style={{ fontSize: t(16, 13), color: '#ffffff' }}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
