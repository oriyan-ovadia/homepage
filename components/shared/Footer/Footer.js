import { css } from '@emotion/react';
import Container from '../Container/Container';
import HeartIcon from 'components/shared/icons/HeartIcon';
import Text from '../Text/Text';
import { colors } from 'styles/utils';

const footerCss = css`
  background-color: white;
  height: 12vh;
  display: flex;
  align-items: center;
`;

const heartCss = css`
  width: 1.4rem;
  color: ${colors.red};
`;

export default function Footer() {
  return (
    <footer css={footerCss}>
      <Container>
        <Text size="xs" fontType="serif">
          Thank you for scrolling all this way.
        </Text>
        <Text size="xs">
          Made with <HeartIcon css={heartCss} />
        </Text>
      </Container>
    </footer>
  );
}
