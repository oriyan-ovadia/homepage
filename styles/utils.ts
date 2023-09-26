export const CONTAINER_PADDING_MOBILE = '35px';
export const CONTAINER_PADDING_DESKTOP = '40px';

export const CONTAINER_WIDTH = '1020px';

export const colors = {
  black: 'var(--black)',
  gray: 'var(--gray)',
  navy: 'var(--navy)',
  red: 'var(--red)',
  yellow: 'var(--yellow)',

  /* Light colors */
  lightGray: 'var(--light-gray)',
  veryLightGray: 'var(--very-light-gray)',

  bodyBg: '#0f172a',
  bodyFg: '#94a3b8',
  white: '#e2e8f0',
  primaryLight: '#5eead4',
  primaryDark: 'rgb(45 212 191 / 10%)',
};

export const fontSize = {
  /** 12px */
  xs: '.75rem',
  /** 14px */
  sm: '.875rem',
  /** 16px */
  md: '1rem',
  /** 20px */
  lg: '1.25rem',
  /** 48px */
  xl: '3rem',
};

export const screenSize = {
  small: 767,
  smallPx: '767px',
  medium: 992,
  mediumPx: '992px',
  large: 1200,
  largePx: '1200px',
  xLarge: 1600,
  xLargePx: '1600px',
};

export const fontFamily = {
  displayPrimary: 'Inter',
  displaySecondary: 'Inter',
  sans: 'Lato',
  primary: 'Inter, system-ui',
  serif: 'Libre-Baskerville',
};

/**
 * Screen breakpoints based on "popularity" guesstimates and statistics derived
 * from annualized monthly Google queries and some fuzzy math.
 *
 * @see
 * [Screen Size.es](http://screensiz.es/) (Using "Device width" for media-queries)
 */
export const screenSizes = {
  // Smallest mobile supported
  mobile: 360,
  tablet: 768,
  desktop: 1280,
};

export const mediaBetween = (minScreenSize, maxScreenSize) =>
  `@media (min-width: ${minScreenSize}px) and (max-width: ${maxScreenSize}px)`;

export const mediaDown = screenSize =>
  `@media (max-width: ${screenSize - 1}px)`;

export const mobileOnly = `@media (max-width: ${screenSizes.tablet - 1}px)`;

export const tabletOnly = mediaBetween(
  screenSizes.tablet,
  screenSizes.desktop - 1,
);

export const mediaUp = viewportSize => `@media (min-width: ${viewportSize}px)`;

export const tabletUp = `@media (min-width: ${screenSizes.tablet}px)`;

export const desktopUp = `@media (min-width: ${screenSizes.desktop}px)`;

export const viewport = {
  small: mediaDown(990),
  large: mediaUp(990),
  // smallOnly: mediaDown(screenSize.small),
  // smallUp: mediaUp(screenSize.small),
  // mediumOnly: mediaBetween(screenSize.medium, screenSize.xLarge - 1),
  // mediumUp: mediaUp(screenSize.medium),
  // largeOnly: '',
  // largeUp: '',
  // largeUp: mediaUp(screenSize.large),
  // xLargeUp: mediaUp(screenSize.xLarge),
};
