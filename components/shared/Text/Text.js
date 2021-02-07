import { css } from '@emotion/react';
import {
  fontFamily,
  fontSize as fontSizeUtil,
  mobileOnly,
  tabletUp,
  viewport,
} from 'styles/utils';

/**
 * 1.4rem
 * 1.6rem
 * 2rem -> 1.6rem
 * 3.2rem Unique (hero)
 * 3.6rem
 * 3.8rem -> 2.8rem
 * 5rem
 * 13rem -> 10rem
 */
export const fontSize = {
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '3.2rem',
  xxl: '4.4rem',
};

const fontSizeCss = {
  xs: css`
    font-size: 1.4rem;
  `,
  base: css`
    font-size: 1.6rem;
  `,
  md: css`
    ${viewport.smallOnly} {
      font-size: 1.6rem;
    }

    ${tabletUp} {
      font-size: 2rem;
    }
  `,
  lg: css`
    line-height: 1.2;

    ${viewport.smallOnly} {
      font-size: 2.4rem;
    }

    ${viewport.smallUp} {
      font-size: 2.8rem;
    }

    ${viewport.largeUp} {
      font-size: 3.2rem;
    }

    ${viewport.xLargeUp} {
      font-size: 3.8rem;
    }
  `,
  xl: css`
    line-height: 1.2;

    ${mobileOnly} {
      font-size: 3.6rem;
    }

    ${tabletUp} {
      font-size: 5rem;
    }
  `,
  '2xl': css`
    line-height: 0.9;

    ${viewport.smallOnly} {
      font-size: 6rem;
    }

    ${viewport.smallUp} {
      font-size: 8rem;
    }

    ${viewport.large} {
      font-size: 10rem;
    }

    ${viewport.xLargeUp} {
      font-size: 13rem;
    }
  `,
};

const textCss = props => css`
  font-weight: ${props.fontWeight};
  color: ${props.color};
  line-height: ${props.lineHeight};
  margin-top: 0;
  margin-bottom: ${props.gutterBottom ? '2rem' : 0};
  text-align: ${props.textAlign};
  text-transform: ${props.upperCase && 'uppercase'};

  ${props.vertical &&
  css`
    transform: translate3d(0, 0, 0) rotate(-90deg);
  `}

  ${props.size
    ? fontSizeCss[props.size]
    : css`
        font-size: inherit;
      `};
`;

const fontTypeCss = {
  display: css`
    font-family: ${fontFamily.display};
  `,
  sans: css`
    font-family: ${fontFamily.sans};
  `,
  serif: css`
    font-family: ${fontFamily.serif};
  `,
};

function Text({
  as: Component = 'p',
  children,
  className,
  color = 'inherit',
  fontWeight = 300,
  fontType = 'display',
  gutterBottom,
  lineHeight = 1.7,
  size,
  textAlign,
  upperCase,
  vertical,
}) {
  return (
    <Component
      css={[
        textCss({
          color,
          fontWeight,
          gutterBottom,
          lineHeight,
          size,
          textAlign,
          upperCase,
          vertical,
        }),
        fontTypeCss[fontType],
      ]}
      className={className}
    >
      {children}
    </Component>
  );
}

export default Text;
