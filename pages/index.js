import React, { Fragment } from 'react';
import { About } from 'components/pages/Home/About/About';
import { Experience } from 'components/pages/Home/Experience/Experience';
import { Hero } from 'components/pages/Home/Hero/Hero';
import { Footer } from 'components/pages/Home/Footer/Footer';
import Head from 'next/head';
import Container from 'components/shared/Container/Container';
import { css } from '@emotion/react';
import { SidebarMenu } from 'components/pages/Home/SidebarMenu/SidebarMenu';
import { Extra } from 'components/pages/Home/Extra/Extra';
import {
  PeerFeedback,
  Testimonials,
} from 'components/pages/Home/PeerFeedback/PeerFeedback';
import { Social } from 'components/pages/Home/Social/Social';
import Anchor from 'components/shared/Anchor/Anchor';
import { viewport } from 'styles/utils';

const containerCss = css`
  ${viewport.small} {
    padding-block: 3rem;
  }
`;

const layoutCss = css`
  gap: 1rem;

  ${viewport.large} {
    display: flex;
  }
`;

const mainCss = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${viewport.large} {
    width: 50%;
    padding-bottom: 6rem;
  }

  /* row-gap: 7rem; */
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;

  flex-direction: column;

  ${viewport.large} {
    padding-block: 6rem;
    width: 50%;
    position: sticky;
    top: 0;
    left: 0;
    height: 100%;
  }
`;

export default function Home() {
  return (
    <SidebarMenu.Provider>
      <Head>
        <title>Oriyan Ovadia | Senior Frontend Engineer</title>
      </Head>
      <Container css={containerCss}>
        <div css={layoutCss}>
          <header css={headerCss}>
            <div>
              <Hero />
              <Social />
              <SidebarMenu.Root />
            </div>
          </header>
          <main css={mainCss}>
            <About />
            <Experience />
            <PeerFeedback />
            <Footer />
          </main>
        </div>
      </Container>
    </SidebarMenu.Provider>
  );
}
