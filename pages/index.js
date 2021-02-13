import { Fragment } from 'react';
import AboutMe from 'components/Home/AboutMe/AboutMe';
import Experience from 'components/Home/Work/Work';
import Hero from 'components/Home/Hero/Hero';
import Skill from 'components/Home/Skill/Skill';
import Footer from 'components/shared/Footer/Footer';
import LaptopBanner from 'components/Home/LaptopBanner/LaptopBanner';
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
