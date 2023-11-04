import type { TextProps } from '../Text/Text';
import Text from '../Text/Text';
import { headingCss } from './Heading.css';

export interface PageSection_HeadingProps extends TextProps {}

export function Heading({ children, ...restProps }: PageSection_HeadingProps) {
  return (
    <Text
      appearance="white"
      as="h3"
      className={headingCss}
      isUpperCase
      size="sm"
      fontWeight={600}
      {...restProps}
    >
      {children}
    </Text>
  );
}
