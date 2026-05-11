import { Text, View } from 'react-native';
import { useResponsive } from '@/hooks';

export function OfferDetails() {
  const { t } = useResponsive();

  return (
    <View>
      <Text style={{ fontSize: t(16, 13), lineHeight: t(22, 18), color: '#1e0736' }}>
        <Text style={{ fontFamily: 'Montserrat_700Bold' }}>🎬 Included free</Text>
        <Text style={{ fontFamily: 'Montserrat_500Medium' }}>
          {' '}with any dining order over Rs 2,500 · Otherwise Rs 800/seat · 25 seats per slot
        </Text>
      </Text>
    </View>
  );
}
