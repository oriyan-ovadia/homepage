import { db } from 'data/db';
import { Workplace } from './Workplace';
import { css } from '@emotion/react';
import { PageSection } from 'components/shared/PageSection/PageSection';
import { useRef } from 'react';
import { useIsViewed } from 'hooks/useIsViewed';
import { useSidebarMenu } from 'components/pages/Home/SidebarMenu/useSidebarMenu';
import { useSidebarMenuIndication } from '../SidebarMenu/useSidebarMenuIndication';
import Text from 'components/shared/Text/Text';
import { ArrowRightIcon } from 'components/shared/icons/ArrowRightIcon';
import { colors } from 'styles/utils';
import { toRem } from 'utils/utils';

const layoutCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

const viewFullCss = css`
  color: ${colors.white};
  margin-top: 4rem;

  a {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  .anchor-text {
    padding-bottom: 2px;
    transition: all 200ms;
  }

  &:hover {
    .anchor-text {
      box-shadow: 0px -1px 0px 0px ${colors.primaryLight} inset;
    }

    .arrow-icon {
      transform: translateX(${toRem(8)}); //
    }
  }
`;

const arrowIconCss = css`
  width: 16px !important;
  height: 16px !important;
  transition: all 200ms;
`;

export function Experience() {
  const elementRef = useRef(null);

  useSidebarMenuIndication(elementRef);

  return (
    <PageSection id="experience" ref={elementRef}>
      <PageSection.Heading appearance="purple">Experience</PageSection.Heading>
      <div css={layoutCss}>
        {db.experience.map(workplace => {
          return <Workplace workplace={workplace} />;
        })}
      </div>
      <Text css={viewFullCss}>
        <a href="/">
          <span className="anchor-text">View Full Résumé</span>{' '}
          <ArrowRightIcon className="arrow-icon" css={arrowIconCss} />
        </a>
      </Text>
    </PageSection>
  );
}
