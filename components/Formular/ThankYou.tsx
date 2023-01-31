import ChakraLink from '@/components/Link/ChakraLink';
import { Button, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

export const ThankYou = () => {
  return (
    <VStack
      bgColor='white'
      p={10}
      boxShadow='2xl'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      spacing={6}
      w={['95%', '95%', '80%', '50%', '40%']}
    >
      <Heading as='h3' fontSize={['xl', '2xl', '2xl', '3xl']}>
        Vielen Dank für die Übermittlung.
      </Heading>
      <Heading as='h3' fontSize={['lg', 'lg', 'xl', 'xl']} color='secondaryFontColor'>
        Wir melden uns bald bei Ihnen!
      </Heading>
      <ChakraLink href='/'>
        <Button variant='accent' padding={6}>
          Zurück zur Startseite
        </Button>
      </ChakraLink>
    </VStack>
  );
};
