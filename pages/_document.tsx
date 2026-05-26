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
        {process.env.NODE_ENV !== 'development' && (
          <>
            <script src='https://web.cmp.usercentrics.eu/modules/autoblocker.js'></script>
            <script
              id='usercentrics-cmp'
              src='https://web.cmp.usercentrics.eu/ui/loader.js'
              data-settings-id='jJZx-eoWYKcRPv'
              async
            ></script>
          </>
        )}
        {/* usercentrics-Cookie-Einwilligungshinweis – Ende für www.zins-runter.de */}

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
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,t,r,u) {
            var f,n,i;
            w[u]=w[u]||[],f=function() {
              var o={ti:"163002190", enableAutoSpaTracking: true};
              o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
            },
            n=d.createElement(t),n.src=r,n.async=1,
            n.onload=n.onreadystatechange=function() {
              var s=this.readyState;
              s&&s!=="loaded"&&s!=="complete"||(f(),
              n.onload=n.onreadystatechange=null)
            },
            i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
          })(window,document,"script","//bat.bing.com/bat.js","uetq");
        `,
          }}
        ></script>
      </Head>
      <body>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
