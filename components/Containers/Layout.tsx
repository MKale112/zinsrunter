import React from 'react';
import { Footer, Header } from '../Navigation';
import TopButton from '../Anchor';

const Layout = ({ children }: React.PropsWithChildren<any>) => (
  <>
    <Header />
    <main>{children}</main>
    <TopButton />
    <Footer />
  </>
);

export default Layout;
