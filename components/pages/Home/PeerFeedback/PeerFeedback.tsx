import { PageSection, Text } from 'components/shared';
import { db } from 'data/db';
import { liCss, ulCss } from './PeerFeedbacl.css';

export function PeerFeedback() {
  return (
    <PageSection id="peer-feedback">
      <PageSection.Heading>Peer Feedback</PageSection.Heading>
      <ul className={ulCss}>
        {db.peerReviews.map(({ content }) => {
          return (
            <li className={liCss} key={content}>
              <Text as="q" size="sm">
                {content}
              </Text>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
