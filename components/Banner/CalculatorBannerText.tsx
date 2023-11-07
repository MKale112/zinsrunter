import React from 'react';
import { Button, Heading, VStack, Text, List, ListIcon, ListItem, HStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import ChakraLink from '../Link/ChakraLink';
import LinkButton from '../LinkButton';

export const CalculatorBannerText = () => {
  const buttonText = 'Beratungstermin vereinbaren';
  return (
    <VStack
      fontWeight={'bold'}
      padding={[4, 6, 8]}
      mt={{ base: -5, sm: 0 }}
      alignItems='center'
      spacing={{ base: 6, md: 4 }}
      width={['100%', '100%', '10 0%']}
      ml='auto'
      textAlign='center'
      textShadow={{ base: 'unset', sm: '0px 1px 3px rgba(0,0,0,0.3)' }}
      mb={{ base: 5, sm: 0 }}
      border='1px'
      borderColor={{ base: 'rgba(200, 200, 200, 0.50)', sm: 'rgba(200, 200, 200, 0.50)' }}
      borderRadius={'xl'}
      backgroundColor={{ base: 'white', sm: 'rgba(0, 40, 60, 0.30)' }}
    >
      <Heading
        as={'h2'}
        fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
        color='primary.acid'
        textShadow={{ base: 'unset', sm: '0px 1px 3px rgba(0,0,0,0.8)' }}
      >
        Unsere Spezialisten für Baufinanzierung beraten Sie gern.
      </Heading>
      <Text fontSize={{ base: 'xs', md: 'xs', lg: 'xs' }}>&nbsp;</Text>
      <VStack alignSelf='center'>
        <ChakraLink href='/formular' alignSelf='center'>
          <LinkButton buttonText={buttonText} />
        </ChakraLink>
        <Text fontSize={{ base: 'xs', md: 'xs', lg: 'xs' }}>&nbsp;</Text>
        <Text
          alignSelf='center'
          fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
          color={{ base: 'ternaryFontColor', md: 'white' }}
        >
          unverbindlich und kostenlos
        </Text>
      </VStack>
    </VStack>
  );
};

export default CalculatorBannerText;
