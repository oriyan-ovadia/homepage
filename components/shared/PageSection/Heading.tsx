import Text from '../Text/Text';
import { headingCss } from './Heading.css';

export function Heading({ children, appearance = 'primary' }) {
  return (
    <Text
      appearance="white"
      as="h3"
      className={headingCss}
      isUpperCase
      size="sm"
      fontWeight={600}
    >
      {children}
    </Text>
  );
}
