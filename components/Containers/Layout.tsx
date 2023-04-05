import React from 'react';
import Head from 'next/head';
import { Footer, Header } from '../Navigation';

const Layout = ({ children }: React.PropsWithChildren<any>) => (
  <>
    <Head>
      <title>Zins-runter</title>
      <meta name='description' content='' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' content='' key='title' />
      <meta property='og:image' content='/logo.png' />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
