import { useColorScheme as useRNColorScheme } from 'react-native';

import { useThemeStore } from '@/store';
import { Colors } from '@/theme';

export const useColorScheme = () => {
  const systemScheme = useRNColorScheme() ?? 'light';
  const mode = useThemeStore((s) => s.mode);

  const colorScheme = mode === 'system' ? systemScheme : mode;
  const colors      = Colors[colorScheme];
  const isDark      = colorScheme === 'dark';

  return { colorScheme, colors, isDark };
};
