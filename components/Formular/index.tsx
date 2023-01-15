import { Box, Button, Heading, Progress, SimpleGrid, Text, VStack } from '@chakra-ui/react';
// import { estate } from 'data/form';
import React, { useState } from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';

// const Step2 = () => {
//   return (
//     <VStack py={10}>
//       <Heading as='h3' fontSize={['lg', 'xl']} pb={8}>
//         Die Immobilie
//       </Heading>
//       <SimpleGrid columns={3} spacing='50px' w='full'>
//         {estate.map((entry) => (
//           <Center
//             key={entry.key}
//             bg='white'
//             borderRadius='2xl'
//             border='1px'
//             borderColor='gray.300'
//             height='100px'
//             w={300}
//           >
//             <VStack>
//               {React.createElement(entry.icon, { h: '24px', w: '24px' })}
//               <Text>{entry.text}</Text>
//             </VStack>
//           </Center>
//         ))}
//       </SimpleGrid>
//     </VStack>
//   );
// };

// const Step3 = () => {
//   return (
//     <VStack py={10}>
//       <Heading as='h3' fontSize={['lg', 'xl']} pb={8}>
//         Die Immobilie
//       </Heading>
//       <SimpleGrid columns={3} spacing='50px' w='full'>
//         <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
//         <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
//         <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
//       </SimpleGrid>
//     </VStack>
//   );
// };

const Formular = () => {
  const [step, setStep] = useState<number>(1);
  const numberOfSteps = 5;
  const progress = (step / numberOfSteps) * 100;
  return (
    <FullWidthContainer bg={'gray.100'}>
      <Progress
        bgColor='gray.200'
        colorScheme='green'
        size='sm'
        hasStripe={step === numberOfSteps ? false : true}
        value={progress}
      />
      <ResponsiveContainer>
        <VStack minHeight='75vh' py={16}>
          <VStack py={10}>
            <Heading as='h3' fontSize={['xl', '2xl']} pb={8}>
              Kostenloses Finanzierungsangebot
            </Heading>
            <Text color='secondaryFontColor'>Vergleichen Sie mit uns mehr als 450 Anbieter für Baufinanzierungen.</Text>
            <Text color='secondaryFontColor'>Profitieren Sie von günstigen Zinsen und kompetenter Beratung.</Text>
          </VStack>
          <Box bgColor='gray.400' w='75%' h='1px' />
          <VStack py={10}>
            <Heading as='h3' fontSize={['lg', 'xl']} pb={8}>
              Kostenloses Finanzierungsangebot
            </Heading>
            <SimpleGrid columns={3} spacing='50px' w='full'>
              <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
              <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
              <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
              <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
              <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
              <Box bg='white' borderRadius='2xl' border='1px' borderColor='gray.300' height='100px' w={300}></Box>
            </SimpleGrid>
          </VStack>
        </VStack>
        <Button variant='accent' onClick={() => setStep(step + 1)}>
          Next Step
        </Button>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Formular;
