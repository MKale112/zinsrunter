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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Wait for user consent
    if (window?.OTG?.consent?.hasGivenConsent('necessary')) {
      // Load GTM script
      const gtmScript = document.getElementById('gtag-base');

      if (!gtmScript) {
        // google tag manager script
        const gtmScript = document.getElementById('gtag-base');

        if (!gtmScript) {
          const gtmScriptTag = document.createElement('script');
          gtmScriptTag.setAttribute('id', 'gtag-base');
          gtmScriptTag.setAttribute('data-cookieconsent', 'ignore');
          gtmScriptTag.setAttribute('strategy', 'afterInteractive');
          gtmScriptTag.setAttribute('type', 'text/javascript');
          gtmScriptTag.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
      `;
          document.head.appendChild(gtmScriptTag);
        }
      }
    }
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <RecoilRoot>
          <Metadata asPath={router.asPath} />
          <Component {...pageProps} />
        </RecoilRoot>
      </Layout>
    </ChakraProvider>
  );
}
