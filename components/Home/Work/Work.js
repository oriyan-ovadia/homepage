import { css } from '@emotion/react';
import Container from 'components/shared/Container/Container';
import Heading from 'components/shared/Heading/Heading';
import Period from 'components/shared/Period/Period';
import SectionWaveIcon from 'components/shared/SectionWaveIcon/SectionWaveIcon';
import Text from 'components/shared/Text/Text';
import { colors, mediaDown, screenSize, viewport } from 'styles/utils';
import Workplace from './Workplace';

const workCss = css`
  padding-top: 9vh;
  padding-bottom: 20vh;
`;

const subTitleCss = css`
  margin-top: 90px;
  margin-bottom: 90px;
`;

const timelineCss = css`
  margin-top: 3em;

  ${viewport.mediumUp} {
    border-top: 1px solid ${colors.veryLightGray};
  }
`;

const timelineInnerCss = css`
  display: grid;
  grid-column-gap: 45px;

  ${mediaDown(screenSize.medium)} {
    grid-row-gap: 7vh;
  }

  ${viewport.mediumUp} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const topContainerCss = css`
  display: flex;
  align-items: flex-end;

  div {
    flex: 1;
  }
`;

const timelineContainer = css`
  ${mediaDown(screenSize.medium)} {
    padding-left: unset;
    padding-right: unset;
  }
`;

export default function Experience() {
  return (
    <section css={workCss}>
      <Container css={topContainerCss}>
        <div>
          <SectionWaveIcon color={colors.navy} />
          <Heading as="h2" variant="h1" upperCase>
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
        <Container css={timelineContainer}>
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
