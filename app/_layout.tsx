import '../global.css';

import { QueryClientProvider } from '@tanstack/react-query';
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_400Regular_Italic,
} from '@expo-google-fonts/playfair-display';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { Manrope_500Medium } from '@expo-google-fonts/manrope';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';

import { Spinner, ToastProvider } from '@/components/ui';
import { queryClient } from '@/services/queries';
import { Navbar } from '@/components/home';
import { TrayPanel } from '@/components/shared/TrayPanel';

SplashScreen.preventAutoHideAsync();

function NavbarOverlay() {
  return <Navbar />;
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_400Regular_Italic,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Manrope_500Medium,
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded) void SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return <Spinner fullScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="+not-found" />
          </Stack>
          <NavbarOverlay />
          <TrayPanel />
        </View>
      </ToastProvider>
    </QueryClientProvider>
  );
}
