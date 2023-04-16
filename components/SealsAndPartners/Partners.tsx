import { VStack, Heading, Text, useMediaQuery, Button, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import partnerData from '../../data/partners.json';
import ChakraLink from '../Link/ChakraLink';
const ReactReveal = require('react-reveal');

interface PartnersProps {
  cards: boolean;
}

const Partners = ({ cards = true }: PartnersProps) => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const partners = partnerData.partners.map((entry, index) => (
    <ReactReveal.Fade bottom delay={index * 100} key={entry.id}>
      <Image src={entry.path} alt={entry.id} width={isMobile ? 120 : 150} height={100} />
    </ReactReveal.Fade>
  ));

  return (
    <FullWidthContainer id='section-partners' py={[10, 16]}>
      <ResponsiveContainer>
        <ReactReveal.Fade duration={1000} bottom>
          <VStack spacing={[6, 12]}>
            <Heading as='h2' fontSize={['xl', '3xl']}>
              Unsere Partner
            </Heading>
            <Text
              width={{ base: '80%', md: '75%', lg: '60%' }}
              textAlign='center'
              fontSize={['md', 'xl']}
              color='secondaryFontColor'
            >
              Hier sehen Sie eine kleine Auswahl unserer Partner. Als unabhängiger Immobilienfinanzierungsvermittler
              sind wir an keinen Anbieter gebunden und können so aus einem Pool von über 500 Finanzierungsgebern
              vermitteln.
            </Text>
            <SimpleGrid
              columns={[2, 3, 4, 8]}
              spacingX={{ base: 8, md: 4, lg: 6 }}
              justifyContent='center'
              alignItems='center'
            >
              {partners}
            </SimpleGrid>
            {cards &&
              (isMobile ? (
                <VStack spacing={10}>
                  <ReactReveal.Fade bottom w='30%'>
                    <VStack alignItems='flex-start' bg='gray.200' p={6} borderRadius='2xl' h='full' boxShadow='lg'>
                      <Heading mb={4} as='h3' fontSize={['lg', 'xl']} color='primary.blue' overflowWrap='break-word'>
                        DARLEHEN MIT GEBUNDENEM SOLLZINSSATZ — maximale Kalkulationssicherheit
                      </Heading>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Annuitätendarlehen</strong>
                        <br />
                        Der Klassiker mit festem Zins und fester Rate.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Volltilger-Darlehen</strong>
                        <br />
                        Schneller schuldenfrei mit hoher Tilgung.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Konstant-Darlehen</strong>
                        <br />
                        Feste Rate und fester Zins bis zur kompletten Darlehensrückzahlung.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Zinszahlungsdarlehen (Tilgungsaussetzung)</strong>
                        <br />
                        Steueroptimierung für Kapitalanleger.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Forward-Darlehen</strong>
                        <br />
                        Die Zinsen von heute für die Anschlussfinanzierung sichern.
                      </Text>
                    </VStack>
                  </ReactReveal.Fade>
                  <ReactReveal.Fade bottom w='30%'>
                    <VStack alignItems='flex-start' bg='gray.200' p={6} borderRadius='2xl' h='full' boxShadow='lg'>
                      <Heading mb={4} as='h3' fontSize={['lg', 'xl']} color='primary.blue' overflowWrap='break-word'>
                        DARLEHEN MIT VERÄNDERLICHEM SOLLZINSSATZ — grosse Flexibilität
                      </Heading>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Flex-Darlehen</strong>
                        <br />
                        Variable Zinsen und eine 100%-Sondertilgungsoption.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Kombi-Darlehen</strong>
                        <br />
                        Feste Sollzinsbindung mit variablem Darlehensteil kombiniert.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Cap-Darlehen</strong>
                        <br />
                        Variable Darlehen mit Zinsobergrenze.
                      </Text>
                    </VStack>
                  </ReactReveal.Fade>
                  <ReactReveal.Fade bottom w='30%'>
                    <VStack alignItems='flex-start' bg='gray.200' p={6} borderRadius='2xl' h='full' boxShadow='lg'>
                      <Heading mb={4} as='h3' fontSize={['lg', 'xl']} color='primary.blue' overflowWrap='break-word'>
                        FÖRDERMITTEL, BAUSPAREN UND WOHN-RIESTER — Unterstützung durch &quot;Vater Staat&quot; bei der
                        Immobilienfinanzierung
                      </Heading>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Wohn-Riester-Annuitätendarlehen</strong>
                        <br />
                        Riester-Förderung für die Immobilienfinanzierung.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Fördermittel der KfW</strong>
                        <br />
                        Zinsgünstige Förderdarlehen vom Bund.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Fördermittel der Bundesländer</strong>
                        <br />
                        Zinsgünstige Förderdarlehen von den Bundesländern.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Bausparen</strong>
                        <br />
                        Günstige Zinsen schon lange im Voraus sichern.
                      </Text>
                    </VStack>
                  </ReactReveal.Fade>
                </VStack>
              ) : (
                <SimpleGrid columns={3} gap={10} justifyContent='space-around' alignItems='flex-start'>
                  <ReactReveal.Fade bottom w='30%'>
                    <VStack
                      alignItems='flex-start'
                      bg='gray.100'
                      p={10}
                      borderRadius='2xl'
                      h='full'
                      minH={650}
                      boxShadow='2xl'
                    >
                      <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' overflowWrap='break-word'>
                        DARLEHEN MIT GEBUNDENEM SOLLZINSSATZ — maximale Kalkulationssicherheit
                      </Heading>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Annuitätendarlehen</strong>
                        <br />
                        Der Klassiker mit festem Zins und fester Rate.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Volltilger-Darlehen</strong>
                        <br />
                        Schneller schuldenfrei mit hoher Tilgung.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Konstant-Darlehen</strong>
                        <br />
                        Feste Rate und fester Zins bis zur kompletten Darlehensrückzahlung.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Zinszahlungsdarlehen (Tilgungsaussetzung)</strong>
                        <br />
                        Steueroptimierung für Kapitalanleger.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Forward-Darlehen</strong>
                        <br />
                        Die Zinsen von heute für die Anschlussfinanzierung sichern.
                      </Text>
                    </VStack>
                  </ReactReveal.Fade>
                  <ReactReveal.Fade bottom w='30%'>
                    <VStack
                      alignItems='flex-start'
                      bg='gray.100'
                      p={10}
                      borderRadius='2xl'
                      h='full'
                      minH={650}
                      boxShadow='2xl'
                    >
                      <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' overflowWrap='break-word'>
                        DARLEHEN MIT VERÄNDERLICHEM SOLLZINSSATZ — grosse Flexibilität
                      </Heading>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Flex-Darlehen</strong>
                        <br />
                        Variable Zinsen und eine 100%-Sondertilgungsoption.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Kombi-Darlehen</strong>
                        <br />
                        Feste Sollzinsbindung mit variablem Darlehensteil kombiniert.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Cap-Darlehen</strong>
                        <br />
                        Variable Darlehen mit Zinsobergrenze.
                      </Text>
                    </VStack>
                  </ReactReveal.Fade>
                  <ReactReveal.Fade bottom w='30%'>
                    <VStack
                      alignItems='flex-start'
                      bg='gray.100'
                      p={10}
                      borderRadius='2xl'
                      h='full'
                      minH={650}
                      boxShadow='2xl'
                    >
                      <Heading mb={4} as='h3' fontSize={['lg', '2xl']} color='primary.blue' overflowWrap='break-word'>
                        FÖRDERMITTEL, BAUSPAREN UND WOHN-RIESTER — Unterstützung durch &quot;Vater Staat&quot; bei der
                        Immobilienfinanzierung
                      </Heading>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Wohn-Riester-Annuitätendarlehen</strong>
                        <br />
                        Riester-Förderung für die Immobilienfinanzierung.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Fördermittel der KfW</strong>
                        <br />
                        Zinsgünstige Förderdarlehen vom Bund.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Fördermittel der Bundesländer</strong>
                        <br />
                        Zinsgünstige Förderdarlehen von den Bundesländern.
                      </Text>
                      <Text fontSize={['md', 'xl']} color='secondaryFontColor'>
                        <strong>Bausparen</strong>
                        <br />
                        Günstige Zinsen schon lange im Voraus sichern.
                      </Text>
                    </VStack>
                  </ReactReveal.Fade>
                </SimpleGrid>
              ))}
            {cards && (
              <ChakraLink href='/formular' mt={2}>
                <Button variant='accent'>Jetzt unverbindlich anfragen!</Button>
              </ChakraLink>
            )}
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Partners;
