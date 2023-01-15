import { Box, Heading, Progress, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FormState } from 'data/form';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import { Estate } from './estate';
import { FinanceOffer } from './financeOffer';
import { PropertyUse } from './propertyUse';
import { FormValues, TilePropDrill } from './types';

const formSteps = ['financeOffer', 'estate', 'propertyUse'];
const form = [FinanceOffer, Estate, PropertyUse];

const Formular = () => {
  const router = useRouter();
  const formStep = router.query.step?.toString();
  const stepByUrl = formSteps.indexOf(formStep || 'financeOffer');

  const [step, setStep] = useState<number>(stepByUrl);
  const [fullFormData, setFullFormData] = useState<FormValues>();
  const numberOfSteps = formSteps.length;
  const progress = ((stepByUrl + 1) / numberOfSteps) * 100;
  console.log(fullFormData);

  useEffect(() => {
    router.push(`${formSteps[step]}`);
  }, [step]);

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
                  {FormState[formSteps[stepByUrl] as keyof typeof FormState]}
                </Heading>
                <SimpleGrid columns={3} spacing={4} justifyItems={'center'}>
                  <>
                    {React.createElement(form[stepByUrl], {
                      setFullFormData: setFullFormData,
                      setStep: setStep,
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
