import { css } from '@emotion/react';
import Container from 'components/shared/Container/Container';
import Heading from 'components/shared/Heading/Heading';
import Text from 'components/shared/Text/Text';
import { viewport } from 'styles/utils';
import Ribbon from './Ribbon';

const headerCss = css`
  height: 100vh;
  width: 100%;
  font-size: 90px;
`;

const containerCss = css`
  position: relative;
  z-index: 1;
`;

const heroTextCss = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;

  ${viewport.smallOnly} {
    flex-direction: column-reverse;
    padding: 20vh 125px 20vh 22%;
  }

  ${viewport.mediumUp} {
    align-items: center;
  }
`;

export default function Hero() {
  return (
    <header css={headerCss}>
      <Ribbon />
      <Container css={heroTextCss}>
        <Heading variant="h1" upperCase>
          Ab
          <br />
          out.
        </Heading>
        <div></div>
      </Container>
    </header>
  );
}
