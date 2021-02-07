import { Fragment } from 'react';
import AboutMe from 'components/Home/AboutMe/AboutMe';
import Experience from 'components/Home/Work/Work';
import Hero from 'components/Home/Hero/Hero';
import Skill from 'components/Home/Skill/Skill';
import Footer from 'components/shared/Footer/Footer';
import ParallaxLaptopBanner from 'components/Home/ParallaxLaptopBanner/ParallaxLaptopBanner';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <Skill />
      <ParallaxLaptopBanner />
      <Experience />
      <Footer />
    </Fragment>
  );
}
