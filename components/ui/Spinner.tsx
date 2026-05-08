import type { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

interface SpinnerProps {
  size?:      'small' | 'large';
  color?:     string;
  fullScreen?:boolean;
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({
  size       = 'large',
  color      = '#3b82f6',
  fullScreen = false,
  className  = '',
}) => {
  if (fullScreen) {
    return (
      <View className="flex-1 items-center justify-center bg-background-light dark:bg-background-dark">
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }

  return (
    <View className={`items-center justify-center p-4 ${className}`}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
