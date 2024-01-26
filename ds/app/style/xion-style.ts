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
  '0.5': "calc(var(--spacing) / 2)'",
  '1': 'var(--spacing)',
  '2': 'calc(var(--spacing) * 2)',
  '3': 'calc(var(--spacing) * 3)',
  '4': 'calc(var(--spacing) * 4)',
  '5': 'calc(var(--spacing) * 5)',
  '6': 'calc(var(--spacing) * 6)',
  '7': 'calc(var(--spacing) * 7)',
  '8': 'calc(var(--spacing) * 8)',
  '9': 'calc(var(--spacing) * 9)',
  '10': 'calc(var(--spacing) * 10)',
  '11': 'calc(var(--spacing) * 11)',
  '12': 'calc(var(--spacing) * 12)',
  '13': 'calc(var(--spacing) * 13)',
  '14': 'calc(var(--spacing) * 14)',
  '15': 'calc(var(--spacing) * 15)',
  '16': 'calc(var(--spacing) * 16)',
  '17': 'calc(var(--spacing) * 17)',
  '18': 'calc(var(--spacing) * 18)',
  '19': 'calc(var(--spacing) * 19)',
  '20': 'calc(var(--spacing) * 20)',
  '21': 'calc(var(--spacing) * 21)',
  '22': 'calc(var(--spacing) * 22)',
  '23': 'calc(var(--spacing) * 23)',
  '24': 'calc(var(--spacing) * 24)',
  '25': 'calc(var(--spacing) * 25)',
  mobile: '450px',
} as const;

export const XION_STYLE = {
  colors,
  borderRadius,
  spacing,
};
