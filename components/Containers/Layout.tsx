import React from 'react';
import Head from 'next/head';

const Layout = ({ children }: React.PropsWithChildren<any>) => (
  <>
    <Head>
      <title>Zinsrunter</title>
      <meta name='description' content='' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' content='' key='title' />
    </Head>
    {children}
  </>
);

export default Layout;
