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
          Hinweise zu dieser Frage
        </Text>
        <UnorderedList pl={[2, 7]} mt={5} fontSize={['m', 'm', 'xl']} spacing={4}>
          <ListItem>
            <Text>
              Im Rahmen dieser Anfrage <strong>rufen wir keine Daten ab</strong> und <strong>senden auch keine</strong>{' '}
              an die <strong>SCHUFA</strong>.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Wir benötigen eine Antwort auf diese Frage, weil ggf. vorhandene negative Einträge einen anderen
              Beratungsansatz erfordern und auch die Auswahl der Banken nach anderen Kriterien erfolgt.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Die Schufa speichert aufgrund der Meldung von Banken und anderen Instituten, Informationen über
              Vertragsverhältnisse. Insofern sind Schufa-Einträge völlig normal. Vorhandene Kredite sind also keine
              Negativeinträge.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Kommt es zu einer Störung des Vertragsverhältnisses, wird das in der Schufa vermerkt. Diese Einträge
              gelten als Negativeinträge.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Als negativ werden zum Beispiel gekündigte Kredite oder Konten sowie andere Merkmale (Insolvenz, Abgabe
              der eidesstattlichen Versicherung) bezeichnet, die durch anhaltende Zahlungsschwierigkeiten entstanden
              sind und zu einer Kündigung des Vertragsverhältnisses geführt haben.
            </Text>
          </ListItem>
        </UnorderedList>
      </ResponsiveContainer>
    </>
  );
};
