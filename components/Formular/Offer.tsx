import React, { FC } from 'react';
import { Box, Button, Center, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import InputField from './FormModels/InputField';
import * as yup from 'yup';
import SelectField from './FormModels/SelectField';
import CheckboxField from './FormModels/CheckboxField';
import { FormValues, OfferData, TilePropDrill } from './types';

const Offer: FC<TilePropDrill> = ({ setFullFormData, setStep }) => {
  const validationSchema = yup.object().shape({
    salutation: yup.string().required(errorMessages.fieldRequired),
    title: yup.string().required(errorMessages.fieldRequired),
    firstName: yup.string().required(errorMessages.fieldRequired),
    lastName: yup.string().required(errorMessages.fieldRequired),
    phone: yup.number().required(errorMessages.fieldRequired),
    email: yup.string().email(),
    mainEarnerOccupation: yup.string().required(),
    newsletter: yup.boolean(),
    dataSharing: yup.boolean(),
    permissionToCall: yup.boolean(),
  });
  const initialValues: OfferData = {
    salutation: '',
    title: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    mainEarnerOccupation: '',
    newsletter: false,
    dataSharing: false,
    permissionToCall: false,
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
          setFullFormData((prevValues: FormValues) => ({ ...prevValues, offer: values }));
          setStep(7);
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
                  name='salutation'
                  type='select'
                  label='Salutation'
                  default='No'
                  options={['Mr', 'Mrs']}
                  placeholder='Please select'
                />

                <Field
                  component={SelectField}
                  name='title'
                  type='select'
                  label='Title'
                  default='No'
                  options={['dr', 'prof', 'Prof. Dr.']}
                  placeholder='If applicable, please select'
                />

                <Field
                  component={InputField}
                  name='firstName'
                  type='text'
                  label='First Name'
                  placeholder='Please enter'
                />

                <Field
                  component={InputField}
                  name='lastName'
                  type='text'
                  label='Last Name'
                  placeholder='Please enter'
                />

                <Field component={InputField} name='phone' type='number' label='Phone' placeholder='Please enter' />
                <Field component={InputField} name='email' type='email' label='Email' placeholder='Please enter' />
              </SimpleGrid>

              <Field
                component={SelectField}
                name='mainEarnerOccupation'
                type='select'
                label='Occupation of the main earner'
                default='No'
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
                placeholder='Please select'
              />

              <Box bgColor='gray.400' w='100%' h='1px' />

              <Box alignSelf='flex-start'>
                <Field component={CheckboxField} name='newsletter' label='Bewertung der Beratung und News' />
                <Text fontSize={14}>
                  Ja, Zins-runter darf mir eine Bitte um Bewertung der Finanzierungsberatung, weiterführende
                  Informationen und Angebote per Email schicken. Ich kann diese Einwilligung jederzeit mit Wirkung für
                  die Zukunft widerrufen.
                </Text>
              </Box>

              <Box alignSelf='flex-start'>
                <Field component={CheckboxField} name='dataSharing' label='Datenweitergabe' />
                <Text fontSize={14}>
                  Ja, ich stimme für die Erstellung meines Angebotes widerruflich der Weitergabe meiner eingegebenen
                  Daten an die Baufi24 Baufinanzierung AG und meinen zukünftigen Finanzierungsberater zu (bitte beachten
                  Sie hierzu die Datenschutzerklärung).
                </Text>
              </Box>

              <Box alignSelf='flex-start'>
                <Field component={CheckboxField} name='permissionToCall' label='Anruferlaubnis' />
                <Text fontSize={14}>
                  Ja, mein Berater darf mich telefonisch kontaktieren. Eine optimale Angebotserstellung und/oder
                  Beratung ist nur dann möglich, wenn der für Sie zuständige Finanzierungsberater mit Ihnen Rücksprache
                  halten kann.
                </Text>
              </Box>

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
