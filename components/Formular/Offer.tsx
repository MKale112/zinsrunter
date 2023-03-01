import React from 'react';
import { Box, Button, Center, SimpleGrid, VStack, Text, Link, HStack } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import InputField from './FormModels/InputField';
import * as yup from 'yup';
import 'yup-phone';
import SelectField from './FormModels/SelectField';
import CheckboxField from './FormModels/CheckboxField';
import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';
import { OfferData } from './types';
import ChakraLink from '../Link/ChakraLink';
import RadioField from './FormModels/RadioField';
import TextAreaField from './FormModels/TextAreaField';
import Image from 'next/image';

const Offer = () => {
  const [_step, setStep] = useRecoilState(stepState);

  const validationSchema = yup.object().shape({
    anrede: yup.string().required(errorMessages.fieldRequired),
    titel: yup.string().required(errorMessages.fieldRequired),
    vorName: yup.string().required(errorMessages.fieldRequired),
    nachName: yup.string().required(errorMessages.fieldRequired),
    mobilnummer: yup.string().phone('', false, errorMessages.invalidPhone).required(errorMessages.fieldRequired),
    email: yup.string().email(errorMessages.invalidEmail),
    haupterwerbstätigkeit: yup.string().required(errorMessages.fieldRequired),
    anmerkungen: yup.string(),
    videoBeratung: yup.string(),
    newsletter: yup.boolean(),
    agb: yup.boolean(),
  });
  const initialValues: OfferData = {
    anrede: '',
    titel: '',
    vorName: '',
    nachName: '',
    mobilnummer: '',
    email: '',
    haupterwerbstätigkeit: '',
    anmerkungen: '',
    videoBeratung: 'Ja',
    newsletter: false,
    agb: false,
  };

  return (
    <Center w={['100%', '100%', '80%', '80%', '65%']}>
      <Formik
        // eslint-disable-next-line
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={(values) => {
          console.log('usa');
          setStep((currValue) => [7, { ...currValue[1], offer: values }]);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <VStack
              bgColor='white'
              p={10}
              boxShadow='2xl'
              borderRadius='lg'
              border='1px'
              borderColor='gray.200'
              spacing={6}
            >
              <SimpleGrid w='full' columns={2} spacing={6}>
                <Field
                  component={SelectField}
                  name='anrede'
                  type='select'
                  label='Anrede'
                  default='No'
                  options={['Mr', 'Mrs']}
                  placeholder='Bitte auswählen'
                />

                <Field
                  component={SelectField}
                  name='titel'
                  type='select'
                  label='Titel'
                  default=''
                  options={['dr', 'prof', 'Prof. Dr.']}
                  placeholder='Bitte wählen Sie aus, ob es auf Sie zutrifft'
                />

                <Field component={InputField} name='vorName' type='text' label='Vorname' placeholder='Bitte eingeben' />

                <Field
                  component={InputField}
                  name='nachName'
                  type='text'
                  label='Nachname'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={InputField}
                  name='mobilnummer'
                  type='text'
                  label='Mobilnummer'
                  placeholder='Bitte eingeben'
                />
                <Field component={InputField} name='email' type='email' label='Email' placeholder='Bitte eingeben' />
              </SimpleGrid>

              <Field
                component={SelectField}
                name='haupterwerbstätigkeit'
                type='select'
                label='Haupterwerbstätigkeit'
                default=''
                options={[
                  'Employee',
                  'Official',
                  'Marginally employed',
                  'Maternity leave',
                  'Self employed',
                  'Self employed (not qualified)',
                  'Self employed (balancing)',
                  'Freelancer',
                  'Businessperson shareholder',
                  'Not working',
                  'Pensioner',
                  'Privateer',
                  'Student',
                  'Housewife',
                  'Uneployed',
                ]}
                placeholder='Bitte auswählen'
              />

              <Field component={RadioField} name='videoBeratung' label='Wünschen Sie eine Videoberatung?' />

              <Field component={TextAreaField} name='anmerkungen' label='Sonstige optionale Angaben:' />

              <Box bgColor='gray.400' w='100%' h='1px' />

              <Field
                component={CheckboxField}
                name='newsletter'
                label={
                  <Text>
                    Ich bin an weiteren <Link href='mailto:matejkalebic112@gmail.com'>Informationen/Newsletter</Link>{' '}
                    per E-Mail interessiert.
                  </Text>
                }
              />

              <Field
                component={CheckboxField}
                name='agb'
                label={
                  <Text>
                    <ChakraLink _hover={{ textDecoration: 'underline' }} href='/datenschultz'>
                      Datenschutz
                    </ChakraLink>{' '}
                    und{' '}
                    <ChakraLink _hover={{ textDecoration: 'underline' }} href='/agb'>
                      AGB
                    </ChakraLink>{' '}
                    akzeptiert
                  </Text>
                }
              />

              <Box bgColor='gray.400' w='100%' h='1px' />

              <VStack spacing={6}>
                <HStack alignItems='center' spacing={4}>
                  <Image src='/ssl-icon.png' alt='Übermittlung über Sicherheitsserver' height={30} width={30} />
                  <Text>Alle Ihre Daten werden sicher SSL-verschlüsselt übertragen!</Text>
                </HStack>
                <HStack alignItems='center' textAlign='center' spacing={4}>
                  <Image
                    src='/icons/self-inhabited.webp'
                    alt='unverbindliche Konditionsangebote'
                    height={30}
                    width={35}
                  />
                  <Text>
                    Sie erhalten nur unverbindliche Konditions¬angebote. <br />
                    Es wird kein Abschluss getätigt.
                  </Text>
                </HStack>
              </VStack>

              <Box bgColor='gray.400' w='100%' h='1px' />

              <VStack>
                <Text fontSize={20}>Stimmt so alles?</Text>
                <Button variant='accent' type='submit' padding={6} fontSize={20}>
                  Jetzt Angebot anfordern
                </Button>
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default Offer;
