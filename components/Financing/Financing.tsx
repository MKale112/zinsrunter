import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  SimpleGrid,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import ChakraLink from '../Link/ChakraLink';
const ReactReveal = require('react-reveal');

export const Financing = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  return (
    <FullWidthContainer id='section-financing-options' py={[16, 24]}>
      <ResponsiveContainer>
        <ReactReveal.Fade bottom>
          <VStack spacing={[10, 20]}>
            <ReactReveal.Fade bottom>
              <VStack spacing={10} alignItems='center'>
                <Heading as='h2' fontSize={['xl', '3xl']} textAlign='center'>
                  Derzeit können wir folgende Finanzierungen anbieten:
                </Heading>
                <List w={['90%', '80%', '80%', '60%', '50%']} spacing={3} listStylePosition='outside'>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>Beleihung bis 111% des Kaufpreises/Verkehrswerts</Text>
                  </HStack>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>Darlehenssummen ab 25 TEUR (keine Obergrenze)</Text>
                  </HStack>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>Objekte in ganz Deutschland (derzeit noch keine Auslandsimmobilien)</Text>
                  </HStack>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>Alle Beschäftigungsarten (auch Selbständige, Privatiers etc.)</Text>
                  </HStack>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>
                      Alle Finanzierungsvorhaben (Kauf einer bestehenden Immobilie, Eigenes Bauvorhaben, Kauf eines
                      Neubaus, Anschlussfinanzierung/Modernisierung, Kapitalbeschaffungen für andere Zwecke)
                    </Text>
                  </HStack>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>Alle Nutzungsarten (Eigennutzung, Gemischtnutzung, Vermietung)</Text>
                  </HStack>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>
                      Mehrfamilienhäuser (
                      <Link
                        href='https://www.ehyp.de/ehyp/b2b/PH_Investorenfinanzierungen.pdf'
                        target='_blank'
                        rel='noreferrer'
                        color='primary.blue'
                        fontWeight='semibold'
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Hinweise beachten
                      </Link>
                      )
                    </Text>
                  </HStack>
                  <HStack alignItems='flex-start' fontSize={['md', 'xl']} color='secondaryFontColor'>
                    <ListIcon mt={1.5} as={CheckCircleIcon} color='primary.blue' />
                    <Text>
                      Teilgewerblich genutzte Objekte (max. 50%,{' '}
                      <Link
                        href='https://www.ehyp.de/ehyp/b2b/PH_Investorenfinanzierungen.pdf'
                        target='_blank'
                        rel='noreferrer'
                        color='primary.blue'
                        fontWeight='semibold'
                        _hover={{ textDecoration: 'underline' }}
                      >
                        bitte Einschränkungen beachten
                      </Link>
                      )
                    </Text>
                  </HStack>
                </List>
              </VStack>
            </ReactReveal.Fade>
            {isMobile ? (
              <VStack spacing={10}>
                <ReactReveal.Fade bottom w='30%'>
                  <VStack bg='gray.200' p={6} borderRadius='2xl' h='full' boxShadow='lg'>
                    <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' wordBreak='break-all'>
                      DARLEHEN MIT GEBUNDENEM SOLLZINSSATZ — MAXIMALE KALKULATIONSSICHERHEIT
                    </Heading>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Annuitätendarlehen</strong> — Der Klassiker mit festem Zins und fester Rate.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Volltilger-Darlehen</strong> — Schneller schuldenfrei mit hoher Tilgung.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Konstant-Darlehen</strong> — Feste Rate und fester Zins bis zur kompletten
                      Darlehensrückzahlung.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Zinszahlungsdarlehen (Tilgungsaussetzung)</strong> — Steueroptimierung für Kapitalanleger.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Forward-Darlehen</strong> — Die Zinsen von heute für die Anschlussfinanzierung sichern.
                    </Text>
                  </VStack>
                </ReactReveal.Fade>
                <ReactReveal.Fade bottom w='30%'>
                  <VStack bg='gray.200' p={6} borderRadius='2xl' h='full' boxShadow='lg'>
                    <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' wordBreak='break-all'>
                      DARLEHEN MIT VERÄNDERLICHEM SOLLZINSSATZ — GROSSE FLEXIBILITÄT
                    </Heading>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Flex-Darlehen</strong> — Variable Zinsen und eine 100%-Sondertilgungsoption.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Kombi-Darlehen</strong> — Feste Sollzinsbindung mit variablem Darlehensteil kombiniert.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Cap-Darlehen</strong> — Variable Darlehen mit Zinsobergrenze.
                    </Text>
                  </VStack>
                </ReactReveal.Fade>
                <ReactReveal.Fade bottom w='30%'>
                  <VStack bg='gray.200' p={6} borderRadius='2xl' h='full' boxShadow='lg'>
                    <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' wordBreak='break-all'>
                      FÖRDERMITTEL, BAUSPAREN UND WOHN-RIESTER — UNTERSTÜTZUNG VON &quot;VATER STAAT&quot; FÜR DIE
                      IMMOBILIENFINANZIERUNG
                    </Heading>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Wohn-Riester-Annuitätendarlehen</strong> — Riester-Förderung für die
                      Immobilienfinanzierung.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Fördermittel der KfW</strong> — Zinsgünstige Förderdarlehen vom Bund.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Fördermittel der Bundesländer</strong> — Zinsgünstige Förderdarlehen von den
                      Bundesländern.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Bausparen</strong> — Günstige Zinsen schon lange im Voraus sichern.
                    </Text>
                  </VStack>
                </ReactReveal.Fade>
              </VStack>
            ) : (
              <SimpleGrid columns={3} gap={10} justifyContent='space-around' alignItems='flex-start'>
                <ReactReveal.Fade bottom w='30%'>
                  <VStack bg='gray.100' p={10} borderRadius='2xl' h='full' minH={650} boxShadow='2xl'>
                    <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' wordBreak='break-all'>
                      DARLEHEN MIT GEBUNDENEM SOLLZINSSATZ — MAXIMALE KALKULATIONSSICHERHEIT
                    </Heading>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Annuitätendarlehen</strong> — Der Klassiker mit festem Zins und fester Rate.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Volltilger-Darlehen</strong> — Schneller schuldenfrei mit hoher Tilgung.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Konstant-Darlehen</strong> — Feste Rate und fester Zins bis zur kompletten
                      Darlehensrückzahlung.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Zinszahlungsdarlehen (Tilgungsaussetzung)</strong> — Steueroptimierung für Kapitalanleger.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Forward-Darlehen</strong> — Die Zinsen von heute für die Anschlussfinanzierung sichern.
                    </Text>
                  </VStack>
                </ReactReveal.Fade>
                <ReactReveal.Fade bottom w='30%'>
                  <VStack bg='gray.100' p={10} borderRadius='2xl' h='full' minH={650} boxShadow='2xl'>
                    <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' wordBreak='break-all'>
                      DARLEHEN MIT VERÄNDERLICHEM SOLLZINSSATZ — GROSSE FLEXIBILITÄT
                    </Heading>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Flex-Darlehen</strong> — Variable Zinsen und eine 100%-Sondertilgungsoption.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Kombi-Darlehen</strong> — Feste Sollzinsbindung mit variablem Darlehensteil kombiniert.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Cap-Darlehen</strong> — Variable Darlehen mit Zinsobergrenze.
                    </Text>
                  </VStack>
                </ReactReveal.Fade>
                <ReactReveal.Fade bottom w='30%'>
                  <VStack bg='gray.100' p={10} borderRadius='2xl' h='full' minH={650} boxShadow='2xl'>
                    <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' wordBreak='break-all'>
                      FÖRDERMITTEL, BAUSPAREN UND WOHN-RIESTER — UNTERSTÜTZUNG VON &quot;VATER STAAT&quot; FÜR DIE
                      IMMOBILIENFINANZIERUNG
                    </Heading>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Wohn-Riester-Annuitätendarlehen</strong> — Riester-Förderung für die
                      Immobilienfinanzierung.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Fördermittel der KfW</strong> — Zinsgünstige Förderdarlehen vom Bund.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Fördermittel der Bundesländer</strong> — Zinsgünstige Förderdarlehen von den
                      Bundesländern.
                    </Text>
                    <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                      <strong>Bausparen</strong> — Günstige Zinsen schon lange im Voraus sichern.
                    </Text>
                  </VStack>
                </ReactReveal.Fade>
              </SimpleGrid>
            )}
            <ChakraLink href='/formular' mt={2}>
              <Button variant='accent'>Jetzt unverbindlich anfragen!</Button>
            </ChakraLink>
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};
