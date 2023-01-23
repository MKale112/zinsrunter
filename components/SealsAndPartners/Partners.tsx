import { VStack, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import partnerData from '../../data/partners.json';
const ReactReveal = require('react-reveal');

const Partners = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const partners = partnerData.partners.map((entry, index) => (
    <ReactReveal.Fade bottom delay={index * 100} key={entry.id}>
      <Image src={entry.path} alt={entry.id} width={isMobile ? 100 : 150} height={100} />
    </ReactReveal.Fade>
  ));

  return (
    <FullWidthContainer id='section-partners' py={[16, 24]}>
      <ResponsiveContainer>
        <ReactReveal.Fade bottom>
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
            <HStack justifyContent={'center'} wrap='wrap'>
              {partners}
            </HStack>
          </VStack>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Partners;
