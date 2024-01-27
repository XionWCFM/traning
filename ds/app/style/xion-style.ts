const colors = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  negative: {
    DEFAULT: 'hsl(var(--negative))',
    foreground: 'hsl(var(--negative-foreground))',
  },
  positive: {
    DEFAULT: 'hsl(var(--positive))',
    foreground: 'hsl(var(--positive-foreground))',
  },
} as const;

const borderRadius = {
  sm: 'var(--radius)',
  md: 'calc(var(--radius) * 2)',
  lg: 'calc(var(--radius) * 3)',
  xl: 'calc(var(--radius) * 5)',
  '2xl': 'calc(var(--radius) * 8)',
  full: '999px',
} as const;

const spacing = {
  '2': 'var(--spacing)',
  '4': 'calc(var(--spacing) * 2)',
  '6': 'calc(var(--spacing) * 3)',
  '8': 'calc(var(--spacing) * 4)',
  '12': 'calc(var(--spacing) * 6)',
  '16': 'calc(var(--spacing) * 8)',
  '24': 'calc(var(--spacing) * 12)',
  '32': 'calc(var(--spacing) * 16)',
  '48': 'calc(var(--spacing) * 24)',
  '64': 'calc(var(--spacing) * 32)',
  '128': 'calc(var(--spacing) * 64)',
  '256': 'calc(var(--spacing) * 128)',
  '512': 'calc(var(--spacing) * 256)',
  '1024': 'calc(var(--spacing) * 512)',
} as const;

const fontSize = {
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
} as const;
const fontWeight = {
  'header-1': '700',
  'header-2': '700',
  'sub-title-1': '600',
  'sub-title-2': '600',
  'sub-title-3': '600',
  'sub-title-4': '600',
  'body-1': '500',
  'body-2': '500',
  'caption-1': '500',
  'caption-2': '400',
} as const;
const lineHeight = {
  'header-1': '128%',
  'header-2': '133%',
  'sub-title-1': '133%',
  'sub-title-2': '150%',
  'sub-title-3': '143%',
  'sub-title-4': '150%',
  'body-1': '150%',
  'body-2': '143%',
  'caption-1': '150%',
  'caption-2': '120%',
} as const;

export const XION_STYLE = {
  colors,
  borderRadius,
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
};
