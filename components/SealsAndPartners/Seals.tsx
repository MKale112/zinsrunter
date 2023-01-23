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
} from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import Tilt from 'react-parallax-tilt';
import sealsData from '../../data/seals.json';
const ReactReveal = require('react-reveal');

const Seals = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  const sealsAndHonors = sealsData.seals.map((entry, index) => (
    <ReactReveal.Fade collapse text up delay={index * 200} key={entry.title}>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <Center>
          <Box
            maxW={450}
            minH={200}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            overflow={'hidden'}
            py={4}
          >
            <Box p={6}>
              <VStack spacing={4} align={'center'}>
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
  ));

  return (
    <FullWidthContainer id='section-seals' py={[16, 24]} bg={'gray.100'}>
      <ResponsiveContainer>
        <ReactReveal.Fade bottom>
          <VStack spacing={[12, 16]}>
            <Heading as='h2' fontSize={['xl', '3xl']} textAlign='center'>
              Garantierter Mehrwert durch den Vergleich
            </Heading>
            {isMobile ? (
              <VStack spacing={12}>{sealsAndHonors}</VStack>
            ) : (
              <SimpleGrid
                py={2}
                spacing={12}
                columns={2}
                justifyContent='center'
                alignItems='center'
                textAlign='center'
              >
                {sealsAndHonors}
              </SimpleGrid>
            )}
            <Button variant='accent'>Jetzt unverbindlich anfragen!</Button>
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Seals;
