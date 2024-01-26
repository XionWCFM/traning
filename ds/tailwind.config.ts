import type { Config } from 'tailwindcss';
import { XION_STYLE } from './app/style/xion-style';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: XION_STYLE.colors,
    borderRadius: XION_STYLE.borderRadius,
    spacing: XION_STYLE.spacing,
    fontSize: {
      'title-sm': 'calc(var(--font-size) * 0.75)',
      'title-md': 'calc(var(--font-size) * 1)',
      'title-lg': 'calc(var(--font-size) * 1.5)',
      'title-xl': 'calc(var(--font-size) * 2)',
      'title-2xl': 'calc(var(--font-size) * 3)',
      'content-sm': '',
      
    },
    extend: {
      minWidth: {},
    },
  },
  plugins: [],
  darkMode: ['class'],
};
export default config;
