import { style } from '@vanilla-extract/css';
import { viewportQuery } from 'styles/utils';
import { toRem } from 'utils';

export const h1Css = style({
  letterSpacing: '-0.025em',
  '@media': {
    [viewportQuery.small]: {
      fontSize: toRem(36),
    },
  },
});

export const subtitleCss = style({
  marginBlock: `${toRem(16)} ${toRem(20)}`,
});

export const descriptionCss = style({
  '@media': {
    [viewportQuery.large]: {
      maxWidth: toRem(320),
    },
  },
});
