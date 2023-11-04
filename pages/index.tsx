import { About } from 'components/pages/Home/About/About';
import { Experience } from 'components/pages/Home/Experience/Experience';
import { Hero } from 'components/pages/Home/Hero/Hero';
import { Footer } from 'components/pages/Home/Footer/Footer';
import Head from 'next/head';
import Container from 'components/shared/Container/Container';
import { SidebarMenu } from 'components/pages/Home/SidebarMenu/SidebarMenu';
import { PeerFeedback } from 'components/pages/Home/PeerFeedback/PeerFeedback';
import { Social } from 'components/pages/Home/Social/Social';
import {
  containerCss,
  headerCss,
  layoutCss,
  mainCss,
} from '../components/pages/Home/Home/index.css';

export default function Home() {
  return (
    <SidebarMenu.Provider>
      <Head>
        <title>Oriyan Ovadia | Senior Frontend Engineer</title>
      </Head>
      <Container className={containerCss}>
        <div className={layoutCss}>
          <header className={headerCss}>
            <div>
              <Hero />
              <Social />
              <SidebarMenu.Root />
            </div>
          </header>
          <main className={mainCss}>
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
