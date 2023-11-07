import { VStack, Heading, Text, useMediaQuery, Button, SimpleGrid, Box } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import partnerData from '../../data/partners.json';
import ChakraLink from '../Link/ChakraLink';
import LinkButton from '../LinkButton';
const ReactReveal = require('react-reveal');

interface PartnersProps {
  cards: boolean;
}

const CalculatorPartners = ({ cards = true }: PartnersProps) => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const buttonText = 'Finanzierungsvorschläge anfordern';
  const partners = partnerData.partners.map((entry, index) => (
    <ReactReveal.Fade bottom delay={index * 80} key={entry.id}>
      <Image src={entry.path} alt={entry.id} width={isMobile ? 120 : 150} height={100} />
    </ReactReveal.Fade>
  ));

  return (
    <FullWidthContainer id='partners' py={[10, 16]}>
      <ResponsiveContainer>
        <ReactReveal.Fade duration={700} bottom>
          <VStack spacing={[6, 12]}>
            {cards && (
              <ChakraLink href='/formular' mt={2}>
                <LinkButton buttonText={buttonText} />
              </ChakraLink>
            )}
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
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default CalculatorPartners;
