import { css } from '@emotion/react';

/**
 * woff2 - Super Modern Browsers
 * woff - Modern Browsers
 * ttf - Legacy Safari, Android, iOS (optional at this point)
 *
 * References:
 * - https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d
 * - https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization
 */
export const fontFacesCss = css`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: local('Lato-Regular'), url('/fonts/Lato-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Libre-Baskerville';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: local('Libre-Baskerville'),
      url('/fonts/Libre-Baskerville.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Montserrat-Regular'),
      url('/fonts/Montserrat-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: local('Montserrat-Bold'),
      url('/fonts/Montserrat-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-display: swap;
    font-weight: 900;
    src: local('Gilroy-ExtraBold'),
      url('/fonts/Gilroy-ExtraBold.woff2') format('woff2');
  }
`;
