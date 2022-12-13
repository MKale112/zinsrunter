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
} from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import highlightStepsData from '../../data/highlights.json';

const Highlights = () => {
  const highlights = highlightStepsData.steps.map((entry) => (
    <AccordionItem key={entry.id} my={[2, 4]}>
      <Heading as='h2'>
        <AccordionButton border={'none'}>
          <Box as='span' flex='1' textAlign='left'>
            <Heading as='h2' fontSize={['xl', '2xl']}>
              {entry.title}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>

      <AccordionPanel pb={4}>{entry.text}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <FullWidthContainer py={[4, 12]}>
      <ResponsiveContainer>
        <VStack spacing={[6, 12]}>
          <Heading as='h2' fontSize={['xl', '3xl']}>
            Ihre Baufinan¬zierung mit uns in nur 5 Schritten
          </Heading>
          <Text width={{ base: '80%', md: '75%', lg: '60%' }} textAlign='center'>
            So funktioniert die individuelle Baufinanzierung bei Zins-runter.de
          </Text>
          <Accordion allowToggle allowMultiple w={['90%', '90%', '75%']}>
            {highlights}
          </Accordion>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Highlights;
