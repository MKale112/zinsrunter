import { MetaTags } from '@/core/types';
import Head from 'next/head';
import React from 'react';

const generateMetaText = (asPath: string): MetaTags => {
  const metaTags: MetaTags = {
    title: 'Zins-runter.de',
    desc: 'Description for Zins-runter.de',
    image: '/logo.png',
  };
  console.log('asPath: ', asPath);
  console.log('asPath match: ', asPath.match(/formular/g)?.[0]);
  switch (asPath.split('/')[1]) {
    case 'formular':
      metaTags.title = 'Formular';
      metaTags.desc = 'Formular description';
      return metaTags;
    case 'uber-uns':
      metaTags.title = 'Uber uns';
      metaTags.desc = 'Uber uns description';
      return metaTags;
    case 'kontakt':
      metaTags.title = 'Kontakt';
      metaTags.desc = 'Kontakt description';
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
      <title>{metaText.title}</title>
      <meta name='description' content={metaText.desc} />
      <meta name='image' content={metaText.image} />
      <meta property='og:title' content={metaText.title} />
      <meta property='og:description' content={metaText.desc} />
    </Head>
  );
};
