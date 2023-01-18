import { Center, VStack, Text, SimpleGrid, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import { negativeSCHUFA } from 'data/form';

import React, { FC } from 'react';
import { ResponsiveContainer } from '../Containers';
import { FormValues, TilePropDrill } from './types';

export const NegativeSCHUFA: FC<TilePropDrill> = ({ setFullFormData, setStep }) => {
  const handleTileClick = (tileText: string) => {
    setFullFormData((prev: FormValues) => ({ ...prev, negativeSCHUFA: tileText }));
    setStep(5);
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={4} justifyItems={'center'} pb={10}>
        {negativeSCHUFA.data.map((entry) => (
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
              <Image src={entry.icon} alt={entry.text} height={16} width={16} />
              <Text fontSize={['sm', 'md', 'lg']} fontWeight='medium'>
                {entry.text}
              </Text>
            </VStack>
          </Center>
        ))}
      </SimpleGrid>
      <ResponsiveContainer bg='white' borderRadius='2xl' p={[5, 5, 10]} w={{ lg: 930 }}>
        <Text fontSize={['xl', 'xl', '2xl']} fontWeight={'bold'}>
          Notes on this question
        </Text>
        <UnorderedList pl={[2, 7]} mt={5} fontSize={['m', 'm', 'xl']} spacing={4}>
          <ListItem>
            <Text>
              As part of this request, <strong>we do not retrieve any data</strong> and do not <strong>send any</strong>{' '}
              to <strong>SCHUFA</strong>.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              We need an answer to this question because any negative entries that may exist require a different
              advisory approach and the banks are also selected according to different criteria.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Schufa stores information about contractual relationships based on reports from banks and other
              institutions. In this respect, Schufa entries are completely normal. Existing loans are therefore not
              negative entries.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              If there is a disruption in the contractual relationship, this is noted in the Schufa. These entries are
              considered negative entries.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              For example, terminated loans or accounts as well as other characteristics (insolvency, submission of the
              affidavit) that have arisen due to persistent payment difficulties and have led to a termination of the
              contractual relationship are described as negative.
            </Text>
          </ListItem>
        </UnorderedList>
      </ResponsiveContainer>
    </>
  );
};
