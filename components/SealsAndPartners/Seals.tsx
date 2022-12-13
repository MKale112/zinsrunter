import { Box, Button, Center, Heading, SimpleGrid, useColorModeValue, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import sealsData from '../../data/seals.json';

const Seals = () => {
  const sealsAndHonors = sealsData.seals.map((entry, index) => (
    <Center key={index}>
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
  ));

  return (
    <FullWidthContainer py={[4, 12]}>
      <ResponsiveContainer>
        <VStack spacing={[6, 12]}>
          <Heading as='h2' fontSize={['xl', '3xl']}>
            Garantierter Mehrwert durch den Vergleich
          </Heading>
          {/* <HStack></HStack> */}
          <SimpleGrid py={2} spacing={12} columns={2} justifyContent='center' alignItems='center' textAlign='center'>
            {sealsAndHonors}
          </SimpleGrid>
          <Button variant='accent'>Jetzt unverbindlich anfragen!</Button>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Seals;
