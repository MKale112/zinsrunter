import { Box, Heading, Progress, Text, VStack } from '@chakra-ui/react';
import { FormState } from 'data/form';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import { Estate } from './Estate';
import { FinanceOffer } from './FinanceOffer';
import { ThankYou } from './ThankYou';
import { NegativeSCHUFA } from './NegativeSCHUFA';
import Offer from './Offer';
import ProjectNumbers from './ProjectNumbers';
import { PropertyUse } from './PropertyUse';
import { Region } from './Region';
import { FormValues, TilePropDrill } from './types';
import { RecoilRoot } from 'recoil';
// const ReactReveal = require('react-reveal');

const formSteps = [
  'financeOffer',
  'estate',
  'propertyUse',
  'region',
  'negativeSCHUFA',
  'projectNumbers',
  'offer',
  'thankYou',
];
const form = [FinanceOffer, Estate, PropertyUse, Region, NegativeSCHUFA, ProjectNumbers, Offer, ThankYou];

const Formular = () => {
  const router = useRouter();
  const formStep = router.query.step?.toString();
  const stepByUrl = formSteps.indexOf(formStep || 'financeOffer');

  // const stepState = atom<number>({
  //   key: 'step',
  //   default: stepByUrl,
  // });

  // const [step, setstep] = useRecoilState(stepState);

  const [step, setStep] = useState<number>(stepByUrl);
  const [fullFormData, setFullFormData] = useState<FormValues>();
  const numberOfSteps = formSteps.length;
  const progress = ((stepByUrl + 1) / numberOfSteps) * 100;
  console.log(fullFormData);

  useEffect(() => {
    router.push(`${formSteps[step]}`);
  }, [step]);

  return (
    <RecoilRoot>
      <FullWidthContainer bg={'gray.100'}>
        <Progress bgColor='gray.200' colorScheme='green' size='sm' hasStripe={step != numberOfSteps} value={progress} />
        <ResponsiveContainer>
          <VStack minHeight='65vh' h='fit-content' py={!step ? 16 : 0} justifyContent='center'>
            {!step && (
              <>
                <VStack py={6} textAlign='center'>
                  <Heading as='h3' fontSize={['xl', '2xl']} pb={3}>
                    Kostenloses Finanzierungsangebot
                  </Heading>
                  <Text color='secondaryFontColor'>
                    Nehmen Sie sich ein paar Minuten Zeit. Einfach das Formular ausfüllen und abschicken. Ihr
                    persönlicher Berater wird sich danach bei Ihnen melden.
                    <br />
                    Unverbindlich und garantiert kostenfrei. So einfach geht Baufinanzierung.
                  </Text>
                </VStack>
                <Box bgColor='gray.400' w='75%' h='1px' />
              </>
            )}

            <VStack py={10} w='full'>
              <Heading as='h3' fontSize={['lg', 'xl', 'xl', '3xl']} pb={8}>
                {FormState[formSteps[stepByUrl] as keyof typeof FormState]}
              </Heading>
              <>
                {React.createElement(form[stepByUrl], {
                  setFullFormData: setFullFormData,
                  setStep: setStep,
                } as TilePropDrill)}
              </>
            </VStack>
          </VStack>
        </ResponsiveContainer>
      </FullWidthContainer>
    </RecoilRoot>
  );
};

export default Formular;
