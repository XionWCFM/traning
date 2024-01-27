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
      'header-1': 'calc(var(--font-size) * 2)',
      'header-2': 'calc(var(--font-size) * 1.75)',
      'sub-title-1': 'calc(var(--font-size) * 1.125)',
      'sub-title-2': 'calc(var(--font-size) * 1)',
      'sub-title-3': 'calc(var(--font-size) * 0.875)',
      'sub-title-4': 'calc(var(--font-size) * 0.75)',
      'body-1': 'calc(var(--font-size) * 1)',
      'body-2': 'calc(var(--font-size) * 0.875)',
      'caption-1': 'calc(var(--font-size) * 0.75)',
      'caption-2': 'calc(var(--font-size) * 0.625)',
    },
    extend: {
      minWidth: {},
    },
  },
  plugins: [require('tailwindcss-animate')],
  darkMode: ['class'],
};
export default config;
