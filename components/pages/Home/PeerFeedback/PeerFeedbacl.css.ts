import { style } from '@vanilla-extract/css';
import { toRem } from 'utils';

export const ulCss = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: toRem(30),
});

export const liCss = style({
  backgroundImage:
    'radial-gradient( circle at 50% 100%, rgba(46, 54, 79, 0.4) 1%, rgba(46, 54, 79, 0.1) 100% )',
  padding: toRem(32),
  border: '1px solid #c7d0e533',
  borderRadius: toRem(8),
});
