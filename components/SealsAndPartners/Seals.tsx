import {
  Box,
  Button,
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
import sealsData from '../../data/seals.json';
import ChakraLink from '../Link/ChakraLink';
import Image from 'next/image';
const ReactReveal = require('react-reveal');

const Seals = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  const sealsAndHonors = sealsData.seals.map((entry, index) => {
    const images = entry.images.map((image, index) => (
      <Image key={index} src={image} alt={entry.alt} height={isMobile ? 75 : 100} width={isMobile ? 75 : 100} />
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
                    {entry.title}
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
    <FullWidthContainer id='mehrwert' py={[10, 16]} bg='primary.mutedBlue'>
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
              Garantierter Mehrwert durch den Vergleich
            </Heading>
            {isMobile ? (
              <VStack spacing={12} justifyContent='center' alignItems='center' textAlign='center'>
                {sealsAndHonors}
              </VStack>
            ) : (
              <SimpleGrid spacing={10} columns={2} justifyContent='center' alignItems='center' textAlign='center'>
                {sealsAndHonors}
              </SimpleGrid>
            )}
            <ChakraLink href='/formular'>
              <Button variant='accent'>Beratungstermin vereinbaren</Button>
            </ChakraLink>
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Seals;
