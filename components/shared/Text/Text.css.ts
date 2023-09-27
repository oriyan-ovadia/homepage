import { colors, fontSize } from 'styles/utils';
import { recipe } from '@vanilla-extract/recipes';

export const textRecipe = recipe({
  base: {},
  variants: {
    appearance: {
      muted: {
        color: colors.bodyFg,
      },
      white: {
        color: colors.white,
      },
    },

    fontWeight: {
      400: {
        fontWeight: 400,
      },
      500: {
        fontWeight: 500,
      },
      600: {
        fontWeight: 600,
      },
      700: {
        fontWeight: 700,
      },
    },
    isUpperCase: {
      true: {
        textTransform: 'uppercase',
      },
    },
    size: {
      xs: {
        fontSize: fontSize.xs,
      },
      sm: {
        fontSize: fontSize.sm,
      },
      md: {
        fontSize: fontSize.md,
      },
      lg: {
        fontSize: fontSize.lg,
      },
      xl: {
        fontSize: fontSize.xl,
      },
    },
  },
});
