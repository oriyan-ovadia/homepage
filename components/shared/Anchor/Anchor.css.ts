import { colors } from 'styles/utils';
import { style } from '@vanilla-extract/css';

export const anchorCss = style({
  color: colors.white,
  transition: 'all 200ms',
  selectors: {
    '&:hover': {
      color: colors.primaryLight,
    },
  },
});
