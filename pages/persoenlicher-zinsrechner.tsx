import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import { Box, Heading, VStack } from '@chakra-ui/react';
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
              const numberValue: number = +splitData[0];
              const frameHeigth10 = 10;
              const frameHeigth = numberValue + frameHeigth10;
              calculatorFrame.height = frameHeigth + 'px';
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
      <ResponsiveContainer py={[16, 24]}>
        <VStack spacing={16}>
          <VStack spacing={{ base: 4, md: 8 }}>
            <Heading as='h1' fontSize={{ base: '3xl', md: '4xl' }}>
              Zins-Check
            </Heading>
          </VStack>
        </VStack>
        <VStack spacing={16} my={[5, 10]} px={[2, 5]} bgColor={'white'}>
          <iframe
            id='calculatorFrame'
            width={`100%`}
            height={`100%`}
            src='https://www.ehyp.de/angular/calcpac/interest-calculator?cst.id.cryptUltd=435333379lh4hl3olhqv1ezjkjtn6s4wcutp57'
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
