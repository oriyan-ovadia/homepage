import { css } from '@emotion/react';
import { colors, fontSize } from 'styles/utils';
import Text from '../Text/Text';

const appearanceCss = {
  ice: 'linear-gradient(124.31deg, rgb(70, 227, 183) 0.18%, rgb(82, 124, 172) 89.2%)',
  lime: 'linear-gradient( 90deg, rgb(255, 248, 85) 0.04%, rgb(70, 227, 183) 100.04% )',
  primary:
    'linear-gradient( 0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4) ), linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%)',
  purple:
    'linear-gradient(285.49deg, rgb(245, 55, 249) -14.61%, rgb(247, 190, 43) 106.06%)',
};

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