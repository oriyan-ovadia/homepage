import { css } from '@emotion/react';
import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  forwardRef,
} from 'react';
import {
  colors,
  fontFamily,
  fontSize,
  mobileOnly,
  tabletUp,
  viewport,
} from 'styles/utils';

const DEFAULT_ELEMENT_TYPE = 'p';

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

// Add more props by using & { propName: propType }
// For example { removeMargins?: boolean }
type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> &
    PolymorphicAsProp<E> & {
      fontWeight?: CSSProperties['fontWeight'];
      isUpperCase?: boolean;
      appearance?: 'muted' | 'white';
      size?: keyof typeof fontSize;
    }
>;

export type TextProps<E extends ElementType = typeof DEFAULT_ELEMENT_TYPE> =
  PolymorphicProps<E>;

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

function Text<E extends ElementType = typeof DEFAULT_ELEMENT_TYPE>({
  appearance = 'muted',
  as,
  children,
  className,
  color = 'inherit',
  fontWeight = 400,
  size,
  isUpperCase,
}: TextProps<E>) {
  const Component = as ?? DEFAULT_ELEMENT_TYPE;

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
