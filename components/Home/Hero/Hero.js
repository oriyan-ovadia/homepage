import { css } from '@emotion/react';
import RedRibbon from './RedRibbon';
import HeroText from './HeroText';

const heroCss = css`
  height: 100vh;
  width: 100%;
`;

export default function Hero() {
  return (
    <section css={heroCss}>
      <RedRibbon />
      <HeroText />
    </section>
  );
}
