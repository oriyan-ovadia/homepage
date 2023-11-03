import { Fragment } from 'react';
import { Global } from '@emotion/react';
import { globalCss } from 'styles/global';
import { LightInTheDarkCursor } from 'components/shared';
import Head from 'next/head';
import 'node_modules/modern-normalize/modern-normalize.css';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <LightInTheDarkCursor />
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
