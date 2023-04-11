import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';
import customTheme from '@/styles/theme';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='de'>
      <Head>
        {/* Cookie-Einwilligungshinweis – Anfang für www.zins-runter.de  */}
        {/* <meta charSet='UTF-8' />
        <script
          src='https://cdn.cookielaw.org/scripttemplates/otSDKStub.js'
          type='text/javascript'
          data-domain-script='ff52141d-d698-45fb-8b48-5bf7cd1623d7'
        ></script>
        <script type='text/javascript'> function OptanonWrapper() {} </script> */}
        {/* OneTrust-Cookie-Einwilligungshinweis – Ende für www.zins-runter.de */}
      </Head>
      <body>
        <noscript>
          <iframe
            height='0'
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
            width='0'
          />
        </noscript>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
