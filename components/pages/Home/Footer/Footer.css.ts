import { globalStyle, style } from '@vanilla-extract/css';
import { toRem } from 'utils';

export const footerCss = style({
  maxWidth: '28rem',
});

globalStyle(`${footerCss}:not(a)`, { color: '#64748b' });

export const heartCss = style({
  width: toRem(12),
  color: '#f56565',
  marginInline: `${toRem(4)} ${toRem(3)}`,
  opacity: 0.8,
});
