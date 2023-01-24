import { Center, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { financeOffer } from 'data/form';
import Image from 'next/image';
import React, { FC } from 'react';
import { FormValues, TilePropDrill } from './types';

export const FinanceOffer: FC<TilePropDrill> = ({ setFullFormData, setStep }) => {
  const handleTileClick = (tileText: string) => {
    setFullFormData((prevValues: FormValues) => ({ ...prevValues, financeOffer: tileText }));
    setStep(1);
  };

  return (
    <SimpleGrid columns={[1, 2, 3, 3]} spacing={6} justifyItems={'center'} textAlign='center'>
      {financeOffer.data.map((entry) => (
        <Center
          data-group
          key={entry.key}
          bg='white'
          borderRadius='2xl'
          border='1px'
          borderColor='gray.300'
          height='150px'
          transform='translateY(0px)'
          transition='all 0.4s ease-in-out'
          w={[300, 200, 200, 300]}
          _hover={{
            cursor: 'pointer',
            // color: 'white',
            bgColor: 'primary.acid',
            boxShadow: '2xl',
            transition: 'all 0.4s ease-in-out',
            transform: 'translateY(-10px)',
          }}
          onClick={() => handleTileClick(entry.text)}
        >
          <VStack _groupHover={{ filter: 'brightness(0) invert(1)' }}>
            <Image src={entry.icon} alt={entry.text} height={64} width={64} />
            <Text fontSize={['sm', 'md', 'lg']} fontWeight='medium'>
              {entry.text}
            </Text>
          </VStack>
        </Center>
      ))}
    </SimpleGrid>
  );
};
