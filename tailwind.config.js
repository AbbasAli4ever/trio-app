/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'trio-dark':            '#1e0736',
        'trio-purple':          '#775596',
        'trio-glow':            '#a274fc',
        'trio-bg':              '#f7f6f7',
        'trio-bundle-hitea':    '#e1d5f5',
        'trio-bundle-cinema':   '#ffdfea',
        'trio-bundle-birthday': '#fce6d4',
        'trio-pink':            '#e9145d',
        'trio-orange':          '#fd4b00',
        'trio-orange-light':    '#fe7840',
        error:   '#ef4444',
        success: '#22c55e',
        warning: '#f59e0b',
      },
      fontFamily: {
        playfair:  ['PlayfairDisplay_400Regular', 'serif'],
        'playfair-medium': ['PlayfairDisplay_500Medium', 'serif'],
        'playfair-semibold': ['PlayfairDisplay_600SemiBold', 'serif'],
        'playfair-italic': ['PlayfairDisplay_400Regular_Italic', 'serif'],
        montserrat: ['Montserrat_400Regular', 'sans-serif'],
        'montserrat-medium': ['Montserrat_500Medium', 'sans-serif'],
        'montserrat-bold': ['Montserrat_700Bold', 'sans-serif'],
        manrope:   ['Manrope_500Medium', 'sans-serif'],
        bebas:     ['BebasNeue_400Regular', 'sans-serif'],
        inter:     ['Inter_400Regular', 'sans-serif'],
        'inter-medium': ['Inter_500Medium', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
