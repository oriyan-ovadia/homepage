import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, viewportQuery } from 'styles/utils';
import { toRem } from 'utils';

export const sidebarMenuRootCss = style({
  '@media': {
    [viewportQuery.small]: {
      display: 'none',
    },
  },
});

export const ulCss = style({
  maxWidth: 'max-content',
  marginTop: toRem(64),
});

export const itemCss = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: toRem(18),
});

export const textRecipe = recipe({
  base: {
    letterSpacing: '0.1em',
    fontWeight: 700,
  },
  variants: {
    isActive: {
      true: {
        color: colors.white,
      },
      false: {
        color: '#64748b',
      },
    },
  },
});

export const anchorCss = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: toRem(18),
  paddingBlock: toRem(11),
});

export const lineRecipe = recipe({
  base: {
    height: toRem(1),
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '0.15s',
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: colors.white,
        width: toRem(64),
      },
      false: {
        backgroundColor: '#64748b',
        width: toRem(32),
      },
    },
  },
});

globalStyle(`${itemCss}:hover ${lineRecipe()}`, {
  width: toRem(64),
});
