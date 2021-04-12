import { css } from '@emotion/react';
import Text from 'components/shared/Text/Text';
import { fontFamily } from 'styles/utils';

const headingSize = {
  h1: '2xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
};

const headingCss = props => css`
  ${props.font === 'primary' &&
  css`
    font-family: ${fontFamily.displayPrimary};
  `}
  ${props.font === 'secondary' &&
  css`
    font-family: ${fontFamily.displaySecondary};
  `}
`;

function Heading({ children, font = 'primary', variant = 'h3', ...restProps }) {
  return (
    <Text
      css={headingCss({ font })}
      fontWeight={900}
      size={headingSize[variant]}
      {...restProps}
    >
      {children}
    </Text>
  );
}

export default Heading;
