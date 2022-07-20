import { Fragment } from 'react';
import AboutMe from 'components/pages/Home/AboutMe/AboutMe';
import Experience from 'components/pages/Home/Work/Work';
import Hero from 'components/pages/Home/Hero/Hero';
import Skill from 'components/pages/Home/Skill/Skill';
import Footer from 'components/shared/Footer/Footer';
import LaptopBanner from 'components/pages/Home/LaptopBanner/LaptopBanner';
import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Oriyan Ovadia | Frontend developer</title>
      </Head>
      <Hero />
      <AboutMe />
      <Skill />
      <LaptopBanner />
      <Experience />
      <Footer />
    </Fragment>
  );
}
