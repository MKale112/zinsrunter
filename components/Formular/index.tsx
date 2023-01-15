import { Box, Heading, Progress, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FormState } from 'data/form';
import React, { useState } from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import { Estate } from './estate';
import { FinanceOffer } from './financeOffer';
import { PropertyUse } from './propertyUse';
import { FormValues, TilePropDrill } from './types';

const formSteps = ['financeOffer', 'estate', 'propertyUse'];
const form = [FinanceOffer, Estate, PropertyUse];

const Formular = () => {
  const [step, setStep] = useState<number>(0);
  const [fullFormData, setFullFormData] = useState<FormValues>();
  const numberOfSteps = 5;
  const progress = (step + 1 / numberOfSteps) * 100;

  const handleStepChange = (step: number) => {
    setStep(step);
    console.log(fullFormData);
  };

  return (
    <>
      {
        <FullWidthContainer bg={'gray.100'}>
          <Progress
            bgColor='gray.200'
            colorScheme='green'
            size='sm'
            hasStripe={step != numberOfSteps}
            value={progress}
          />
          <ResponsiveContainer>
            <VStack minHeight='75vh' py={!step ? 16 : 0}>
              {!step && (
                <>
                  <VStack py={10}>
                    <Heading as='h3' fontSize={['xl', '2xl']} pb={8}>
                      Free financing offer
                    </Heading>
                    <Text color='secondaryFontColor'>Compare more than 450 mortgage lending providers with us.</Text>
                    <Text color='secondaryFontColor'>Benefit from low interest rates and competent advice.</Text>
                  </VStack>
                  <Box bgColor='gray.400' w='75%' h='1px' />
                </>
              )}
              <VStack py={10} w='full'>
                <Heading as='h3' fontSize={['lg', 'xl']} pb={8}>
                  {FormState[formSteps[step] as keyof typeof FormState]}
                </Heading>
                <SimpleGrid columns={3} spacing={4} justifyItems={'center'}>
                  <>
                    {React.createElement(form[step], {
                      setFullFormData: setFullFormData,
                      setStep: handleStepChange,
                    } as TilePropDrill)}
                  </>
                </SimpleGrid>
              </VStack>
            </VStack>
          </ResponsiveContainer>
        </FullWidthContainer>
      }
    </>
  );
};

export default Formular;
