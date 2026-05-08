export const Colors = {
  light: {
    background:       '#f8fafc',
    surface:          '#ffffff',
    surfaceSecondary: '#f1f5f9',
    text:             '#0f172a',
    textSecondary:    '#475569',
    textMuted:        '#94a3b8',
    border:           '#e2e8f0',
    primary:          '#3b82f6',
    primaryForeground:'#ffffff',
    error:            '#ef4444',
    success:          '#22c55e',
    warning:          '#f59e0b',
    tint:             '#3b82f6',
    tabIconDefault:   '#94a3b8',
    tabIconSelected:  '#3b82f6',
  },
  dark: {
    background:       '#020617',
    surface:          '#0f172a',
    surfaceSecondary: '#1e293b',
    text:             '#f1f5f9',
    textSecondary:    '#94a3b8',
    textMuted:        '#475569',
    border:           '#1e293b',
    primary:          '#60a5fa',
    primaryForeground:'#0f172a',
    error:            '#f87171',
    success:          '#4ade80',
    warning:          '#fbbf24',
    tint:             '#60a5fa',
    tabIconDefault:   '#475569',
    tabIconSelected:  '#60a5fa',
  },
} as const;

export type ColorScheme = keyof typeof Colors;
export type ThemeColors = typeof Colors.light;
