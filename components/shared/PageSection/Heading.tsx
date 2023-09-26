import { css } from '@emotion/react';
import Text from '../Text/Text';

const headingCss = css`
  letter-spacing: 0.1rem;
  margin-bottom: 2.25rem;
`;

export function Heading({ children, appearance = 'primary' }) {
  return (
    <Text
      appearance="white"
      as="h3"
      css={headingCss}
      isUpperCase
      size="sm"
      fontWeight={600}
    >
      {children}
    </Text>
  );
}
