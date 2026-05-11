import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CinemaHero, OfferDetails, DateSelection, ShowtimeSelection, ReservationSummary } from '@/components/cinema';
import { useResponsive } from '@/hooks';

export default function CinemaScreen() {
  const { t } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f7' }} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: t(48, 32),
          paddingHorizontal: t(24, 16),
          gap: t(24, 18),
        }}
        showsVerticalScrollIndicator={false}
      >
        <CinemaHero />
        <OfferDetails />
        <DateSelection />
        <ShowtimeSelection />
        <ReservationSummary />

        {/* Reserve button */}
        <View style={{ alignItems: 'flex-end', paddingTop: t(8, 4), paddingBottom: t(24, 16) }}>
          <TouchableOpacity
            activeOpacity={0.88}
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
              Reserve 1 Seat
            </Text>
            <Text style={{ fontSize: t(16, 13), color: '#ffffff' }}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
