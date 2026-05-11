import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const TOTAL_SEATS = 25;
const PRICE_PER_SEAT = 800;
const TAKEN_SEATS = 3;

export function ReservationSummary() {
  const { t } = useResponsive();
  const [ticketCount, setTicketCount] = useState(1);
  const seatsLeft = TOTAL_SEATS - TAKEN_SEATS;
  const totalPrice = ticketCount * PRICE_PER_SEAT;

  const decrement = () => setTicketCount((p) => Math.max(1, p - 1));
  const increment = () => setTicketCount((p) => Math.min(seatsLeft, p + 1));

  return (
    <View style={{ gap: t(20, 14) }}>
      <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1d0636' }}>
        Tickets
      </Text>

      {/* Counter + price row */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: t(16, 12) }}>
        {/* −  count  + */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: t(24, 16) }}>
          <TouchableOpacity
            onPress={decrement}
            activeOpacity={ticketCount <= 1 ? 1 : 0.8}
            style={{
              width: t(48, 36),
              height: t(48, 36),
              borderRadius: t(24, 18),
              borderWidth: 2,
              borderColor: ticketCount <= 1 ? 'rgba(119,85,150,0.4)' : '#775596',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: ticketCount <= 1 ? 0.4 : 1,
            }}
          >
            <Text style={{ fontSize: t(20, 16), color: '#775596', lineHeight: t(22, 18) }}>−</Text>
          </TouchableOpacity>

          <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(48, 36), color: '#1e0736', minWidth: t(48, 36), textAlign: 'center' }}>
            {ticketCount}
          </Text>

          <TouchableOpacity
            onPress={increment}
            activeOpacity={ticketCount >= seatsLeft ? 1 : 0.8}
            style={{
              width: t(48, 36),
              height: t(48, 36),
              borderRadius: t(24, 18),
              backgroundColor: ticketCount >= seatsLeft ? 'rgba(119,85,150,0.4)' : '#775596',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: ticketCount >= seatsLeft ? 0.4 : 1,
            }}
          >
            <Text style={{ fontSize: t(20, 16), color: '#ffffff', lineHeight: t(22, 18) }}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Seats left + price */}
        <View style={{ alignItems: 'flex-end', gap: t(4, 2) }}>
          <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(13, 10), color: '#1e0736', opacity: 0.6 }}>
            {seatsLeft}/{TOTAL_SEATS} Seats Left
          </Text>
          <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: t(42, 32), color: '#1e0736', lineHeight: t(44, 34) }}>
            RS {totalPrice.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Seat progress bar */}
      <View style={{ flexDirection: 'row', gap: t(6, 4), height: t(16, 12) }}>
        {Array.from({ length: TOTAL_SEATS }).map((_, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              borderRadius: t(8, 6),
              backgroundColor: i < TAKEN_SEATS + ticketCount ? '#775596' : 'rgba(119,85,150,0.1)',
            }}
          />
        ))}
      </View>

      <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(12, 10), color: '#1e0736', opacity: 0.5 }}>
        {ticketCount} seat{ticketCount !== 1 ? 's' : ''} selected · {seatsLeft - ticketCount} remaining
      </Text>
    </View>
  );
}
