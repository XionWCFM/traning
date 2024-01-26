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
    extend: {},
  },
  plugins: [],
  darkMode: ['class'],
};
export default config;
