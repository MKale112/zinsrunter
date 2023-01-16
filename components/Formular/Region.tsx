import React from 'react';
import { Center, VStack, SelectField, Button, Text } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import InputField from './FormModels/InputField';
import * as yup from 'yup';

interface RegionData {
  zipcode: number | undefined;
  location: string | undefined;
  searchStatus: string | undefined;
  householdNetMonthly: number | undefined;
  netRentalIncomeMonthly: number | undefined;
}

const Region = () => {
  const validationSchema = yup.object().shape({
    zipcode: yup
      .number()
      .positive()
      .integer()
      .test('is-zipcode', 'Invalid zipcode format', (value: any) => {
        if (!/^\d{5}(?:[-\s]\d{4})?$/.test(value)) {
          return true;
        }
        return true;
      })
      .required(errorMessages.fieldRequired),
    location: yup.string().required(errorMessages.fieldRequired),
    searchStatus: yup.string(),
    householdNetMonthly: yup.number().required(errorMessages.fieldRequired).positive().integer(),
    netRentalIncomeMonthly: yup.number().required(errorMessages.fieldRequired).positive().integer(),
  });
  const initialValues: RegionData = {
    zipcode: undefined,
    location: undefined,
    searchStatus: undefined,
    householdNetMonthly: undefined,
    netRentalIncomeMonthly: undefined,
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
                name='zipcode'
                type='number'
                label='ZIP code place of residence today'
                placeholder='Please enter'
              />

              <Field component={InputField} name='location' type='text' label='Location' placeholder='Please enter' />

              <Field
                component={SelectField}
                name='searchStatus'
                type='select'
                label='Real estate search status'
                options={[
                  'Still looking for a property',
                  'Interesting object found',
                  'Decision for object has been made',
                  'Notary appointment is planned',
                ]}
                placeholder='Please select'
              />

              <Field
                component={InputField}
                name='householdNetMonthly'
                type='number'
                label='Household net monthly'
                placeholder='Please enter'
              />

              <Text fontSize={14} mb={4}>
                Please enter the monthly net income of the entire household here. Please state only regularly recurring
                income.
              </Text>

              <Field
                component={InputField}
                name='netRentalIncomeMonthly'
                type='number'
                label='Net rental income monthly'
                placeholder='Please enter'
              />
              <Text fontSize={14} mb={4}>
                Please enter the rental income of the property to be rented here. If there is no rental contract yet,
                please state the expected income.
              </Text>

              <Button variant='accent' type='submit' padding={6} fontSize={20}>
                Continue
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default Region;
