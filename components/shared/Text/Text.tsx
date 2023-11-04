import clsx from 'clsx';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';
import type { fontSize } from 'styles/utils';
import { textRecipe } from './Text.css';

const DEFAULT_ELEMENT_TYPE = 'p';

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> &
    PolymorphicAsProp<E> & {
      fontWeight?: 400 | 500 | 600 | 700;
      isUpperCase?: boolean;
      appearance?: 'muted' | 'white';
      size?: keyof typeof fontSize;
    }
>;

export type TextProps<E extends ElementType = typeof DEFAULT_ELEMENT_TYPE> =
  PolymorphicProps<E>;

function Text<E extends ElementType = typeof DEFAULT_ELEMENT_TYPE>({
  appearance = 'muted',
  as,
  children,
  className,
  fontWeight = 400,
  isUpperCase,
  size,
  ...restProps
}: TextProps<E>) {
  const Component = as ?? DEFAULT_ELEMENT_TYPE;

  return (
    <Component
      className={clsx(
        textRecipe({
          appearance,
          isUpperCase,
          size,
          fontWeight,
        }),
        className,
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Text;
