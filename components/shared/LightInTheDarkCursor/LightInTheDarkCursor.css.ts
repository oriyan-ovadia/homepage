import { style } from '@vanilla-extract/css';

export const lightInTheDarkCursorCss = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  background:
    'radial-gradient(600px at var(--position-x) var(--position-y), rgba(29, 78, 216, 0.15), transparent 80%)',
});
