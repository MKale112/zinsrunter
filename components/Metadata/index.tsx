import { MetaTags } from '@/core/types';
import Head from 'next/head';
import React from 'react';

const generateMetaText = (asPath: string): MetaTags => {
  const metaTags: MetaTags = {
    title: 'Baufinanzierung im Vergleich – Zins-runter.de',
    desc: 'Zins-runter.de – Baufinanzierung unabhängig vergleichen. Unsere Experten vergleichen aus über 500 Finanzierungspartnern. Kostenlosen Finanzierungsvorschlag hier anfordern',
    image: '/logo.png',
  };
  switch (asPath.split('/')[1]) {
    case 'formular':
      metaTags.title = 'Formular';
      return metaTags;
    case 'uber-uns':
      metaTags.title = 'Uber uns';
      return metaTags;
    case 'kontakt':
      metaTags.title = 'Kontakt';
      return metaTags;
    case 'agb':
      return metaTags;
    case 'datenschultz':
      return metaTags;
    case 'erstinformation':
      return metaTags;
    case 'impressum':
      return metaTags;
    default:
      return metaTags;
  }
};

export const Metadata = ({ asPath }: { asPath: string }) => {
  const metaText = generateMetaText(asPath);
  return (
    <Head>
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0' />

      <title>&#9655; {metaText.title}</title>
      <meta name='page-topic' content='Kredit, Zinsen, Finanzen, Finanzierung' />
      <meta name='Language' content='de' />
      <meta name='page-type' content='Dienstleistung' />
      <meta name='author' content='SIGURON GmbH' />
      <meta
        name='classification'
        content='Baufinanzierung, Immobilienfinanzierung, Darlehen, Ratenkredite, Dienstleistung, Finanzierungsvermittler, Vergleich, Kredit'
      />
      <meta
        name='keywords'
        content=' Baufinanzierung, Immobilienfinanzierung, Darlehen, Ratenkredite, Dienstleistung, Finanzierungsvermittler, Vergleich, Kredit'
      />
      <meta name='description' content={metaText.desc} />
      <meta name='Copyright' content='Siguron GmbH, M&uuml;nchen' />
      <link rel='canonical' href='https://www.zins-runter.de/' />
      <meta name='description' content={metaText.desc} />
      <meta name='Copyright' content='Siguron GmbH, M&uuml;nchen' />
      <link rel='canonical' href='https://www.zins-runter.de/' />
      <meta property='og:title' content={metaText.title} />
      <meta property='og:description' content={metaText.desc} />
    </Head>
  );
};
