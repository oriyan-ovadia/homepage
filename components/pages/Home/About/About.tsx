import React from 'react';
import { Anchor, PageSection, Text } from 'components/shared';
import { layoutCss, lightSaberCursorCss } from './About.css';

export function About() {
  return (
    <PageSection id="about">
      <PageSection.Heading>About</PageSection.Heading>
      <div className={layoutCss}>
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
          When I'm not at the computer, I usually have brunches, draw, make
          delicious homemade jams, play PlayStation and fight alongside the{' '}
          <span className={lightSaberCursorCss}>Jedi Order</span>.
        </Text>
      </div>
    </PageSection>
  );
}
