import React from 'react';
import { css } from '@emotion/react';
import { PageSection, Text } from 'components/shared';
import { db } from 'data/db';

const ulCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const liCss = css`
  background-image: radial-gradient(
    circle at 50% 100%,
    rgba(46, 54, 79, 0.4) 1%,
    rgba(46, 54, 79, 0.1) 100%
  );
  padding: 2rem;
  border: 1px solid #c7d0e533;
  border-radius: 0.5rem;

  q {
    quotes: '“' '”' '‘' '’';
  }
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`;

export function PeerFeedback() {
  return (
    <PageSection id="peer-feedback">
      <PageSection.Heading>Peer Feedback</PageSection.Heading>
      <ul css={ulCss}>
        {db.peerReviews.map(({ content }) => {
          return (
            <li css={liCss} key={content}>
              {/* @ts-ignore */}
              <Text as="quote" size="sm">
                {content}
              </Text>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
