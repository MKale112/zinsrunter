import { stepState } from '@/core/atoms';
import { Center, VStack, Text, SimpleGrid, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import { schufa } from 'data/form';
import React from 'react';
import { useRecoilState } from 'recoil';
import { ResponsiveContainer } from '../Containers';

export const NegativeSCHUFA = () => {
  const [step, setStep] = useRecoilState(stepState);
  const handleTileClick = (tileText: string) => {
    setStep((currValue) => [5, { ...currValue[1], schufa: tileText }]);
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={4} justifyItems={'center'} pb={10}>
        {schufa.data.map((entry) => (
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
            sx={step[1].schufa === entry.text ? { bgColor: 'primary.acid', boxShadow: '2xl' } : {}}
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
              sx={step[1].schufa === entry.text ? { filter: 'brightness(0) invert(1)' } : {}}
            >
              <Image src={entry.icon} alt={entry.text} height={16} width={16} />
              <Text fontSize={['sm', 'md', 'lg']} fontWeight='medium' color='secondaryFontColor'>
                {entry.text}
              </Text>
            </VStack>
          </Center>
        ))}
      </SimpleGrid>
      <ResponsiveContainer bg='white' borderRadius='2xl' p={[5, 5, 10]} w={{ lg: 930 }}>
        <Text fontSize={['xl', 'xl', '2xl']} fontWeight={'bold'} color='secondaryFontColor'>
          Wichtige Hinweise zu dieser Frage
        </Text>
        <UnorderedList pl={[2, 7]} mt={5} fontSize={['m', 'm', 'xl']} spacing={4} color='secondaryFontColor'>
          <ListItem>
            <Text>
              <strong>Im Rahmen dieser Anfrage werden wir keine SCHUFA Daten von Ihnen abrufen.</strong>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <strong>Ebenso senden wir garantiert keine Daten an die SCHUFA.</strong>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Wir benötigen eine Antwort auf diese Frage, weil ggf. vorhandene negative Einträge wichtig sind bei der
              Auswahl der Banken, die dann nach anderen Kriterien erfolgt.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Die Schufa speichert in der Regel aufgrund der Meldung Informationen über Vertragsverhältnisse. Diese
              Meldungen werden von Banken und anderen Instituten der SCHUFA übermittelt.{' '}
              <strong>Insofern sind Schufa-Einträge völlig normal.</strong>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Als negativer Eintrag werden zum Beispiel gekündigte Kredite oder Konten, Insolvenz, die Abgabe der
              eidesstattlichen Versicherung usw. bezeichnet.
            </Text>
          </ListItem>
        </UnorderedList>
      </ResponsiveContainer>
    </>
  );
};
