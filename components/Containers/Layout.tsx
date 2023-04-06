import React from 'react';
import Head from 'next/head';
import { Footer, Header } from '../Navigation';

const Layout = ({ children }: React.PropsWithChildren<any>) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
