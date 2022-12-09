import React from 'react';
import HeroBanner from '@/components/Banner/HeroBanner';
import { Button, Heading, Text } from '@chakra-ui/react';
import { Footer, Header } from '../components/Navigation';

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
        <Button variant='accent'>Unverbindlich Anfragen</Button>
      </HeroBanner>
      <Footer />
    </>
  );
}
