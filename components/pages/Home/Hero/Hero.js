import { css } from '@emotion/react';
import Text from 'components/shared/Text/Text';
import { colors } from 'styles/utils';

const subtitleCss = css`
  margin-block: 16px 20px;
`;

const descriptionCss = css`
  max-width: 20rem;
`;

export function Hero() {
  return (
    <section>
      <Text appearance="white" as="h1" fontWeight={700} size="xl">
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
