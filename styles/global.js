import { css } from '@emotion/react';

import { fontFacesCss } from './fontFaces';
import { colors } from './utils';

export const globalCss = css`
  :root {
    --black: #1c1b20;
    --gray: #606060;
    --navy: #414a6b;
    --red: #ff5851;

    /* Light colors*/
    --light-gray: #f8f8f8;
    --very-light-gray: #e0e0e0;

    font-size: ${(10 / 16) * 100}%;
  }

  ${fontFacesCss}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, system-ui;
    background-color: ${colors.lightGray};
  }

  body {
    font-size: 1.8rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  strong,
  b {
    font-weight: 500;
  }
`;
