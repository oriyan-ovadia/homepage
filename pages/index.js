import { Fragment } from 'react';
import { About } from 'components/pages/Home/About/About';
import { Experience } from 'components/pages/Home/Experience/Experience';
import { Hero } from 'components/pages/Home/Hero/Hero';
import { Footer } from 'components/pages/Home/Footer/Footer';
import LaptopBanner from 'components/pages/Home/LaptopBanner/LaptopBanner';
import Head from 'next/head';
import Container from 'components/shared/Container/Container';
import { css } from '@emotion/react';
import { SidebarMenu } from 'components/pages/Home/SidebarMenu/SidebarMenu';
import { Extra } from 'components/pages/Home/Extra/Extra';
import { Testimonials } from 'components/pages/Home/Testimonials/Testimonials';

const layoutCss = css`
  display: flex;
  gap: 1rem;
`;

const mainCss = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 6rem;
  flex-direction: column;
  width: 50%;

  /* row-gap: 7rem; */
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
  padding-block: 6rem;
  flex-direction: column;
  width: 50%;
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
`;

export default function Home() {
  return (
    <SidebarMenu.Provider>
      <Head>
        <title>Oriyan Ovadia | Senior Frontend Engineer</title>
      </Head>
      <Container>
        <div css={layoutCss}>
          <header css={headerCss}>
            <div>
              <Hero />
              <SidebarMenu.Root />
            </div>
          </header>
          <main css={mainCss}>
            <About />
            <Experience />
            <Testimonials />
            <Footer />
          </main>
        </div>
      </Container>
    </SidebarMenu.Provider>
  );
}
