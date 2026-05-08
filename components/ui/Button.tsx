import type { FC, ReactNode } from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps {
  onPress:   () => void;
  children:  ReactNode;
  variant?:  Variant;
  size?:     Size;
  isLoading?:boolean;
  disabled?: boolean;
  fullWidth?:boolean;
  className?:string;
}

const variantClasses: Record<Variant, string> = {
  primary:     'bg-primary-600 active:bg-primary-700',
  secondary:   'bg-slate-200 dark:bg-slate-700 active:bg-slate-300 dark:active:bg-slate-600',
  outline:     'border border-primary-600 bg-transparent active:bg-primary-50 dark:active:bg-primary-950',
  ghost:       'bg-transparent active:bg-slate-100 dark:active:bg-slate-800',
  destructive: 'bg-red-500 active:bg-red-600',
};

const textClasses: Record<Variant, string> = {
  primary:     'text-white',
  secondary:   'text-slate-800 dark:text-slate-100',
  outline:     'text-primary-600',
  ghost:       'text-slate-700 dark:text-slate-200',
  destructive: 'text-white',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5',
  md: 'px-5 py-3',
  lg: 'px-6 py-4',
};

const textSizeClasses: Record<Size, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export const Button: FC<ButtonProps> = ({
  onPress,
  children,
  variant   = 'primary',
  size      = 'md',
  isLoading = false,
  disabled  = false,
  fullWidth = false,
  className = '',
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={[
        'flex-row items-center justify-center rounded-xl',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : 'self-start',
        isDisabled ? 'opacity-50' : '',
        className,
      ].join(' ')}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' || variant === 'destructive' ? '#fff' : '#3b82f6'}
        />
      ) : (
        <Text
          className={[
            'font-semibold',
            textClasses[variant],
            textSizeClasses[size],
          ].join(' ')}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};
