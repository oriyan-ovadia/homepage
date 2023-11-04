import { globalStyle } from '@vanilla-extract/css';
import { colors, fontFamily, fontSize } from './utils';

globalStyle('body', {
  fontFamily: fontFamily.primary,
  fontFeatureSettings: "'ss03', 'cv02', 'cv11'",
  fontSize: fontSize.md,
  WebkitFontSmoothing: 'antialiased',
  color: colors.bodyFg,
  backgroundColor: colors.bodyBg,
  padding: 0,
  margin: 0,
  lineHeight: 1.5,
});

globalStyle('::selection', {
  color: '#134e4a',
  backgroundColor: '#5eead4',
});

globalStyle('::-moz-selection', {
  color: '#134e4a',
  backgroundColor: '#5eead4',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('strong, b', {
  fontWeight: 500,
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  marginBlock: 0,
});

globalStyle('ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});
