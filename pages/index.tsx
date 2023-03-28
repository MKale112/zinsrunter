import React from 'react';
import HeroBanner from '@/components/Banner/HeroBanner';
import { Button, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import Partners from '@/components/SealsAndPartners/Partners';
import Seals from '@/components/SealsAndPartners/Seals';
import Highlights from '@/components/Highlights/Highlights';
import ChakraLink from '@/components/Link/ChakraLink';
import { Financing } from '@/components/Financing/Financing';
import Script from 'next/script';
import Head from 'next/head';

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  return (
    <>
      <Script
        type='text/javascript'
        src='https://www.baufi-lead.de/baufilead/partner/PkGvpMTcO4DxDy0gEBGuq9c2NYTZ1Q/imports.js'
      />
      <HeroBanner heroImage={isMobile ? '/hero-image-mobile.webp' : '/hero-image.webp'} />
      <Financing />
      <Partners cards={true} />
      <Highlights />
      <Seals />
    </>
  );
}
