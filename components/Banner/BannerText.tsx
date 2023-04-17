import React from 'react';
import { Button, Heading, VStack, Text, useMediaQuery, List, ListIcon, ListItem, HStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import ChakraLink from '../Link/ChakraLink';

export const BannerText = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  return (
    <VStack
      sx={{
        base: { textShadow: 'unset', mb: 10 },
        sm: { textShadow: '0px 1px 3px rgba(0,0,0,0.3)' },
      }}
      fontWeight={'bold'}
      padding={[4, 6, 10]}
      alignItems='center'
      spacing={{ base: 6, md: 10 }}
      width={['100%', '100%', '50%']}
      ml='auto'
      textAlign='center'
    >
      <Heading
        as={'h2'}
        fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
        color='primary.acid'
        textShadow={{ base: 'unset', sm: '0px 1px 3px rgba(0,0,0,0.8)' }}
      >
        Baufinanzierung vergleichen - einfach & sicher
      </Heading>
      <List
        color={{ base: 'secondaryFontColor', sm: 'gray.200' }}
        listStylePosition='outside'
        alignSelf='center'
        textAlign='start'
        spacing={3}
        fontSize={{ base: 'sm', md: 'sm', lg: '2xl' }}
      >
        <ListItem>
          <HStack>
            <ListIcon as={CheckIcon} color='primary.acid' boxSize={6} textShadow={'0px 1px 3px rgba(0,0,0,0.8)'} />
            <Text>In nur 3 Min. zur Finanzierungsanfrage</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <ListIcon as={CheckIcon} color='primary.acid' boxSize={6} textShadow={'0px 1px 3px rgba(0,0,0,0.8)'} />
            <Text>Über 500 Finanzierungspartner</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <ListIcon as={CheckIcon} color='primary.acid' boxSize={6} textShadow={'0px 1px 3px rgba(0,0,0,0.8)'} />
            <Text>Beratung digital, per Telefon oder Vorort</Text>
          </HStack>
        </ListItem>

        <ListItem>
          <HStack>
            <ListIcon as={CheckIcon} color='primary.acid' boxSize={6} textShadow={'0px 1px 3px rgba(0,0,0,0.8)'} />
            <Text>Nur 24 Stunden zum kostenlosen Vorschlag</Text>
          </HStack>
        </ListItem>
      </List>
      <VStack alignSelf='center'>
        <ChakraLink href='/formular' alignSelf='center'>
          <Button variant='accent' fontSize={{ base: 'xl', md: '2xl' }}>
            Jetzt unverbindlich Anfragen
          </Button>
        </ChakraLink>
        <Text
          alignSelf='center'
          fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
          color={{ base: 'ternaryFontColor', md: 'white' }}
        >
          Individuell. Fair. Kostenfrei.
        </Text>
      </VStack>
    </VStack>
  );
};

export default BannerText;
