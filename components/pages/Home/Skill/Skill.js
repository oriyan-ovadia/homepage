import { css } from '@emotion/react';
import Container from 'components/shared/Container/Container';
import Heading from 'components/shared/Heading/Heading';
import Period from 'components/shared/Period/Period';
import SectionWaveIcon from 'components/shared/SectionWaveIcon/SectionWaveIcon';
import Text from 'components/shared/Text/Text';
import { colors } from 'styles/utils';
import Buzzwords from './Buzzwords';

const aboutMeCss = css`
  padding-bottom: 12vh;
`;

const sectionTitleCss = css`
  margin-bottom: 100px;
`;

const innerTextCss = css`
  max-width: 300px;
`;

export default function Skill() {
  return (
    <section css={aboutMeCss}>
      <Container>
        <SectionWaveIcon color={colors.navy} />

        <Heading
          as="h2"
          css={sectionTitleCss}
          color={colors.navy}
          variant="h1"
          upperCase
        >
          SK
          <br />
          ILL.
        </Heading>

        <Buzzwords />
      </Container>
    </section>
  );
}
