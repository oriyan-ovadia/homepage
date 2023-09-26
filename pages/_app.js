import { Fragment } from 'react';
import { Global } from '@emotion/react';
import { globalCss } from 'styles/global';
import Head from 'next/head';
import 'normalize.css';

import { LightInTheDarkCursor } from 'components/shared/LightInTheDarkCursor/LightInTheDarkCursor';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <LightInTheDarkCursor />
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
