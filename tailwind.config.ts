import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'netural-black': '#222223',
        'warm-gray': '#D7D2CB',
        'cool-gray': '#B1B3B3',
        'cool-gray-reverse': '#4e4c4c'
      },
      fontFamily: {
        pretendard: ['Pretendard']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
