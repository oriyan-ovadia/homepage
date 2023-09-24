import { css } from '@emotion/react';
import { PageSection } from 'components/shared/PageSection/PageSection';
import { SectionHeading } from 'components/shared/SectionHeading/SectionHeading';
import Text from 'components/shared/Text/Text';
import { colors } from 'styles/utils';
import { useRef } from 'react';
import Anchor from 'components/shared/Anchor/Anchor';

const layoutCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export function About() {
  return (
    <PageSection id="about">
      <PageSection.Heading>About</PageSection.Heading>
      <div css={layoutCss}>
        <Text>
          I'm currently a Frontend Engineer at{' '}
          <Anchor href="https://www.lemonade.com/">Lemonade</Anchor>,
          collaborating with an amazing team to craft web experiences.
        </Text>
        <Text>
          I enjoy bridging the gap between engineering and design — combining my
          technical knowledge with my keen eye for design to create a beautiful
          product. My goal is to always build applications that are scalable and
          efficient under the hood while providing engaging, pixel-perfect user
          experiences.
        </Text>
        <Text>
          When I'm not at the computer, I usually do brunches, draw, play
          PlayStation, and make a delicious homemade jam.
        </Text>
      </div>
    </PageSection>
  );
}
