export const CONTAINER_PADDING_MOBILE = '35px';
export const CONTAINER_PADDING_DESKTOP = '40px';

export const CONTAINER_WIDTH = '1020px';

export const colors = {
  black: 'var(--black)',
  gray: 'var(--gray)',
  navy: 'var(--navy)',
  red: 'var(--red)',

  /* Light colors */
  lightGray: 'var(--light-gray)',
  veryLightGray: 'var(--very-light-gray)',
};

export const fontSize = {
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '4.2rem',
  xxl: '5.4rem',
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
  display: 'Montserrat',
  sans: 'system-ui',
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
  smallOnly: mediaDown(screenSize.small),
  smallUp: mediaUp(screenSize.small),
  mediumOnly: mediaBetween(screenSize.medium, screenSize.xLarge - 1),
  mediumUp: mediaUp(screenSize.medium),
  largeOnly: '',
  largeUp: '',
  largeUp: mediaUp(screenSize.large),
  xLargeUp: mediaUp(screenSize.xLarge),
};
