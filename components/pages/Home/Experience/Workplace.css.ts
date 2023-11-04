import { globalStyle, style } from '@vanilla-extract/css';
import { colors, fontSize, viewportQuery } from 'styles/utils';
import { toRem } from 'utils';

export const hoverCss = style({
  opacity: 0,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '0.15s',
  background: 'rgba(255, 255, 255, 0.09)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148, 163, 184, 0.1)',
  borderRadius: '0.25rem',
  zIndex: 0,
  top: '-1rem',
  bottom: '-1rem',
  left: '-1.5rem',
  right: '-1.5rem',
  position: 'absolute',
  '@media': {
    [viewportQuery.small]: {
      display: 'none',
    },
  },
});

export const detailsCss = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px',
  zIndex: 1,
});

export const titleCss = style({
  fontSize: fontSize.md,
  fontWeight: 500,
  color: colors.white,
  transitionProperty:
    'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '0.15s',
});

export const descriptionCss = style({
  lineHeight: 1.6,
  selectors: {
    '&:not(:last-of-type)': {
      marginBottom: toRem(10),
    },
  },
});

export const durationCss = style({
  width: toRem(120),
  flexShrink: 0,
  letterSpacing: '0.025em',
  fontWeight: 600,
  color: '#64748b',
  zIndex: 1,
  paddingBlock: toRem(4),
});

export const arrowIconCss = style({
  width: toRem(16),
  height: toRem(16),
  transitionProperty: 'transform',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '0.15s',
});

export const companyName = style({
  display: 'inline-block',
});

export const tagsCss = style({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '6px',
  rowGap: '8px',
});

export const anchorTakeoverCss = style({
  position: 'absolute',
  top: '-1rem',
  bottom: '-1rem',
  left: '-1.5rem',
  right: '-1.5rem',
  '@media': {
    [viewportQuery.small]: {
      display: 'none',
    },
  },
});

export const workplaceCss = style({
  '@media': {
    [viewportQuery.large]: {
      display: 'flex',
      columnGap: toRem(10),
      position: 'relative',
    },
  },
});

globalStyle(`${workplaceCss}:hover ${titleCss}`, {
  '@media': {
    [viewportQuery.small]: {
      color: colors.primaryLight,
    },
  },
});

globalStyle(`${workplaceCss}:hover ${hoverCss}`, {
  '@media': {
    [viewportQuery.large]: {
      opacity: 1,
    },
  },
});

globalStyle(`${workplaceCss}:hover ${titleCss}`, {
  '@media': {
    [viewportQuery.large]: {
      color: colors.primaryLight,
    },
  },
});

globalStyle(`${workplaceCss}:hover ${arrowIconCss}`, {
  '@media': {
    [viewportQuery.large]: {
      transform: 'translate(0.18rem, -0.18rem)',
    },
  },
});
