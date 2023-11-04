import { db } from 'data/db';
import { Workplace } from './Workplace';
import { PageSection, Text } from 'components/shared';
import { ArrowRightIcon } from 'components/shared/icons/ArrowRightIcon';
import {
  anchorCss,
  anchorTextCss,
  arrowIconCss,
  layoutCss,
  viewFullCss,
} from './Experience.css';

export function Experience() {
  return (
    <PageSection id="experience">
      <PageSection.Heading>Experience</PageSection.Heading>
      <div className={layoutCss}>
        {db.experience.map(workplace => {
          return <Workplace key={workplace.id} workplace={workplace} />;
        })}
      </div>
      <Text className={viewFullCss} fontWeight={500}>
        <a
          className={anchorCss}
          href="Oriyan Ovadia - Resume.pdf"
          target="_blank"
        >
          <span className={anchorTextCss}>View Full Résumé</span>{' '}
          <ArrowRightIcon className={arrowIconCss} />
        </a>
      </Text>
    </PageSection>
  );
}
