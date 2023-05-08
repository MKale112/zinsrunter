import React, { useEffect } from 'react';
import HeroBanner from '@/components/Banner/HeroBanner';
import { Box, Heading, VisuallyHidden, useMediaQuery, Portal } from '@chakra-ui/react';
import Partners from '@/components/SealsAndPartners/Partners';
import Seals from '@/components/SealsAndPartners/Seals';
import Highlights from '@/components/Highlights/Highlights';
import { Financing } from '@/components/Financing/Financing';
import Script from 'next/script';
import { addGclid } from '@/core/utils';
import { applyInnerHTML, classList } from '@/core/script';

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const element = document.getElementsByClassName(classList[0])[0];
      if (element && element.innerHTML) {
        clearInterval(intervalId);
        applyInnerHTML();
      }
    }, 1000);
    window.addEventListener('load', addGclid);
    () => {
      window.removeEventListener('load', addGclid);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.baufi-lead.de/baufilead/partner/PkGvpMTcO4DxDy0gEBGuq9c2NYTZ1Q/imports.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box pointerEvents={'auto'}>
      <Script async id='baufi-lead-script-2' type='text/javascript'>
        var baufilead_kampagne = &quot;Zins-runter.de Europace Formulare&quot;;
      </Script>

      <Script async id='baufi-lead-script-3' type='text/javascript'>
        var baufilead_tippgeber_id = &quot;TQJ25&quot;;
      </Script>
      <VisuallyHidden>
        <Heading as='h1'>Zins-Runter</Heading>
      </VisuallyHidden>
      <HeroBanner heroImage={isMobile ? '/hero-image-mobile.webp' : '/hero-image.webp'} />
      <Financing />
      <Partners cards={true} />
      <Highlights />
      <Seals />
      <Portal>
        <Box id='classListElements' display='none'>
          {classList.map((className) => (
            <Box key={className} className={className} />
          ))}
        </Box>
      </Portal>
    </Box>
  );
}
