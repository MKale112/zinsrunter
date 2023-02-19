import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import { Box, Center, Heading, SimpleGrid, useMediaQuery, VStack, Text, Button, HStack, Link } from '@chakra-ui/react';
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

const Kontakt = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
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

  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object().shape({
    anrede: yup.string(),
    vorname: yup.string().required(errorMessages.fieldRequired),
    nachname: yup.string().required(errorMessages.fieldRequired),
    strasseHausnummer: yup.string().required(errorMessages.fieldRequired),
    ort: yup.string().required(errorMessages.fieldRequired),
    mobilnummer: yup.string().matches(phoneRegex).typeError(errorMessages.isNum).required(errorMessages.fieldRequired),
    email: yup.string().required(errorMessages.fieldRequired),
    datenschultzAgbAkzeptiert: yup.boolean().required(errorMessages.fieldRequired),
  });

  const initialValues = {
    anrede: '',
    vorname: '',
    nachname: '',
    strasseHausnummer: '',
    ort: '',
    mobilnummer: null,
    email: '',
    anmerkungen: '',
    datenschultzAgbAkzeptiert: false,
  };

  return (
    <FullWidthContainer bgColor={'gray.100'}>
      <Box h={10} bgColor='primary.blue' />
      <ResponsiveContainer py={[16, 24]}>
        <VStack spacing={16}>
          <VStack spacing={{ base: 4, md: 8 }}>
            <Heading as='h1' fontSize={{ base: '4xl', md: '5xl' }}>
              KONTAKT
            </Heading>
            <Heading as='h2' fontSize={{ base: '2xl', md: '3xl' }} color={'secondaryFontColor'}>
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
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleSubmit }) => (
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
                      options={['Mr', 'Mrs']}
                      placeholder='Bitte auswählen'
                    />

                    <SimpleGrid width='full' columns={isMobile ? 1 : 2} gap={4}>
                      <Field
                        component={InputField}
                        name='vorname'
                        type='text'
                        label='Vorname'
                        placeholder='Bitte eingeben'
                      />

                      <Field
                        component={InputField}
                        name='nachname'
                        type='text'
                        label='Nachname'
                        placeholder='Bitte eingeben'
                      />

                      <Field
                        component={InputField}
                        name='strasseHausnummer'
                        type='text'
                        label='Straße/Hausnummer'
                        placeholder='Bitte eingeben'
                      />

                      <Field component={InputField} name='ort' type='text' label='Ort' placeholder='Bitte eingeben' />

                      <Field
                        component={InputField}
                        name='mobilnummer'
                        type='text'
                        label='Mobilnummer'
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
                      name='anmerkungen'
                      type='text'
                      label='Anmerkungen'
                      placeholder='Werden absolut Vertraulich behandelt'
                    />

                    <HStack width='full' justifyContent='flex-start'>
                      <Field
                        component={CheckboxField}
                        name='datenschultzAgbAkzeptiert'
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
                    </HStack>

                    <Button variant='accent' type='submit' padding={6} fontSize={20}>
                      Absenden
                    </Button>
                  </VStack>
                </Form>
              )}
            </Formik>
          </VStack>
          <HStack alignItems='center' spacing={8}>
            <Image src='/ssl-icon.png' alt='Übermittlung über Sicherheitsserver' height={75} width={75} />
            <Text fontSize={['xl', 'xl', '2xl']} color='secondaryFontColor' maxW={200}>
              Übermittlung über Sicherheitsserver
            </Text>
          </HStack>
        </VStack>
      </ResponsiveContainer>
      <Box h={10} bgColor='primary.acid' />
    </FullWidthContainer>
  );
};

export default Kontakt;
