import { Fragment } from 'react';
import { LightInTheDarkCursor } from 'components/shared';
import Head from 'next/head';
import 'node_modules/modern-normalize/modern-normalize.css';
import type { AppProps } from 'next/app';
import '../styles/global.css.ts';

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <LightInTheDarkCursor />
      <Head>
        <meta content="width=device-width" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
