import { css } from '@emotion/react';
import Container from 'components/shared/Container/Container';
import Heading from 'components/shared/Heading/Heading';
import WavesIcon from 'components/shared/icons/WavesIcon';
import Period from 'components/shared/Period/Period';
import SectionWaveIcon from 'components/shared/SectionWaveIcon/SectionWaveIcon';
import Text from 'components/shared/Text/Text';
import { colors } from 'styles/utils';
import Workplace from './Workplace';

const aboutMeCss = css`
  padding-bottom: 20vh;
`;

const subTitleCss = css`
  margin-top: 90px;
  margin-bottom: 90px;
`;

const wavesIconCss = css`
  width: 80px;
  color: ${colors.navy};
  margin-bottom: 40px;
`;

const timelineCss = css`
  margin-top: 3em;
  border-top: 1px solid ${colors.veryLightGray};
`;

const timelineInnerCss = css`
  display: grid;
  grid-column-gap: 45px;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  top: -41px;
`;

const moodImageCss = css`
  background-image: url(/media/laptop-bg-min.jpeg);
  height: 200px;
`;

const topContainerCss = css`
  display: flex;
  align-items: flex-end;
  div {
    flex: 1;
  }
`;

export default function Experience() {
  return (
    <section css={aboutMeCss}>
      <Container css={topContainerCss}>
        <div>
          <SectionWaveIcon color={colors.navy} />
          <Heading variant="h1" upperCase>
            WO
            <br />
            RK.
          </Heading>
        </div>

        {/* Inner */}
        <div>
          <Heading variant="h3">
            <Text as="span" fontType="serif" size="lg">
              Experienced,
            </Text>{' '}
            modern, and passionate
            <Period color={colors.navy} />
          </Heading>
        </div>
      </Container>
      <Container>
        <Text css={subTitleCss} size="md" fontType="serif">
          Over 6 years of experience in developing web applications with a deep
          understanding of the modern web and surrounding technologies.
        </Text>
      </Container>
      {/* Timeline */}
      <div css={timelineCss}>
        <Container>
          <div css={timelineInnerCss}>
            <Workplace companyName="Healthy.io" year="2019">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, ipsum sed luctus ultricies, tortor nibh fermentum enim,
              sed ultrices neque mauris eu sem. Aliquam condimentum dui sed urna
              sollicitudin, eget porta nisi efficitur. Donec eleifend dui quis
              ullamcorper aliquam. Nulla turpis erat, mollis ac cursus vel,
              feugiat vel est. Vivamus ac tincidunt sapien. Proin fermentum at
              velit et sagittis. Donec ut massa semper, rhoncus nisl sed,
              gravida sapien. Suspendisse eros ante, facilisis eu dui ac,
              fermentum tincidunt nibh.
            </Workplace>
            <Workplace companyName="NHT" year="2018">
              Working with Angaulr, PHP, TypeScript and MySQL. Creating a SaaS
              while using RxJS and NgRx for state management with a Decoupling
              Design Pattern in mind. Extensive experience in creating custom
              Directives, Components, Pipes and RxJS Operators. Working in an
              agile development process. Consumed around 500+ cups of coffee.
            </Workplace>
            <Workplace companyName="Caspi Aviation" year="2015">
              Gained my experience using vanilla JavaScript, jQuery, PHP, HTML5
              and CSS3. Focused on improving performance, increasing efficiency
              and reducing website run-time. Working closely with SEO experts
              and learning the latest social trends in SEO. Compliance with
              regulations of Web Content Accessibility Guidelines (WCAG).
              Developing and working with E-Commerce systems.
            </Workplace>
          </div>
        </Container>
      </div>
    </section>
  );
}
