import { vars } from '@/src/@infrastructure/style/theme.css';
import { styleVariants } from '@vanilla-extract/css';

export const buttonStyles = styleVariants({
  primary: { background: vars.color.brand },
  secondary: { background: 'red' },
});
