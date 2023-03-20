import { stepState } from '@/core/atoms';
import { VStack, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { immobilientyp, finanzierungszweck } from 'data/form';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';

export const Estate = () => {
  const [step, setStep] = useRecoilState(stepState);
  const handleTileClick = (tileText: string) => {
    setStep((currValue) => [2, { ...currValue[1], immobilientyp: tileText }]);
  };

  return (
    <SimpleGrid columns={[1, 2, 3, 3]} spacing={6} justifyItems={'center'} textAlign='center'>
      {immobilientyp.data.map((entry) => {
        const isDisabled =
          step[1].finanzierungszweck === finanzierungszweck.data[2].text &&
          (entry.text === immobilientyp.data[0].text || entry.text === immobilientyp.data[2].text);

        return (
          <Button
            disabled={isDisabled}
            _disabled={{ opacity: 0.5, cursor: 'not-allowed' }}
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
            sx={step[1].immobilientyp === entry.text ? { bgColor: 'primary.acid', boxShadow: '2xl' } : {}}
            _hover={
              !isDisabled
                ? {
                    cursor: 'pointer',
                    bgColor: 'primary.acid',
                    boxShadow: '2xl',
                    transition: 'all 0.4s ease-in-out',
                    transform: 'translateY(-10px)',
                  }
                : {}
            }
            onClick={() => handleTileClick(entry.text)}
          >
            <VStack
              _groupHover={!isDisabled ? { filter: 'brightness(0) invert(1)' } : {}}
              sx={step[1].immobilientyp === entry.text ? { filter: 'brightness(0) invert(1)' } : {}}
            >
              <Image src={entry.icon} alt={entry.text} height={64} width={64} />
              <Text fontSize={['sm', 'md', 'lg']} fontWeight='medium' color='secondaryFontColor'>
                {entry.text}
              </Text>
            </VStack>
          </Button>
        );
      })}
    </SimpleGrid>
  );
};
