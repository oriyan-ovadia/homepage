import { style } from '@vanilla-extract/css';
import { viewportQuery } from 'styles/utils';
import { toRem } from 'utils';

export const containerCss = style({
  '@media': {
    [viewportQuery.small]: {
      paddingBlock: '3rem',
    },
  },
});

export const layoutCss = style({
  '@media': {
    [viewportQuery.large]: {
      display: 'flex',
      columnGap: toRem(16),
    },
  },
});

export const mainCss = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',

  '@media': {
    [viewportQuery.large]: {
      width: '50%',
      paddingBlockEnd: '6rem',
    },
  },
});

export const headerCss = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media': {
    [viewportQuery.large]: {
      paddingBlock: '6rem',
      width: '50%',
      position: 'sticky',
      top: 0,
      left: 0,
      height: '100%',
    },
  },
});
