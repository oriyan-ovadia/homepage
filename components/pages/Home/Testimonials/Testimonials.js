import { css } from '@emotion/react';
import { PageSection } from 'components/shared/PageSection/PageSection';
import { SectionHeading } from 'components/shared/SectionHeading/SectionHeading';
import Text from 'components/shared/Text/Text';
// import { Tooltip } from 'components/shared/Tooltip/Tooltip';
import { db } from 'data/db';

const exCss = css``;

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

export function Testimonials() {
  return (
    <PageSection id="testimonials">
      <PageSection.Heading appearance="primary">
        Testimonials
      </PageSection.Heading>
      {/* <Tooltip content="asdasdasdasd">What's this?</Tooltip> */}
      <ul css={ulCss}>
        {db.testimonials.map(({ content }) => {
          return (
            <li css={liCss}>
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
