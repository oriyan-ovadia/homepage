import { css } from '@emotion/react';
import Text from 'components/shared/Text/Text';
import { colors, viewport } from 'styles/utils';

const h1Css = css`
  letter-spacing: -0.025em;

  ${viewport.small} {
    font-size: 2.25rem;
  }
`;

const subtitleCss = css`
  margin-block: 16px 20px;
`;

const descriptionCss = css`
  ${viewport.large} {
    max-width: 20rem;
  }
`;

export function Hero() {
  return (
    <section>
      <Text appearance="white" as="h1" css={h1Css} fontWeight={600} size="xl">
        Oriyan Ovadia
      </Text>
      <Text appearance="white" css={subtitleCss} fontWeight={500} size="lg">
        Senior Frontend Engineer
      </Text>
      <Text css={descriptionCss}>
        I build accessible, inclusive products and digital experiences for the
        web.
      </Text>
    </section>
  );
}
