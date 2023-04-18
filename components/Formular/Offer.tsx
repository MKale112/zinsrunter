import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  SimpleGrid,
  VStack,
  Text,
  Link,
  HStack,
  Divider,
  useToast,
  Stack,
  Spinner,
} from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import InputField from './FormModels/InputField';
import * as yup from 'yup';
import 'yup-phone';
import SelectField from './FormModels/SelectField';
import CheckboxField from './FormModels/CheckboxField';
import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';
import { FormValues, OfferData } from './types';
import RadioField from './FormModels/RadioField';
import TextAreaField from './FormModels/TextAreaField';
import Image from 'next/image';
import { countries } from 'data/countries';
import axios from 'axios';
import Popup from '../Popups';
import { LocalStorageGCLID, SubscribeBody } from '@/core/types';
import { dataLayer, formatDate, houseNumberRegex, phoneRegex, zipcodeRegex } from '@/core/utils';

const Offer = () => {
  const [step, setStep] = useRecoilState(stepState);

  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const validationSchema = yup.object().shape({
    anrede: yup.string().required(errorMessages.fieldRequired),
    titel: yup.string(),
    vorname: yup.string().required(errorMessages.fieldRequired),
    name: yup.string().required(errorMessages.fieldRequired),
    geburtsdatum: yup.date().required(errorMessages.fieldRequired),
    strasse: yup.string().required(errorMessages.fieldRequired),
    hausnummer: yup.string().when('strasse', {
      is: (val: string) => !val || val.trim() === '',
      then: yup.string().required('\u00a0'),
      otherwise: yup.string().matches(houseNumberRegex, errorMessages.invalidInput),
    }),
    plz: yup.string().matches(zipcodeRegex, errorMessages.zipcodeInvalidInput).required(errorMessages.fieldRequired),
    ort: yup.string().required(errorMessages.fieldRequired),
    staatsangehorigkeit: yup.string().required(errorMessages.fieldRequired),
    telefon: yup.string().matches(phoneRegex, errorMessages.invalidPhone).required(errorMessages.fieldRequired),
    email: yup.string().email(errorMessages.invalidEmail),
    erreichbarkeit: yup.string().required(errorMessages.fieldRequired),
    bemerkung: yup.string(),
    videoberatung: yup.string().required(errorMessages.fieldRequired),
    newsletter: yup.boolean(),
    agb: yup.boolean().oneOf([true], errorMessages.termsAndConditions).required(errorMessages.agbRequired),
  });
  const initialValues: OfferData = {
    anrede: step[1].offer?.anrede || '',
    titel: step[1].offer?.titel || '',
    vorname: step[1].offer?.vorname || '',
    name: step[1].offer?.name || '',
    geburtsdatum: step[1].offer?.geburtsdatum || '',
    strasse: step[1].offer?.strasse || '',
    hausnummer: step[1].offer?.hausnummer || '',
    staatsangehorigkeit: step[1].offer?.staatsangehorigkeit || '',
    plz: step[1].offer?.plz || '',
    ort: step[1].offer?.ort || '',
    telefon: step[1].offer?.telefon || '',
    email: step[1].offer?.email || '',
    erreichbarkeit: step[1].offer?.erreichbarkeit || '',
    bemerkung: step[1].offer?.bemerkung || '',
    videoberatung: step[1].offer?.videoberatung || 'Ja',
    newsletter: step[1].offer?.newsletter || false,
    agb: step[1].offer?.agb || false,
  };

  const fullData = {} as FormValues;

  return (
    <Center w={['100%', '100%', '80%', '80%', '65%']}>
      <Formik
        // eslint-disable-next-line
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={async (values, { resetForm }) => {
          // setStep((currValue) => [7, { ...currValue[1], offer: values }]);

          const currDate = new Date().getTime();
          const gclid = JSON.parse(localStorage.getItem('gclid') || '{}') as LocalStorageGCLID;
          const isGclidValid = gclid && currDate < gclid.expiryDate;

          if (values.newsletter) {
            const body: SubscribeBody = {
              email: values.email,
              vorname: values.vorname,
              name: values.name,
              anrede: values.anrede,
              sparte_seite: 'baufin',
              plz: values.plz,
              ort: values.ort,
              berufsstatus: step[1].region.berufsstatus,
              geburtsdatum: values.geburtsdatum,
            };
            await axios
              .post(`/api/subscribe`, body)
              .then((res) => console.log(res.data))
              .catch((error) => console.log('Subscription was unsuccessful: ', error));
          }

          const formattedDate = formatDate(new Date(values.geburtsdatum), 'geburtsdatum');
          Object.assign(
            fullData,
            step[1],
            { offer: { ...values, geburtsdatum: formattedDate } },
            { gclid_field: isGclidValid ? gclid.value : '' },
          );

          const response = await axios.post(`/api/formular`, fullData);
          if (response.status === 200) {
            resetForm();

            dataLayer.push({
              event: 'formSubmissionSuccess',
              eventCategory: 'formSubmission',
              email: values.email,
              telefon: values.telefon,
            });
            toast({
              title: 'Einreichung erfolgreich',
              status: 'success',
              duration: 5000,
              isClosable: false,
            });
            setStep((currValue) => [7, { ...currValue[1], offer: values }]);
          } else {
            toast({
              title: 'Fehler beim Senden Ihrer Anfrage',
              status: 'error',
              duration: 5000,
              isClosable: false,
            });
          }
        }}
      >
        {({ handleSubmit, values, isSubmitting }) => (
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
              <SimpleGrid w='full' columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
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

              <SimpleGrid w='full' columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
                <Field
                  component={InputField}
                  name='vorname'
                  value={values.vorname}
                  type='text'
                  label='Vorname'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={InputField}
                  name='name'
                  value={values.name}
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
                  maxDate={`${new Date().getFullYear() + 100}-12-31`}
                  minDate={`${new Date().getFullYear() - 100}-01-01`}
                />

                <HStack alignItems='flex-end'>
                  <Field
                    component={InputField}
                    name='strasse'
                    value={values.strasse}
                    type='text'
                    label='Straße / Hausnummer'
                    placeholder='Bitte eingeben'
                  />
                  <Field
                    component={InputField}
                    name='hausnummer'
                    value={values.hausnummer}
                    type='number'
                    label=''
                    placeholder=''
                    width={'25%'}
                  />
                </HStack>

                <Field
                  component={InputField}
                  name='plz'
                  value={values.plz}
                  type='text'
                  label='PLZ'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={InputField}
                  name='ort'
                  value={values.ort}
                  type='text'
                  label='Ort'
                  placeholder='Bitte eingeben'
                />

                <Field
                  component={SelectField}
                  options={countries}
                  name='staatsangehorigkeit'
                  type='text'
                  label='Staatsangehörigkeit'
                  placeholder='Bitte auswählen'
                />

                <Field component={TextAreaField} name='bemerkung' label='Sonstige optionale Angaben' />
              </SimpleGrid>
              <Divider />

              <Stack direction={{ base: 'column', sm: 'row' }} fontSize={['sm']}>
                <Text fontWeight='bold' w={{ base: 'full', sm: '60%' }}>
                  Ihre Privatsphäre ist uns wichtig!
                </Text>
                <Text>
                  Auch wir mögen keine Werbemails und Anrufe. Deshalb garantieren wir Ihnen, dass wir Ihre Daten auf
                  keinen Fall an unbeteiligte Dritte weitergeben.
                </Text>
              </Stack>

              <SimpleGrid w='full' columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
                <Field
                  component={InputField}
                  name='telefon'
                  value={values.telefon}
                  type='text'
                  label='Telefon- / Mobilnr.'
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

                <Field
                  component={RadioField}
                  name='videoberatung'
                  value={values.videoberatung}
                  label='Wünschen Sie eine Videoberatung?'
                />
              </SimpleGrid>

              <Box bgColor='gray.400' w='100%' h='1px' />

              <Field
                component={CheckboxField}
                name='newsletter'
                value={values.newsletter}
                label={
                  <Text color='secondaryFontColor'>
                    Ich bin an weiteren{' '}
                    <Link
                      _hover={{ textDecoration: 'underline' }}
                      color='primary.linkBlue'
                      onClick={() => {
                        setIsOpen(true);
                        setPopupContent('Newsletter');
                      }}
                    >
                      Informationen/Newsletter
                    </Link>{' '}
                    per E-Mail interessiert.
                  </Text>
                }
              />
              <Field
                component={CheckboxField}
                name='agb'
                value={values.agb}
                label={
                  <Text color='secondaryFontColor'>
                    <Link
                      _hover={{ textDecoration: 'underline' }}
                      color='primary.linkBlue'
                      onClick={() => {
                        setIsOpen(true);
                        setPopupContent('Datenschutz');
                      }}
                    >
                      Datenschutz
                    </Link>{' '}
                    und{' '}
                    <Link
                      _hover={{ textDecoration: 'underline' }}
                      color='primary.linkBlue'
                      onClick={() => {
                        setIsOpen(true);
                        setPopupContent('AGB');
                      }}
                    >
                      AGB
                    </Link>{' '}
                    akzeptiert
                  </Text>
                }
              />
              <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} popupContent={popupContent} />

              <Box bgColor='gray.400' w='100%' h='1px' />

              <VStack spacing={6} fontSize={['xs', 'sm']} alignItems={{ base: 'flex-start', sm: 'center' }}>
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
                    Sie erhalten nur unverbindliche Konditions-Vorschläge. <br />
                    Es wird kein Abschluss getätigt.
                  </Text>
                </HStack>
              </VStack>

              <Box bgColor='gray.400' w='100%' h='1px' />

              <VStack>
                <Text fontSize={20}>Stimmt so alles?</Text>

                {isSubmitting ? (
                  <Spinner size='xl' thickness='7px' speed='0.65s' color='primary.acid' />
                ) : (
                  <Button variant='accent' type='submit' padding={6} fontSize={20} disabled={isSubmitting}>
                    Jetzt Angebot anfordern
                  </Button>
                )}
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default Offer;
