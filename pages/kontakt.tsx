import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useMediaQuery,
  VStack,
  Text,
  Button,
  HStack,
  Link,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
import kontaktData from '../data/kontakt.json';
import * as yup from 'yup';
import { errorMessages } from 'data/errorMessages';
import InputField from '@/components/Formular/FormModels/InputField';
import SelectField from '@/components/Formular/FormModels/SelectField';
import TextAreaField from '@/components/Formular/FormModels/TextAreaField';
import CheckboxField from '@/components/Formular/FormModels/CheckboxField';
import ChakraLink from '@/components/Link/ChakraLink';
import axios from 'axios';

const Kontakt = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const toast = useToast();
  const kontaktCards = kontaktData.kontakt.map((entry) => (
    <Center key={entry.id} h='full'>
      <Box
        maxW={400}
        minH={isMobile ? 200 : 250}
        h='full'
        w='full'
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        overflow={'hidden'}
      >
        <Box p={6}>
          <VStack spacing={4} align={'center'} textAlign='center'>
            <Image src={entry.icon} alt={entry.title} height={75} width={75} />
            <Heading fontSize={['xl', 'xl', '3xl']} color={'primary.blue'} fontWeight={600} fontFamily={'body'}>
              {entry.title}
            </Heading>
            <Text color={'secondaryFontColor'}>
              {entry.text}{' '}
              {entry.link && (
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href={entry.link.href}
                >
                  {entry.link.text}
                </Link>
              )}
            </Text>
          </VStack>
        </Box>
      </Box>
    </Center>
  ));

  const phoneRegex = /^[+]?[\d-]+$/;
  const houseNumberRegex = /^[\d]+[a-zA-Z]*\s*[a-zA-Z]*$/;

  const validationSchema = yup.object().shape({
    anrede: yup.string(),
    vorname: yup.string().required(errorMessages.fieldRequired),
    name: yup.string().required(errorMessages.fieldRequired),
    strasse: yup.string().required(errorMessages.fieldRequired),
    hausnummer: yup.string().matches(houseNumberRegex, errorMessages),
    ort: yup.string().required(errorMessages.fieldRequired),
    telefon: yup.string().matches(phoneRegex).typeError(errorMessages.isNum).required(errorMessages.fieldRequired),
    email: yup.string().required(errorMessages.fieldRequired),
    bemerkung: yup.string(),
    agb: yup.boolean().oneOf([true], errorMessages.termsAndConditions).required(errorMessages.fieldRequired),
  });

  const initialValues = {
    anrede: '',
    vorname: '',
    name: '',
    strasse: '',
    hausnummer: undefined,
    ort: '',
    telefon: null,
    email: '',
    bemerkung: '',
    agb: false,
  };

  return (
    <FullWidthContainer bgColor={'gray.100'}>
      <Box h={10} bgColor='primary.blue' />
      <ResponsiveContainer py={[16, 24]}>
        <VStack spacing={16}>
          <VStack spacing={{ base: 4, md: 8 }}>
            <Heading as='h1' fontSize={{ base: '3xl', md: '4xl' }}>
              Kontakt
            </Heading>
            <Heading as='h2' fontSize={{ base: 'xl', md: '2xl' }} color={'secondaryFontColor'}>
              Wie können wir Ihnen helfen?
            </Heading>
          </VStack>
          <SimpleGrid columns={isMobile ? 1 : 2} gap={8}>
            {kontaktCards}
          </SimpleGrid>

          <Box h={2} bgColor='primary.blue' w='40%' rounded='lg' />

          <VStack id='kontakt-form' spacing={{ base: 4, md: 8 }}>
            <Heading as='h2' fontSize={{ base: '2xl', md: '3xl' }} color={'secondaryFontColor'}>
              Kontaktieren Sie uns unten
            </Heading>
            <Formik
              // eslint-disable-next-line
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnChange={true}
              validateOnBlur={false}
              onSubmit={async (values) => {
                const response = await axios.post(`${process.env.WEBSITE_URL}/api/kontakt`, values);
                if (response.status === 200) {
                  toast({
                    title: 'Einreichung erfolgreich',
                    status: 'success',
                    duration: 5000,
                    isClosable: false,
                  });
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
              {({ handleSubmit, values }) => (
                <Form onSubmit={handleSubmit}>
                  <VStack
                    minWidth={isMobile ? '90vw' : '50vw'}
                    bgColor='white'
                    p={10}
                    boxShadow='2xl'
                    borderRadius='lg'
                    border='1px'
                    borderColor='gray.200'
                    spacing={4}
                    width='full'
                  >
                    <Field
                      component={SelectField}
                      name='anrede'
                      type='select'
                      label='Anrede'
                      default='No'
                      options={['Herr', 'Frau']}
                      placeholder='Bitte auswählen'
                    />

                    <SimpleGrid width='full' columns={isMobile ? 1 : 2} spacing={6}>
                      <Field
                        component={InputField}
                        name='vorname'
                        type='text'
                        label='Vorname'
                        placeholder='Bitte eingeben'
                      />

                      <Field
                        component={InputField}
                        name='name'
                        type='text'
                        label='Nachname'
                        placeholder='Bitte eingeben'
                      />

                      <HStack alignItems='flex-end'>
                        <Field
                          component={InputField}
                          name='strasse'
                          type='text'
                          label='Straße/Hausnummer'
                          placeholder='Bitte eingeben'
                          width='75%'
                        />
                        <Field
                          component={InputField}
                          name='hausnummer'
                          type='number'
                          label=''
                          placeholder='...'
                          width='25%'
                        />
                      </HStack>

                      <Field component={InputField} name='ort' type='text' label='Ort' placeholder='Bitte eingeben' />

                      <Field
                        component={InputField}
                        name='telefon'
                        type='text'
                        label='Telefon- / Mobilnr.'
                        placeholder='Bitte eingeben'
                      />
                      <Field
                        component={InputField}
                        name='email'
                        type='text'
                        label='Email'
                        placeholder='Bitte eingeben'
                      />
                    </SimpleGrid>

                    <Field
                      component={TextAreaField}
                      name='bemerkung'
                      type='text'
                      label='Anmerkungen'
                      placeholder='Werden absolut Vertraulich behandelt'
                    />

                    <HStack width='full' justifyContent='flex-start'>
                      <Field
                        component={CheckboxField}
                        value={values.agb}
                        name='agb'
                        label={
                          <Text color='secondaryFontColor'>
                            <ChakraLink _hover={{ textDecoration: 'underline' }} href='/datenschutz'>
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
                    </HStack>

                    <HStack alignItems='center' spacing={4} py={4}>
                      <Image src='/ssl-icon.png' alt='Übermittlung über Sicherheitsserver' height={30} width={30} />
                      <Text>Alle Ihre Daten werden sicher SSL-verschlüsselt übertragen!</Text>
                    </HStack>

                    <Button variant='accent' type='submit' padding={6} fontSize={20}>
                      Absenden
                    </Button>
                  </VStack>
                </Form>
              )}
            </Formik>
          </VStack>
        </VStack>
      </ResponsiveContainer>
      <Box h={10} bgColor='primary.acid' />
    </FullWidthContainer>
  );
};

export default Kontakt;
