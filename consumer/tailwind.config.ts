import type { Config } from 'tailwindcss';
import { XION_STYLE } from '@xionhub/token';
import xionPlugin from '@xionhub/tailwind-plugin';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...XION_STYLE,
    extend: {},
  },
  plugins: [xionPlugin],
};
export default config;
