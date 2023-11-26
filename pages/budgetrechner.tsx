import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import CalculatorPartners from '@/components/SealsAndPartners/CalculatorPartners';
import React from 'react';
import { useEffect } from 'react';
const CalculatorIframeListener = () => {
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.origin !== 'https://www.ehyp.de') {
        return;
      } else {
        const data = event.data;
        // Überprüfe, ob data eine Zeichenkette (String) ist, bevor du split verwendest
        if (typeof data === 'string') {
          const splitData = data.split('|||');
          if (splitData.length > 0) {
            const calculatorFrame = document.getElementById('calculatorFrame') as HTMLIFrameElement | null;
            if (calculatorFrame) {
              calculatorFrame.height = splitData[0] + 'px';
            }
          }
        }
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('message', listener, false);
    }
    // Cleanup: Entfernen des Event Listeners beim Unmounten
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('message', listener);
      }
    };
  }, []);
  return (
    <FullWidthContainer>
      <ResponsiveContainer py={[6, 6]}>
        <VStack spacing={16}>
          <VStack spacing={{ base: 4, md: 6 }}>
            <Heading as='h1' fontSize={{ base: '3xl', md: '4xl' }}>
              Budgetrechner
            </Heading>
            <Text textAlign='center'>
              Was darf die Immobilie kosten? Wie viel Kaufsumme samt etwaiger Nebenkosten liegt in Ihrem Rahmen? Dieser
              Budgetrechner rechnet Ihnen schnell aus, wie viel Kreditsumme möglich ist und was dies in etwa kostet.
            </Text>
          </VStack>
        </VStack>
        <VStack spacing={16} my={[5, 6]} px={[2, 5]} bgColor={'white'}>
          <iframe
            id='calculatorFrame'
            width={`100%`}
            height={`100%`}
            src='https://www.ehyp.de/ehyp/servlet/ehyp?view=b2bCalculator&calltype=b2bexternal&calc=showBudget&cst.id.cryptUltd=43533337cqjp-7j1npg5r655hu98i5yl2kf92c57&STYLE=ehypPublic'
          ></iframe>
        </VStack>
      </ResponsiveContainer>
      <Box h={10} bgColor='gray.100' />
      <CalculatorPartners cards={true} />
      <Box h={10} bgColor='gray.100' />
    </FullWidthContainer>
  );
};
export default CalculatorIframeListener;
