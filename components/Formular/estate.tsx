import { Center, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { estate } from 'data/form';
import Image from 'next/image';
import React, { FC } from 'react';
import { TilePropDrill } from './types';

export const Estate: FC<TilePropDrill> = ({ setFullFormData, setStep }) => {
  const handleTileClick = (tileText: string) => {
    setFullFormData((prev: any) => ({ ...prev, estate: tileText }));
    setStep(2);
  };

  return (
    <SimpleGrid h='full' columns={[1, 2, 3, 3]} spacing={6} justifyItems={'center'} textAlign='center'>
      {estate.data.map((entry) => (
        <Center
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
          <VStack>
            <Image src={entry.icon} alt={entry.text} height={64} width={64} />
            <Text fontSize={['sm', 'md', 'lg']}>{entry.text}</Text>
          </VStack>
        </Center>
      ))}
    </SimpleGrid>
  );
};
