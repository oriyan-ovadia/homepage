import { css } from '@emotion/react';
import { PageSection } from 'components/shared/PageSection/PageSection';
import { SectionHeading } from 'components/shared/SectionHeading/SectionHeading';
import Text from 'components/shared/Text/Text';
import { colors } from 'styles/utils';
import { useSidebarMenuIndication } from '../SidebarMenu/useSidebarMenuIndication';
import { useRef } from 'react';

const layoutCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export function About() {
  const elementRef = useRef(null);

  useSidebarMenuIndication(elementRef);

  return (
    <PageSection id="about" ref={elementRef}>
      <PageSection.Heading appearance="lime">About</PageSection.Heading>
      <div css={layoutCss}>
        <Text>Highly motivated with great work ethic.</Text>
        <Text>
          Responsible, with quick perception and systemic vision. Able to work
          in a team and cope with difficulties and a tight schedule. Very
          organized and able to adapt to any work environment. With the love for
          coding, I'm interested in developing and enriching user experience
          while using new and challenging technologies.
        </Text>
        <Text>
          When I'm not at the computer, I usually do brunches, draw, play
          PlayStation, and make homemade popsicles.
        </Text>
      </div>
    </PageSection>
  );
}
