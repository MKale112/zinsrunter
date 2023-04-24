import {
  VStack,
  Heading,
  Text,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  keyframes,
} from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
const ReactReveal = require('react-reveal');

const Highlights = () => {
  const movement = keyframes`
  0% {
		opacity: 0;
		transform: translateX(-50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
  `;

  return (
    <FullWidthContainer id='so-funktioniert' py={[10, 16]} bg='gray.100'>
      <ResponsiveContainer>
        <ReactReveal.Fade duration={1000} bottom>
          <VStack spacing={[6, 12]}>
            <Heading as='h2' fontSize={['xl', '3xl']} textAlign='center' w='80%'>
              Ihre Baufinanzierung mit uns in nur 5 Schritten
            </Heading>
            <Text
              width={{ base: '80%', md: '75%', lg: '60%' }}
              textAlign='center'
              fontSize={['md', 'xl']}
              color='secondaryFontColor'
            >
              So funktioniert die individuelle Baufinanzierung bei Zins-runter.de
            </Text>
            <Accordion allowMultiple w={['90%', '90%', '75%']} borderStyle='none'>
              <AccordionItem
                key='highlight1'
                my={[4, 6]}
                borderTopWidth={0}
                animation={`${movement} 3s ease 0s 1 normal forwards`}
                dropShadow='2xl'
              >
                <Heading as='h2'>
                  <AccordionButton
                    py={[4, 6, 8]}
                    borderRadius='3xl'
                    bgColor='white'
                    _hover={{
                      base: { backgroundColor: 'white', color: 'base' },
                      sm: { backgroundColor: 'primary.acid', color: 'white' },
                    }}
                    _expanded={{ backgroundColor: 'primary.acid', color: 'white' }}
                  >
                    <Box flex='1' textAlign='left' ml={{ base: 2, sm: 4 }}>
                      <Heading as='h2' fontSize={['sm', '2xl']}>
                        Anfrage starten & Anbieter vergleichen
                      </Heading>
                    </Box>
                    <AccordionIcon boxSize={{ base: 8, sm: 10 }} />
                  </AccordionButton>
                </Heading>

                <AccordionPanel py={[2, 4]} ml={4} fontSize={['sm', 'xl']} color='secondaryFontColor'>
                  Wählen Sie in unseren Anfrageformular Ihr Vorhaben, die Immobilienart die gewünschte Finanzierung etc.
                  aus. Anschließend die wichtigsten Ihnen bereits vorliegenden Eckdaten wie etwa den Kaufpreis,
                  mögliches Eigenkapital, mit oder ohne Maklerprovision sowie Angaben zu Ihnen als Kreditnehmer.{' '}
                  <strong>Nach etwa 2 Minuten – Anfrage gestartet</strong>.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                key='highlight2'
                my={[4, 6]}
                borderTopWidth={0}
                animation={`${movement} 3s ease 0s 1 normal forwards`}
                dropShadow='2xl'
              >
                <Heading as='h2'>
                  <AccordionButton
                    py={[4, 6, 8]}
                    borderRadius='3xl'
                    bgColor='white'
                    _hover={{
                      base: { backgroundColor: 'white', color: 'base' },
                      sm: { backgroundColor: 'primary.acid', color: 'white' },
                    }}
                    _expanded={{ backgroundColor: 'primary.acid', color: 'white' }}
                  >
                    <Box flex='1' textAlign='left' ml={{ base: 2, sm: 4 }}>
                      <Heading as='h2' fontSize={['sm', '2xl']}>
                        Vorabeinschätzung durch unsere Experten
                      </Heading>
                    </Box>
                    <AccordionIcon boxSize={{ base: 8, sm: 10 }} />
                  </AccordionButton>
                </Heading>

                <AccordionPanel py={[2, 4]} ml={4} fontSize={['sm', 'xl']} color='secondaryFontColor'>
                  Im ersten Kontakt per Telefon werden Sie mit einem Baufinanzierungsexperten Ihre
                  Finanzierungsmöglichkeiten im Detail besprechen. So können gemeinsam die nächsten Schritte besprochen
                  werden und{' '}
                  <strong>
                    Sie erhalten eine erste Einschätzung wie Ihre ganz individuelle Finanzierung aussehen kann
                  </strong>
                  .
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                key='highlight3'
                my={[4, 6]}
                borderTopWidth={0}
                animation={`${movement} 3s ease 0s 1 normal forwards`}
                dropShadow='2xl'
              >
                <Heading as='h2'>
                  <AccordionButton
                    py={[4, 6, 8]}
                    borderRadius='3xl'
                    bgColor='white'
                    _hover={{
                      base: { backgroundColor: 'white', color: 'base' },
                      sm: { backgroundColor: 'primary.acid', color: 'white' },
                    }}
                    _expanded={{ backgroundColor: 'primary.acid', color: 'white' }}
                  >
                    <Box flex='1' textAlign='left' ml={{ base: 2, sm: 4 }}>
                      <Heading as='h2' fontSize={['sm', '2xl']}>
                        Individuellen Finanzierungsvorschlag erhalten
                      </Heading>
                    </Box>
                    <AccordionIcon boxSize={{ base: 8, sm: 10 }} />
                  </AccordionButton>
                </Heading>

                <AccordionPanel py={[2, 4]} ml={4} fontSize={['sm', 'xl']} color='secondaryFontColor'>
                  Gleich im Anschluss ermittelt Ihr Baufinanzierungsexperten{' '}
                  <strong>aus den Produkten und Möglichkeiten von mehr als 500 Finanzierungs-Anbietern</strong> das zu
                  Ihrem Vorhaben passende Finanzierungsmodell und lässt Ihnen{' '}
                  <strong>ein individuelles Angebot per E-Mail zukommen</strong>.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                key='highlight4'
                my={[4, 6]}
                borderTopWidth={0}
                animation={`${movement} 3s ease 0s 1 normal forwards`}
                dropShadow='2xl'
              >
                <Heading as='h2'>
                  <AccordionButton
                    py={[4, 6, 8]}
                    borderRadius='3xl'
                    bgColor='white'
                    _hover={{
                      base: { backgroundColor: 'white', color: 'base' },
                      sm: { backgroundColor: 'primary.acid', color: 'white' },
                    }}
                    _expanded={{ backgroundColor: 'primary.acid', color: 'white' }}
                  >
                    <Box flex='1' textAlign='left' ml={{ base: 2, sm: 4 }}>
                      <Heading as='h2' fontSize={['sm', '2xl']}>
                        Alle erforderlichen Unterlagen vervollständigen
                      </Heading>
                    </Box>
                    <AccordionIcon boxSize={{ base: 8, sm: 10 }} />
                  </AccordionButton>
                </Heading>

                <AccordionPanel py={[2, 4]} ml={4} fontSize={['sm', 'xl']} color='secondaryFontColor'>
                  <strong>
                    Die für die Finanzierung benötigten Unterlagen können Sie uns per Post oder E-Mail zukommen lassen
                  </strong>
                  . Wir werden diese umgehend prüfen und falls Dokumente fehlen oder sonstige Unklarheiten bestehen, bei
                  Ihnen melden.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                key='highlight5'
                my={[4, 6]}
                borderTopWidth={0}
                animation={`${movement} 3s ease 0s 1 normal forwards`}
                dropShadow='2xl'
              >
                <Heading as='h2'>
                  <AccordionButton
                    py={[4, 6, 8]}
                    borderRadius='3xl'
                    bgColor='white'
                    _hover={{
                      base: { backgroundColor: 'white', color: 'base' },
                      sm: { backgroundColor: 'primary.acid', color: 'white' },
                    }}
                    _expanded={{ backgroundColor: 'primary.acid', color: 'white' }}
                  >
                    <Box flex='1' textAlign='left' ml={{ base: 2, sm: 4 }}>
                      <Heading as='h2' fontSize={['sm', '2xl']}>
                        Finanzierungszusage & Baufinanzierung abschließen
                      </Heading>
                    </Box>
                    <AccordionIcon boxSize={{ base: 8, sm: 10 }} />
                  </AccordionButton>
                </Heading>

                <AccordionPanel py={[2, 4]} ml={4} fontSize={['sm', 'xl']} color='secondaryFontColor'>
                  Sobald der Finanzierungs-Anbieter Ihre Unterlagen positiv geprüft hat, erhalten Sie über uns Ihre
                  persönliche Finanzierungszusage.{' '}
                  <strong>
                    Jetzt wird der Kreditvertrag erstellt und sobald der Vertrag unterschrieben ist, kann der
                    vereinbarte Kreditbetrag ausgezahlt werden
                  </strong>{' '}
                  – je nach vereinbartem Zeitplan und Auszahlungstermin.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Highlights;
