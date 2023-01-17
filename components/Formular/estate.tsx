import { Center, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { estate } from 'data/form';
import React, { FC } from 'react';
import { TilePropDrill } from './types';

export const Estate: FC<TilePropDrill> = ({ setFullFormData, setStep }) => {
  const handleTileClick = (tileText: string) => {
    setFullFormData((prev: any) => ({ ...prev, estate: tileText }));
    setStep(2);
  };
  return (
    <SimpleGrid columns={[1, 2, 3, 3]} spacing={4} justifyItems={'center'} textAlign='center'>
      {estate.data.map((entry) => (
        <Center
          key={entry.key}
          bg='white'
          borderRadius='2xl'
          border='1px'
          borderColor='gray.300'
          height='100px'
          w={[300, 200, 200, 300]}
          _hover={{ cursor: 'pointer' }}
          onClick={() => handleTileClick(entry.text)}
        >
          <VStack>
            {React.createElement(entry.icon, { h: '24px', w: '24px' })}
            <Text>{entry.text}</Text>
          </VStack>
        </Center>
      ))}
    </SimpleGrid>
  );
};
