import React from 'react';
import HeroBanner from '@/components/Banner/HeroBanner';
import { Button, Heading, Text } from '@chakra-ui/react';
import { Footer, Header } from '../components/Navigation';
import Partners from '@/components/SealsAndPartners/Partners';
import Seals from '@/components/SealsAndPartners/Seals';
import Highlights from '@/components/Highlights/Highlights';
import ChakraLink from '@/components/Link/ChakraLink';
import { Financing } from '@/components/Financing/Financing';

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner>
        <Heading as={'h2'} fontSize={['lg', '4xl']} color='white'>
          Baufinanzierung vergleichen - einfach & sicher
        </Heading>
        <Text fontSize={['md', 'xl']} color='white'>
          Finanzierungskonditionen von über 500 Banken im Vergleich
          <br />
          Personliche Beratung digital oder per Telefon
        </Text>
        <Text fontSize={['sm', 'md']} color='white'>
          Individuelles & transparentes Angebot in der Regel binnen 24 Stunden
        </Text>
        <ChakraLink href='/formular'>
          <Button variant='accent'>Unverbindlich Anfragen</Button>
        </ChakraLink>
      </HeroBanner>
      <Financing />
      <Partners />
      <Highlights />
      <Seals />
      <Footer />
    </>
  );
}
