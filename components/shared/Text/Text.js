import { css } from '@emotion/react';
import {
  colors,
  fontFamily,
  fontSize,
  mobileOnly,
  tabletUp,
  viewport,
} from 'styles/utils';

const lineHeight = {
  // sm: '1.25rem',
};

const color = {
  muted: colors.bodyFg,
  white: colors.white,
};

const textCss = props => css`
  color: ${color[props.appearance]};
  text-transform: ${props.isUpperCase && 'uppercase'};
  font-size: ${fontSize[props.size]};
  line-height: ${lineHeight[props.size]};
  font-weight: ${props.fontWeight};
`;

function Text({
  appearance = 'muted',
  as: Component = 'p',
  children,
  className,
  color = 'inherit',
  fontWeight = 400,
  fontType = 'display',
  gutterBottom,
  size,
  isUpperCase,
}) {
  return (
    <Component
      css={[
        textCss({
          appearance,
          color,
          fontWeight,
          isUpperCase,
          size,
        }),
      ]}
      className={className}
    >
      {children}
    </Component>
  );
}

export default Text;
