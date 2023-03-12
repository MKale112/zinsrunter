import React from 'react';
import { Box, Button, Center, SimpleGrid, VStack, Text, Link, HStack, Tooltip, Divider } from '@chakra-ui/react';
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
import { countries } from 'data/countries';

const Offer = () => {
  const [step, setStep] = useRecoilState(stepState);

  const validationSchema = yup.object().shape({
    anrede: yup.string().required(errorMessages.fieldRequired),
    titel: yup.string(),
    vorName: yup.string().required(errorMessages.fieldRequired),
    nachName: yup.string().required(errorMessages.fieldRequired),
    geburtsdatum: yup.date().required(errorMessages.fieldRequired),
    strasseHausnummer: yup.string().required(errorMessages.fieldRequired),
    plzOrt: yup.string().required(errorMessages.fieldRequired),
    familienstand: yup.string().required(errorMessages.fieldRequired),
    staatsangehorigkeit: yup.string().required(errorMessages.fieldRequired),
    mobilnummer: yup.string().phone('', false, errorMessages.invalidPhone).required(errorMessages.fieldRequired),
    email: yup.string().email(errorMessages.invalidEmail),
    erreichbarkeit: yup.string().required(errorMessages.fieldRequired),
    haupterwerbstätigkeit: yup.string().required(errorMessages.fieldRequired),
    anmerkungen: yup.string(),
    videoBeratung: yup.string(),
    newsletter: yup.boolean(),
    agb: yup.boolean(),
  });
  const initialValues: OfferData = {
    anrede: step[1].offer?.anrede || '',
    titel: step[1].offer?.titel || '',
    vorName: step[1].offer?.vorName || '',
    nachName: step[1].offer?.nachName || '',
    geburtsdatum: step[1].offer?.geburtsdatum || '',
    strasseHausnummer: step[1].offer?.strasseHausnummer || '',
    familienstand: step[1].offer?.familienstand || '',
    staatsangehorigkeit: step[1].offer?.staatsangehorigkeit || '',
    plzOrt: step[1].offer?.plzOrt || `${step[1].region?.zipcode}` || '',
    mobilnummer: step[1].offer?.mobilnummer || '',
    email: step[1].offer?.email || '',
    erreichbarkeit: step[1].offer?.erreichbarkeit || '',
    haupterwerbstätigkeit: step[1].offer?.haupterwerbstätigkeit || '',
    anmerkungen: step[1].offer?.anmerkungen || '',
    videoBeratung: step[1].offer?.videoBeratung || 'Ja',
    newsletter: step[1].offer?.newsletter || false,
    agb: step[1].offer?.agb || false,
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
        {({ handleSubmit, values }) => (
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
                  value={values.anrede}
                  type='select'
                  label='Anrede'
                  default='No'
                  options={['Herr', 'Frau']}
                  placeholder='Bitte auswählen'
                />

                <Field
                  component={SelectField}
                  name='titel'
                  value={values.titel}
                  type='select'
                  label='Titel'
                  default=''
                  options={['Dr', 'prof', 'Prof. Dr.']}
                  placeholder='Falls zutreffend, bitte auswälhen'
                />
              </SimpleGrid>
              <Divider />

              <SimpleGrid w='full' columns={2} spacing={6}>
                <Field
                  component={InputField}
                  name='vorName'
                  value={values.vorName}
                  type='text'
                  label='Vorname'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={InputField}
                  name='nachName'
                  value={values.nachName}
                  type='text'
                  label='Nachname'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={InputField}
                  name='geburtsdatum'
                  value={values.geburtsdatum}
                  type='date'
                  label='Geburtsdatum'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={InputField}
                  name='strasseHausnummer'
                  value={values.strasseHausnummer}
                  type='text'
                  label='Straße / Hausnummer'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={InputField}
                  name='plzOrt'
                  value={values.plzOrt}
                  type='text'
                  label='PLZ / Ort'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={SelectField}
                  options={['Ledig', 'Verheiratet', 'Getrennt lebend', 'Geschieden', 'Verwitwet']}
                  name='familienstand'
                  type='text'
                  label='Familienstand'
                  placeholder='Bitte auswählen'
                />

                <Field
                  component={SelectField}
                  options={countries}
                  name='staatsangehorigkeit'
                  type='text'
                  label='Staatsangehörigkeit'
                  placeholder='Bitte auswählen'
                />

                <Field
                  component={SelectField}
                  name='haupterwerbstätigkeit'
                  type='select'
                  label='Haupterwerbstätigkeit'
                  default=''
                  options={[
                    'Angestellte/r',
                    'Beamte/r',
                    'Geringfügig beschäftigt',
                    'Elternzeit',
                    'Selbstständige/r (nicht bil.)',
                    'Selbstständige/r (bilanzierend)',
                    'Freiberufler/in',
                    'Geschäftsf. Gesellschafter/in',
                    'Rentner/in',
                    'Privatier',
                    'Student/in',
                    'Hausmann/-frau',
                    'Arbeitslos',
                  ]}
                  placeholder='Bitte auswählen'
                />
              </SimpleGrid>

              <Divider />

              <Tooltip
                label='Auch wir mögen keine Werbemails und -anrufe! Deshalb garantieren wir Ihnen, dass wir Ihre Daten auf
                    keinen Fall an unbeteiligte Dritte weitergeben.'
              >
                <Text cursor='pointer' textDecoration='underline' fontWeight='bold'>
                  Ihre Privatsphäre ist uns wichtig!
                </Text>
              </Tooltip>

              <SimpleGrid w='full' columns={2} spacing={6}>
                <Field
                  component={InputField}
                  name='mobilnummer'
                  value={values.mobilnummer}
                  type='text'
                  label='Mobilnummer'
                  placeholder='Bitte eingeben'
                />
                <Field
                  component={InputField}
                  name='email'
                  value={values.email}
                  type='email'
                  label='Email'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={SelectField}
                  options={['jederzeit', '8-10 Uhr', '10-13 Uhr', '13-16 Uhr', '6-19 Uhr', 'nach 19 Uhr']}
                  name='erreichbarkeit'
                  type='text'
                  label='Erreichbarkeit'
                  placeholder='Bitte auswählen'
                />
              </SimpleGrid>
              <Divider />

              <SimpleGrid w='full' columns={2} spacing={6}>
                <Field
                  component={RadioField}
                  name='videoBeratung'
                  value={values.videoBeratung}
                  label='Wünschen Sie eine Videoberatung?'
                />

                <Field component={TextAreaField} name='anmerkungen' label='Sonstige optionale Angaben' />
              </SimpleGrid>

              <Box bgColor='gray.400' w='100%' h='1px' />

              <Field
                component={CheckboxField}
                name='newsletter'
                value={values.newsletter}
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
                value={values.agb}
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
