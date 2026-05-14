import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="dining" />
      <Tabs.Screen name="beverages" />
      <Tabs.Screen name="flowers" />
      <Tabs.Screen name="cinema" />
      <Tabs.Screen name="hi-tea" />
      <Tabs.Screen name="smart-bundles" />
    </Tabs>
  );
}
