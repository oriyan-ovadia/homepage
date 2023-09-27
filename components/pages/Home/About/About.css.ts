import { colors } from 'styles/utils';
import { style } from '@vanilla-extract/css';

const Gradient = {
  ICE: 'linear-gradient(124.31deg, rgb(70, 227, 183) 0.18%, rgb(82, 124, 172) 89.2%)',
  LIME: 'linear-gradient( 90deg, rgb(255, 248, 85) 0.04%, rgb(70, 227, 183) 100.04%)',
  PRIMARY:
    'linear-gradient( 0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4) ), linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%)',
  PURPLE:
    'linear-gradient(285.49deg, rgb(245, 55, 249) -14.61%, rgb(247, 190, 43) 106.06%)',
};

export const layoutCss = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 20,
});

export const lightSaberCursorCss = style({
  cursor: 'url(/media/light-saber-cursor.png), pointer',
  fontWeight: 500,
  color: colors.white,
  selectors: {
    '&:hover': {
      background: Gradient.PURPLE,
      WebkitBoxDecorationBreak: 'clone',
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      color: 'unset',
      backgroundBlendMode: 'normal, screen',
      backgroundClip: 'text',
    },
  },
});
