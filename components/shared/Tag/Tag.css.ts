import { colors, fontSize } from 'styles/utils';
import { style } from '@vanilla-extract/css';

export const tagCss = style({
  display: 'inline-block',
  backgroundColor: colors.primaryDark,
  color: colors.primaryLight,
  lineHeight: '1.25rem',
  fontWeight: 500,
  fontSize: fontSize.xs,
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
});
