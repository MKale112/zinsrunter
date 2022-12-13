import { VStack, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import partnerData from '../../data/partners.json';

const Partners = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const partners = partnerData.partners.map((entry) => (
    <Image key={entry.id} src={entry.path} alt={entry.id} width={isMobile ? 100 : 150} height={100} />
  ));

  return (
    <FullWidthContainer py={[4, 12]}>
      <ResponsiveContainer>
        <VStack spacing={[6, 12]}>
          <Heading as='h2' fontSize={['xl', '3xl']}>
            Unsere Partner
          </Heading>
          <Text width={{ base: '80%', md: '75%', lg: '60%' }} textAlign='center'>
            Hier sehen Sie eine kleine Auswahl unserer Partner. Als unabhängiger Immobilienfinanzierungsvermittler sind
            wir an keinen Anbieter gebunden und können so aus einem Pool von über 500 Finanzierungsgebern vermitteln.
          </Text>
          <HStack justifyContent={'center'} wrap='wrap'>
            {partners}
          </HStack>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Partners;
