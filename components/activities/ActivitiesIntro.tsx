import { Text, View } from 'react-native';
import { useResponsive } from '@/hooks';

export function ActivitiesIntro() {
  const { t } = useResponsive();

  return (
    <View style={{ gap: t(4, 2) }}>
      <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(14, 11), letterSpacing: t(2, 1.5), color: '#775596' }}>
        CAFE-CRAFT · 60–90 MIN · MATERIALS INCLUDED
      </Text>
      <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), lineHeight: t(29, 22), color: '#1e0736' }}>
        Make Something Lovely
      </Text>
    </View>
  );
}
