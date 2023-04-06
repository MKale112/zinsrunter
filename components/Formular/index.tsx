import { Box, Heading, Progress, Text, VStack, VisuallyHidden } from '@chakra-ui/react';
import { FormState } from 'data/form';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import { Estate } from './Estate';
import { FinanceOffer } from './FinanceOffer';
import { ThankYou } from './ThankYou';
import { NegativeSCHUFA } from './NegativeSCHUFA';
import Offer from './Offer';
import ProjectNumbers from './ProjectNumbers';
import { PropertyUse } from './PropertyUse';
import { Region } from './Region';
import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';
import { toTitleCase } from '@/core/utils';
import Head from 'next/head';

// const ReactReveal = require('react-reveal');

const formSteps = [
  'finanzierungszweck',
  'immobilientyp',
  'nutzung',
  'region',
  'schufa',
  'projektnummern',
  'angebot',
  'dankbarkeit',
];
const form = [FinanceOffer, Estate, PropertyUse, Region, NegativeSCHUFA, ProjectNumbers, Offer, ThankYou];

const Formular = () => {
  const router = useRouter();
  const formStep = router.query.step?.toString();
  const stepByUrl = formSteps.indexOf(formStep || 'finanzierungszweck');

  const [step, _setStep] = useRecoilState(stepState);

  const numberOfSteps = formSteps.length;
  const progress = ((stepByUrl + 1) / numberOfSteps) * 100;

  useEffect(() => {
    router.push(`${formSteps[step[0]]}${step[0] === 7 ? '?thankyou=1' : ''}`);
  }, [step]);

  console.log(step);

  return (
    <>
      <FullWidthContainer bg={'gray.100'}>
        <VisuallyHidden>
          <Heading as='h1'>{toTitleCase(formSteps[step[0]])}</Heading>
        </VisuallyHidden>
        <Progress
          bgColor='gray.200'
          colorScheme='green'
          size='sm'
          hasStripe={step[0] != numberOfSteps}
          value={progress}
        />
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
              <Heading as='h3' fontSize={['lg', 'xl', 'xl', '3xl']} pb={{ base: 4, md: 8 }} textAlign='center'>
                {FormState[formSteps[stepByUrl] as keyof typeof FormState]}
              </Heading>
              <>{React.createElement(form[stepByUrl])}</>
            </VStack>
          </VStack>
        </ResponsiveContainer>
      </FullWidthContainer>
    </>
  );
};

export default Formular;
