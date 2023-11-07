import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VStack,
  Text,
  useMediaQuery,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import Tilt from 'react-parallax-tilt';
import calculatorsData from '../../data/calculators.json';
import ChakraLink from '../Link/ChakraLink';
import Link from '../Link/ChakraLink';
import Image from 'next/image';
import LinkButton from '../LinkButton';

import CalculatorBannerText from '../Banner/CalculatorBannerText';

const ReactReveal = require('react-reveal');

const Calculator = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const buttonText = 'Beratungstermin vereinbaren';

  const calculatorsImages = calculatorsData.calculators.map((entry, index) => {
    const images = entry.images.map((image, index) => (
      <Image key={index} src={image} alt={entry.alt} height={isMobile ? 160 : 200} width={isMobile ? 244 : 306} />
    ));
    return (
      <ReactReveal.Fade collapse text up delay={index * 200} key={entry.id}>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Center h='full'>
            <Box
              maxW={450}
              minH={{ base: 250, sm: 300 }}
              h='full'
              w='full'
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              overflow={'hidden'}
            >
              <Box p={6}>
                <VStack spacing={2} align={'center'}>
                  <HStack mb={6} spacing={6}>
                    {images}
                  </HStack>
                  <Heading fontSize={['xl', 'xl', '2xl']} fontWeight={500} fontFamily={'body'}>
                    <Link href={entry.href}>{entry.title}</Link>
                  </Heading>
                  <Text color={'gray.500'}>{entry.text}</Text>
                </VStack>
              </Box>
            </Box>
          </Center>
        </Tilt>
      </ReactReveal.Fade>
    );
  });

  return (
    <FullWidthContainer id='rechner' py={[10, 16]} bg='primary.mutedBlue'>
      <ResponsiveContainer>
        <ReactReveal.Fade duration={1000} bottom>
          <VStack spacing={[12, 16]}>
            <Heading
              as='h2'
              fontSize={['xl', '3xl']}
              textAlign='center'
              color='white
            '
            >
              Baufinanzierungsrechner: Online Baufinanzierung berechnen
            </Heading>
            <Text textAlign='center' w={{ base: '100%', md: '75%', lg: '75%' }} fontSize={['md', 'xl']} color='white'>
              Hier erfahren Sie schonmal vorab, welche Ausgaben Sie bei Ihrer Immobilienfinanzierung wahrscheinlich
              erwarten?
              <br />
              Unsere Baufinanzierungsrechner verschaffen einen ersten Überblick über die anfallenden Kosten.
            </Text>
            {isMobile ? (
              <VStack spacing={12} justifyContent='center' alignItems='center' textAlign='center'>
                {calculatorsImages}
                <ChakraLink href='/formular'>
                  <LinkButton buttonText={buttonText} />
                </ChakraLink>
              </VStack>
            ) : (
              <SimpleGrid spacing={10} columns={3} justifyContent='center' alignItems='center' textAlign='center'>
                {calculatorsImages}
                <ReactReveal.Fade collapse text up delay={6 * 200} key='calculator-6'>
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <Center h='full'>
                      <Box
                        maxW={450}
                        minH={{ base: 250, sm: 300 }}
                        h='full'
                        w='full'
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        overflow={'hidden'}
                      >
                        <Box p={0}>
                          <VStack spacing={2} align={'center'}>
                            <CalculatorBannerText />
                          </VStack>
                        </Box>
                      </Box>
                    </Center>
                  </Tilt>
                </ReactReveal.Fade>
              </SimpleGrid>
            )}
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Calculator;
