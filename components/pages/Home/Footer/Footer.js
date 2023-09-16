import { css } from '@emotion/react';
import Anchor from 'components/shared/Anchor/Anchor';
import { PageSection } from 'components/shared/PageSection/PageSection';
import Text from 'components/shared/Text/Text';
import HeartIcon from 'components/shared/icons/HeartIcon';
import { colors } from 'styles/utils';

const footerCss = css`
  max-width: 28rem;

  > :not(a) {
    color: #64748b;
  }
`;

const heartCss = css`
  width: 12px;
  color: ${colors.primaryLight};
  margin-inline: 6px 3px;
  opacity: 0.8;
`;

export function Footer() {
  return (
    <PageSection css={footerCss} id="footer">
      <Text size="sm">
        Thank you for scrolling all this way <HeartIcon css={heartCss} /> Built
        with <Anchor href="https://nextjs.org/">Next.js</Anchor> and{' '}
        <Anchor href="https://emotion.sh/docs/introduction">Emotion CSS</Anchor>
        , deployed with <Anchor href="https://vercel.com/">Vercel</Anchor>. Code
        is available on{' '}
        <Anchor href="https://github.com/OriyanJ/homepage">GitHub</Anchor>.
      </Text>
    </PageSection>
  );
}
