import React from 'react';
import HeroBanner from '@/components/Banner/HeroBanner';
import { Button, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import Partners from '@/components/SealsAndPartners/Partners';
import Seals from '@/components/SealsAndPartners/Seals';
import Highlights from '@/components/Highlights/Highlights';
import ChakraLink from '@/components/Link/ChakraLink';
import { Financing } from '@/components/Financing/Financing';
import { InitialDBInput } from '@/core/types';

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  console.log(InitialDBInput);

  return (
    <>
      <HeroBanner heroImage={isMobile ? '/hero-image-mobile.webp' : '/hero-image.webp'}>
        <Heading as={'h2'} fontSize={['lg', '4xl']} color='white'>
          Baufinanzierung vergleichen - einfach & sicher
        </Heading>
        <Text fontSize={['md', '2xl']} color='white'>
          Finanzierungskonditionen von über 500 Banken im Vergleich
          <br />
          Personliche Beratung digital oder per Telefon
        </Text>
        <Text fontSize={['sm', 'lg']} color='primary.acid'>
          Individuelles & transparentes Angebot in der Regel binnen 24 Stunden
        </Text>
        <ChakraLink href='/formular' alignSelf='center'>
          <Button variant='accent'>Unverbindlich Anfragen</Button>
        </ChakraLink>
      </HeroBanner>
      <Financing />
      <Partners cards={true} />
      <Highlights />
      <Seals />
    </>
  );
}
