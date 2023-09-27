import { style } from '@vanilla-extract/css';
import { toRem } from 'utils';

const ICON_SIZE = 26;

export const socialCss = style({
  marginTop: toRem(32),
});

export const linkedInIconCss = style({
  width: toRem(ICON_SIZE),
  height: toRem(ICON_SIZE),
});
