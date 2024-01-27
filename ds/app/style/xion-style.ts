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

export const XION_STYLE = {
  colors,
  borderRadius,
  spacing,
};
