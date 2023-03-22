import { CheckCircleIcon } from '@chakra-ui/icons';
import { Button, Heading, HStack, Link, List, ListIcon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import ChakraLink from '../Link/ChakraLink';
const ReactReveal = require('react-reveal');

export const Financing = () => {
  return (
    <FullWidthContainer id='section-finanzierungen' py={[16, 24]} bgColor='gray.100'>
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
                <ChakraLink href='/formular' mt={2}>
                  <Button variant='accent'>Finanzierungvorschlag anfordern</Button>
                </ChakraLink>
              </VStack>
            </ReactReveal.Fade>
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};
