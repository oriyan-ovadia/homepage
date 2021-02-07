import { Global } from '@emotion/react';
import { Fragment } from 'react';
import { globalCss } from 'styles/global';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link
          rel="preload"
          href="/fonts/Montserrat-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin=""
        ></link>
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin=""
        ></link>
      </Head>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
