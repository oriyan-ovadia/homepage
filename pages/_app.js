import { Global } from '@emotion/react';
import { Fragment } from 'react';
import { globalCss } from 'styles/global';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'normalize.css';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/be-vietnam-pro';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource/lato';
import '@fontsource/lato/700.css';
import { LightInTheDarkCursor } from 'components/shared/LightInTheDarkCursor/LightInTheDarkCursor';

function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <LightInTheDarkCursor />
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default App;
