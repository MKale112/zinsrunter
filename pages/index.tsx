import React, { useEffect } from 'react';
import HeroBanner from '@/components/Banner/HeroBanner';
import { useMediaQuery } from '@chakra-ui/react';
import Partners from '@/components/SealsAndPartners/Partners';
import Seals from '@/components/SealsAndPartners/Seals';
import Highlights from '@/components/Highlights/Highlights';
import { Financing } from '@/components/Financing/Financing';
import Script from 'next/script';
import { addGclid } from '@/core/utils';

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    window.addEventListener('load', addGclid);
    () => {
      window.removeEventListener('load', addGclid);
    };
  }, []);

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
