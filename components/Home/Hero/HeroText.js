import { css } from '@emotion/react';
import Container from 'components/shared/Container/Container';
import Heading from 'components/shared/Heading/Heading';
import Text from 'components/shared/Text/Text';
import { colors, mobileOnly, tabletUp } from 'styles/utils';
import Hello from './Hello';

const heroTextCss = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;

  ${mobileOnly} {
    flex-direction: column-reverse;
    padding: 20vh 125px 20vh 22%;
  }

  ${tabletUp} {
    align-items: center;
  }
`;

const pulsingBorderCss = css`
  @keyframes pulsing {
    50% {
      opacity: 0;
    }
  }

  :after {
    content: '';
    width: 3px;
    height: 27px;
    top: 3px;
    left: 5px;
    position: relative;
    background: ${colors.black};
    display: inline-block;
    animation: pulsing 1s ease infinite;
  }
`;

const title2Css = css`
  margin-top: 30px;
  margin-bottom: 20px;

  ${pulsingBorderCss}
`;

const innerTextCss = css`
  max-width: 400px;
`;

export default function HeroText() {
  return (
    <Container css={heroTextCss}>
      <div css={innerTextCss}>
        <Heading color="white" variant="h2">
          Oriyan Ovadia.
        </Heading>
        <Heading css={title2Css} variant="h3">
          Front-end developer based in Tel Aviv
        </Heading>

        <Text color="white">oriyan.ovadia@gmail.com</Text>
      </div>
      <Hello />
    </Container>
  );
}
