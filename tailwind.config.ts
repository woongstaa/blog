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
        'cool-gray-reverse': '#303030'
      },
      fontFamily: {
        pretendard: ['Pretendard']
      }
      // maxHeight: {
      //   tocHeight: 'calc(100vh - 6vh)'
      // }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
