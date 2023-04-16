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
        <meta charSet='UTF-8' />
        <script
          src='https://cdn.cookielaw.org/scripttemplates/otSDKStub.js'
          type='text/javascript'
          data-domain-script='ff52141d-d698-45fb-8b48-5bf7cd1623d7'
        ></script>
        <script type='text/javascript'> function OptanonWrapper() {} </script>
        {/* OneTrust-Cookie-Einwilligungshinweis – Ende für www.zins-runter.de */}

        <Script
          id='gtm'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KS3CG9R'});`,
          }}
        />

        {/* Google Analytics gtag.js script */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=AW-1067567060'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-1067567060');
              `,
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            height='0'
            src={`https://www.googletagmanager.com/ns.html?id=GTM-KS3CG9R`}
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
