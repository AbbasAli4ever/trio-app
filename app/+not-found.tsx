import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View className="flex-1 items-center justify-center bg-white dark:bg-slate-900">
        <Text className="mb-2 text-5xl font-extrabold text-slate-900 dark:text-slate-100">404</Text>
        <Text className="mb-6 text-slate-500 dark:text-slate-400">This screen doesn't exist.</Text>
        <Link href="/" className="text-primary-500 underline">
          Go to Home
        </Link>
      </View>
    </>
  );
}
