import type { FC } from 'react';
import { useState } from 'react';
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  label?:      string;
  error?:      string;
  hint?:       string;
  leftIcon?:   keyof typeof Ionicons.glyphMap;
  rightIcon?:  keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
  containerClassName?: string;
}

export const Input: FC<InputProps> = ({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerClassName = '',
  secureTextEntry,
  ...props
}) => {
  const [isFocused,  setIsFocused]  = useState(false);
  const [isSecure,   setIsSecure]   = useState(secureTextEntry ?? false);

  const borderColor = error
    ? 'border-red-500'
    : isFocused
    ? 'border-primary-500'
    : 'border-slate-300 dark:border-slate-600';

  return (
    <View className={`w-full ${containerClassName}`}>
      {label && (
        <Text className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </Text>
      )}

      <View
        className={[
          'flex-row items-center rounded-xl border bg-white dark:bg-slate-800 px-3',
          borderColor,
        ].join(' ')}
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            className="mr-2 text-slate-400 dark:text-slate-500"
          />
        )}

        <TextInput
          {...props}
          secureTextEntry={isSecure}
          onFocus={(e) => { setIsFocused(true);  props.onFocus?.(e); }}
          onBlur={(e)  => { setIsFocused(false); props.onBlur?.(e);  }}
          className="flex-1 py-3 text-base text-slate-900 dark:text-slate-100"
          placeholderTextColor="#94a3b8"
        />

        {secureTextEntry ? (
          <Pressable onPress={() => setIsSecure((v) => !v)} hitSlop={8}>
            <Ionicons
              name={isSecure ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              className="text-slate-400 dark:text-slate-500"
            />
          </Pressable>
        ) : rightIcon ? (
          <Pressable onPress={onRightIconPress} hitSlop={8}>
            <Ionicons
              name={rightIcon}
              size={20}
              className="text-slate-400 dark:text-slate-500"
            />
          </Pressable>
        ) : null}
      </View>

      {error ? (
        <Text className="mt-1 text-xs text-red-500">{error}</Text>
      ) : hint ? (
        <Text className="mt-1 text-xs text-slate-400 dark:text-slate-500">{hint}</Text>
      ) : null}
    </View>
  );
};
