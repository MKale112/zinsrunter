import React from 'react';
import { Center, VStack, SelectField, Button, Text, Box } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import InputField from './FormModels/InputField';

interface ProjectNumbersData {
  landPrice: number | undefined;
  paid: string | undefined;
  buildingCosts: number | undefined;
  broker: number | undefined;
  equityCapital: number | undefined;
}

const ProjectNumbers = () => {
  const validationSchema = yup.object().shape({
    landPrice: yup.number().required(errorMessages.fieldRequired).positive().integer(),
    paid: yup.string().required(errorMessages.fieldRequired),
    buildingCosts: yup.number().required(errorMessages.fieldRequired).positive().integer(),
    broker: yup.number().positive().integer(),
    equityCapital: yup.number().required(errorMessages.fieldRequired).positive().integer(),
  });
  const initialValues: ProjectNumbersData = {
    landPrice: undefined,
    paid: undefined,
    buildingCosts: 0,
    broker: undefined,
    equityCapital: undefined,
  };

  return (
    <Center w='35%'>
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
              <Field
                component={InputField}
                name='landPrice'
                type='number'
                label='Land price'
                placeholder='Please specify'
              />

              <Field
                component={SelectField}
                name='paid'
                type='select'
                label='Already paid?'
                default='No'
                options={['No', 'Yes - paid with equity', 'Yes - paid with a bank financing']}
                placeholder='Please select'
              />

              <Field
                component={InputField}
                name='buildingCosts'
                type='text'
                label='Building costs'
                placeholder='Please enter'
              />

              <Field component={InputField} name='broker' type='number' label='Broker' placeholder='Please enter' />

              <Text fontSize={14} mb={4}>
                The suggested brokerage fee corresponds to the usual regional level. However, you can change them if
                necessary or even omit them completely.
              </Text>

              <Field
                component={InputField}
                name='equityCapital'
                type='number'
                label='Equity capital'
                placeholder='Please enter'
              />

              <Box w='full' h='2px' bgColor='primary.acid' />

              <Text fontSize={14} mb={4}>
                Loan amount
              </Text>

              <Box bgColor='gray.400' w='75%' h='1px' />

              <Button variant='accent' type='submit' padding={6} fontSize={20}>
                Accept values and continue to the last step
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default ProjectNumbers;
