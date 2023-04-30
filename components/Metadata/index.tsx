import { MetaTags } from '@/core/types';
import Head from 'next/head';
import React from 'react';

const generateMetaText = (asPath: string): MetaTags => {
  const metaTags: MetaTags = {
    title: 'Baufinanzierung im Vergleich - Zins-runter.de',
    desc: 'Zins-runter.de - Baufinanzierung unabhängig vergleichen. Unsere Experten vergleichen aus über 500 Finanzierungspartnern. Kostenlosen Finanzierungsvorschlag hier anfordern',
    image: '/hero-image.webp',
  };
  switch (asPath.substring(1)) {
    case 'formular/finanzierungszweck':
      metaTags.title = 'Finanzierungszweck - Anfrage Baufinanzierung';
      return metaTags;
    case 'formular/immobilientyp':
      metaTags.title = 'Immobilientyp - Anfrage Baufinanzierung';
      return metaTags;
    case 'formular/nutzung':
      metaTags.title = 'Nutzung - Anfrage Baufinanzierung';
      return metaTags;
    case 'formular/region':
      metaTags.title = 'Region - Anfrage Baufinanzierung';
      return metaTags;
    case 'formular/schufa':
      metaTags.title = 'Schufa - Anfrage Baufinanzierung';
      return metaTags;
    case 'formular/zahlen':
      metaTags.title = 'Zahlen - Anfrage Baufinanzierung';
      return metaTags;
    case 'formular/angebot':
      metaTags.title = 'Angebot - Anfrage Baufinanzierung';
      return metaTags;
    case 'formular/lead?thankyou=1':
      metaTags.title = 'Danke für Ihre Anfrage - Anfrage Baufinanzierung';
      return metaTags;
    case 'uber-uns':
      metaTags.title = 'Über uns - Baufinanzierung bei Zins-runter.de';
      return metaTags;
    case 'kontakt':
      metaTags.title = 'Kontakt zu Zins-runter.de';
      return metaTags;
    case 'kontakt?thankyou=2':
      metaTags.title = 'Danke für Ihre Kontaktanfrage - Kontakt Zins-runter.de';
      return metaTags;
    case 'datenschutz':
      metaTags.title = 'Datenschutz - Baufinanzierung bei Zins-runter.de';
      return metaTags;
    case 'agb':
      metaTags.title = 'AGB - Baufinanzierung bei Zins-runter.de';
      return metaTags;
    case 'erstinformation':
      metaTags.title = 'Erstinformation - Baufinanzierung bei Zins-runter.de';
      return metaTags;
    case 'impressum':
      metaTags.title = 'Impressum - Baufinanzierung bei Zins-runter.de';
      return metaTags;
    default:
      metaTags.title = 'Siguron GmbH - Baufinanzierung bei Zins-runter.de';
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

      <title>{metaText.title}</title>
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
      <meta
        name='norton-safeweb-site-verification'
        content='o5e410xm4w9hjlw17v301m881labk5hqkfchl1xmfgqgn04tuo3yrnieion5071pxw2hmiqvsd30jpznh2ysg3ltupu8iw8exltrnzu6weow6ri2mr9lmvahv06sky7m'
      />

      <meta name='description' content={metaText.desc} />
      <meta name='Copyright' content='Siguron GmbH, M&uuml;nchen' />
      <link rel='canonical' href={asPath.includes('[...step]') ? '/formular' : asPath} />
      <meta property='og:title' content={metaText.title} />
      <meta property='og:description' content={metaText.desc} />
      <meta property='og:image' content={metaText.image} />
    </Head>
  );
};
