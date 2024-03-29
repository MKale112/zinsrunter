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

import { log } from 'next-axiom';
import axios from 'axios';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const sendLog = async () => {
    const res = await axios.get(`/api/logger?path=${router.asPath}`);
    const logger = log.with({ timestamp: res.data.timestamp });
    logger.info(res.data.logEntry);
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
