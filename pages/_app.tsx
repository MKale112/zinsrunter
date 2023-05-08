import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Layout } from '../components/Containers';
import '../core/global.d.ts';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '@/styles/theme';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';
import { Metadata } from '@/components/Metadata';
import TagManager from 'react-gtm-module';

// xaat-8a452859-5c53-4238-88f1-da18518cb1a8

export { reportWebVitals } from 'next-axiom';
import { withAxiomGetServerSideProps } from 'next-axiom';
import { GetServerSideProps } from 'next';
import axios from 'axios';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const sendLog = async () => {
    await axios.get(`/api/logger?axiom=true&path=${router.asPath}`);
    console.log(router);
  };

  useEffect(() => {
    sendLog();
  }, [router]);

  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID! });
  }, []);

  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <RecoilRoot>
            <Metadata asPath={router.asPath} />
            <Component {...pageProps} />
          </RecoilRoot>
        </Layout>
      </ChakraProvider>
    </>
  );
}
