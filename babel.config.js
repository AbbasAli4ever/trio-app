module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@': '.',
            '@/components': './components',
            '@/hooks': './hooks',
            '@/services': './services',
            '@/store': './store',
            '@/constants': './constants',
            '@/types': './types',
            '@/utils': './utils',
            '@/theme': './theme',
            '@/config': './config',
            '@/assets': './assets',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
