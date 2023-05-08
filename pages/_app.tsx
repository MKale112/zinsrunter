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
import Script from 'next/script';

// xaat-8a452859-5c53-4238-88f1-da18518cb1a8

export { reportWebVitals } from 'next-axiom';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID! });
  }, []);

  return (
    <>
      <Script
        id='baufi-lead-script-1'
        type='text/javascript'
        src='https://www.baufi-lead.de/baufilead/partner/PkGvpMTcO4DxDy0gEBGuq9c2NYTZ1Q/imports.js'
      />
      <Script id='baufi-lead-script-2' type='text/javascript'>
        var baufilead_kampagne = &quot;Zins-runter.de Europace Formulare&quot;;
      </Script>
      <Script id='baufi-lead-script-3' type='text/javascript'>
        var baufilead_tippgeber_id = &quot;TQJ25&quot;;
      </Script>

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
