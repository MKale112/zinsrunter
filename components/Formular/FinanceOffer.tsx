import { stepState } from '@/core/atoms';
import { Center, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { financeOffer, estate } from 'data/form';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';

export const FinanceOffer = () => {
  const [step, setStep] = useRecoilState(stepState);
  const handleTileClick = (tileText: string) => {
    console.log(tileText);
    tileText === financeOffer.data[1].text
      ? setStep((currValue) => [2, { ...currValue[1], financeOffer: tileText, estate: estate.data[2].text }])
      : setStep((currValue) => [1, { ...currValue[1], financeOffer: tileText }]);
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
          sx={step[1].financeOffer === entry.text ? { bgColor: 'primary.acid', boxShadow: '2xl' } : {}}
          _hover={{
            cursor: 'pointer',
            bgColor: 'primary.acid',
            boxShadow: '2xl',
            transition: 'all 0.4s ease-in-out',
            transform: 'translateY(-10px)',
          }}
          onClick={() => handleTileClick(entry.text)}
        >
          <VStack
            _groupHover={{ filter: 'brightness(0) invert(1)' }}
            sx={step[1].financeOffer === entry.text ? { filter: 'brightness(0) invert(1)' } : {}}
          >
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
