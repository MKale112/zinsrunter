import React from 'react';
import { Button, Heading, VStack, Text, useMediaQuery } from '@chakra-ui/react';
import ChakraLink from '../Link/ChakraLink';

export const BannerText = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  return (
    <VStack
      fontWeight={'bold'}
      textShadow={'2px 1px black'}
      padding={[4, 6, 10]}
      alignItems='flex-start'
      spacing={isMobile ? 3 : 6}
      width={['100%', '100%', '50%']}
      ml='auto'
    >
      <Heading as={'h2'} fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }} color='primary.acid'>
        Baufinanzierung vergleichen - einfach & sicher
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'sm', lg: '2xl' }} color='white'>
        In nur 3 Min. zur kostenlosen Finanzierungsanfrage
      </Text>
      <Text fontSize={{ base: 'sm', md: 'sm', lg: '2xl' }} color='white'>
        Finanzierungskonditionen von über 500 Finanzierungsgebern
      </Text>
      <Text fontSize={{ base: 'sm', md: 'sm', lg: '2xl' }} color='white'>
        Personliche Beratung digital oder per Telefon
        <br /> Individuelles & transparentes Angebot in der Regel binnen 24 Stunden
      </Text>
      <ChakraLink href='/formular' alignSelf='center'>
        <Button variant='accent' fontSize={isMobile ? 'xl' : '2xl'}>
          Unverbindlich Anfragen
        </Button>
      </ChakraLink>
      <Text alignSelf='center' fontSize={{ base: 'sm', md: 'sm', lg: 'md' }} color='white'>
        Individuell. Fair. Kostenfrei.
      </Text>
    </VStack>
  );
};

export default BannerText;
