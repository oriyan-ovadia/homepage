import { viewportQuery } from 'styles/utils';
import { style } from '@vanilla-extract/css';
import { toRem } from 'utils';

export const containerCss = style({
  maxWidth: toRem(1280),
  width: '100%',
  marginInline: 'auto',
  '@media': {
    [viewportQuery.small]: {
      paddingInline: toRem(35),
    },
    [viewportQuery.large]: {
      paddingInline: '6rem',
    },
  },
});
