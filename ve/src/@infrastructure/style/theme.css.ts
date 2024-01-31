import { createGlobalTheme } from '@vanilla-extract/css';
import { XION_STYLE } from './xion-style';

export const vars = createGlobalTheme(':root', XION_STYLE);
