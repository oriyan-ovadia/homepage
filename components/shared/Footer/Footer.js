import { css } from '@emotion/react';
import Container from '../Container/Container';
import Text from '../Text/Text';
import { colors, viewport } from 'styles/utils';
import Anchor from '../Anchor/Anchor';
import HeartIcon from '../icons/HeartIcon';

const footerCss = css`
  background-color: white;
  min-height: 12vh;
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const containerCss = css`
  ${viewport.smallOnly} {
    display: grid;
    grid-row-gap: 7px;
  }

  ${viewport.smallUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const thankYouCss = css`
  display: flex;
  align-items: center;
`;

const heartCss = css`
  width: 1.6rem;
  color: ${colors.red};
  margin-left: 0.5em;
`;

export default function Footer() {
  return (
    <footer css={footerCss}>
      <Container css={containerCss}>
        <div>
          <Text css={thankYouCss} fontType="serif" size="xs">
            <span>Thank you for scrolling all this way.</span>{' '}
            <HeartIcon css={heartCss} />
          </Text>
        </div>
        <Text size="xs">
          Code available on{' '}
          <Anchor href="https://github.com/OriyanJ/homepage">GitHub</Anchor>
        </Text>
      </Container>
    </footer>
  );
}
