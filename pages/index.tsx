import React from 'react';
import HeroBanner from '@/components/Banner/HeroBanner';
import { Button, Text } from '@chakra-ui/react';
import { Footer, Header } from '../components/Navigation';

export default function Home() {
  return (
    <>
      <Header />
      <Footer />
      <HeroBanner>
        <Text color={'white'}>This is some random hero banner text with button underneath it</Text>
        <Button>Click me silly</Button>
      </HeroBanner>
    </>
  );
}
