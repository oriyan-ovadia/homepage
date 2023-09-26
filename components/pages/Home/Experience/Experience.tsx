import React from 'react';
import { db } from 'data/db';
import { Workplace } from './Workplace';
import { css } from '@emotion/react';
import { PageSection } from '@/components/shared/PageSection/PageSection';
import Text from '@/components/shared/Text/Text';
import { ArrowRightIcon } from '@/components/shared/icons/ArrowRightIcon';
import { colors } from 'styles/utils';
import { toRem } from 'utils';

const layoutCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

const viewFullCss = css`
  color: ${colors.white};
  margin-top: 4rem;
  display: inline-block;

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
  return (
    <PageSection id="experience">
      <PageSection.Heading>Experience</PageSection.Heading>
      <div css={layoutCss}>
        {db.experience.map(workplace => {
          return <Workplace key={workplace.id} workplace={workplace} />;
        })}
      </div>
      <Text css={viewFullCss} fontWeight={500}>
        <a href="Oriyan Ovadia - Resume.pdf" target="_blank">
          <span className="anchor-text">View Full Résumé</span>{' '}
          <ArrowRightIcon className="arrow-icon" css={arrowIconCss} />
        </a>
      </Text>
    </PageSection>
  );
}
