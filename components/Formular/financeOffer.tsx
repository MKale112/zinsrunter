import { Center, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { financeOffer } from 'data/form';
import React, { FC } from 'react';
import { FormValues, TilePropDrill } from './types';

export const FinanceOffer: FC<TilePropDrill> = ({ setFullFormData, setStep }) => {
  const handleTileClick = (tileText: string) => {
    setFullFormData((prevValues: FormValues) => ({ ...prevValues, financeOffer: tileText }));
    setStep(1);
  };
  return (
    <SimpleGrid columns={[1, 2, 3, 3]} spacing={4} justifyItems={'center'} textAlign='center'>
      {financeOffer.data.map((entry) => (
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
