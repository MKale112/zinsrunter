import React from 'react';
import { Box, Button, Center, SelectField, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import InputField from './FormModels/InputField';
import * as yup from 'yup';

const Offer = () => {
  const validationSchema = yup.object().shape({
    salutation: yup.string().required(errorMessages.fieldRequired),
    title: yup.string().required(errorMessages.fieldRequired),
    firstName: yup.string().required(errorMessages.fieldRequired),
    lastName: yup.string().required(errorMessages.fieldRequired),
    phone: yup.number().required(errorMessages.fieldRequired),
    email: yup.string().email(),
    mainEarnerOccupation: yup.string().required(),
  });
  const initialValues = {
    salutation: undefined,
    title: undefined,
    firstName: undefined,
    lastName: undefined,
    phone: undefined,
    email: undefined,
    mainEarnerOccupation: undefined,
  };

  return (
    <Center w={'75%'}>
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
              bgColor='white'
              p={10}
              boxShadow='2xl'
              borderRadius='lg'
              border='1px'
              borderColor='gray.200'
              spacing={6}
            >
              <SimpleGrid columns={2} spacing={6}>
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

              <Text fontSize={14} mb={4}>
                Evaluation of advice and news
              </Text>

              <Text fontSize={14} mb={4}>
                Data sharing
              </Text>

              <Text fontSize={14} mb={4}>
                Call permission
              </Text>

              <Box bgColor='gray.400' w='100%' h='1px' />

              <Text fontSize={20} mb={4}>
                Is everything right?
              </Text>

              <Button variant='accent' type='submit' padding={6} fontSize={20}>
                Request an offer now
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default Offer;
