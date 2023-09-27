import React from 'react';
import { css } from '@emotion/react';
import { Anchor, PageSection, Text } from 'components/shared';
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
  margin-inline: 4px 3px;
  opacity: 0.8;
`;

export function Footer() {
  return (
    <PageSection css={footerCss} id="footer">
      <Text size="sm">
        Thank you for scrolling all this way <HeartIcon css={heartCss} /> Built
        with <Anchor href="https://nextjs.org/">Next.js</Anchor> and{' '}
        <Anchor href="https://vanilla-extract.style/">
          Vanilla&nbsp;Extract
        </Anchor>
        , deployed with <Anchor href="https://vercel.com/">Vercel</Anchor>. Code
        is available on{' '}
        <Anchor href="https://github.com/OriyanJ/homepage">GitHub</Anchor>.
      </Text>
    </PageSection>
  );
}
