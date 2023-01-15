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
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import highlightStepsData from '../../data/highlights.json';

const Highlights = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
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

  const highlights = highlightStepsData.steps.map((entry) => (
    <AccordionItem
      key={entry.id}
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
          _hover={{ backgroundColor: 'primary.acid', color: 'white' }}
          _expanded={{ backgroundColor: 'primary.acid', color: 'white' }}
        >
          <Box flex='1' textAlign='left' ml={isMobile ? 2 : 4}>
            <Heading as='h2' fontSize={['sm', '2xl']}>
              {entry.title}
            </Heading>
          </Box>
          <AccordionIcon boxSize={isMobile ? 8 : 10} />
        </AccordionButton>
      </Heading>

      <AccordionPanel py={[2, 4]} ml={4} fontSize={['sm', '2xl']}>
        {entry.text}
      </AccordionPanel>
    </AccordionItem>
  ));

  return (
    <FullWidthContainer id='section-highlights' py={[16, 24]} bg='gray.100'>
      <ResponsiveContainer>
        <VStack spacing={[6, 12]}>
          <Heading as='h2' fontSize={['xl', '3xl']} textAlign='center' w='80%'>
            Ihre Baufinan¬zierung mit uns in nur 5 Schritten
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
            {highlights}
          </Accordion>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Highlights;
