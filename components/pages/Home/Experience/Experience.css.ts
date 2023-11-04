import { globalStyle, style } from '@vanilla-extract/css';
import { colors } from 'styles/utils';
import { toRem } from 'utils';

export const layoutCss = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: toRem(64),
});

export const viewFullCss = style({
  color: colors.white,
  marginTop: toRem(64),
  display: 'inline-block',
});

export const anchorCss = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
});

export const anchorTextCss = style({
  paddingBottom: '2px',
  transition: 'all 200ms',
});

export const arrowIconCss = style({
  width: '16px !important',
  height: '16px !important',
  transition: 'all 200ms',
});

globalStyle(`${viewFullCss} ${anchorTextCss}`, {
  paddingBottom: '2px',
  transition: 'all 200ms',
});

globalStyle(`${viewFullCss}:hover ${anchorTextCss}`, {
  boxShadow: `0px -1px 0px 0px ${colors.primaryLight} inset`,
});

globalStyle(`${viewFullCss}:hover ${arrowIconCss}`, {
  transform: `translateX(${toRem(8)})`,
});
