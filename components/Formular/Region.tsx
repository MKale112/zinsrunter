import React from 'react';
import { Center, VStack, Button, Text } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import InputField from './FormModels/InputField';

import * as yup from 'yup';
import { RegionData } from './types';
import SelectField from './FormModels/SelectField';
import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';

export const Region = () => {
  const [_step, setStep] = useRecoilState(stepState);
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
    zipcode: null,
    location: '',
    searchStatus: '',
    householdNetMonthly: null,
    netRentalIncomeMonthly: null,
  };
  return (
    <Center w={['95%', '95%', '80%', '50%']}>
      <Formik
        // eslint-disable-next-line
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={(values) => {
          setStep((currValue) => [4, { ...currValue[1], region: values }]);
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
                label='Postleitzahl Wohnort heute'
                placeholder='Bitte eingeben'
              />

              <Field component={InputField} name='location' type='text' label='Ort' placeholder='Wird vorgeschlagen' />

              <Field
                component={SelectField}
                name='searchStatus'
                type='select'
                label='Stand der Immobiliensuche'
                options={[
                  'Noch auf Objektsuche',
                  'Interessantes Objekt gefunden',
                  'Entscheidung für Objekt ist gefallen',
                  'Notartermin wird geplant',
                ]}
                placeholder='Bitte auswählen'
              />

              <Field
                component={InputField}
                name='householdNetMonthly'
                type='number'
                label='Haushaltsnetto monatlich'
                placeholder='Bitte eingeben'
              />

              <Text fontSize={14} mb={4}>
                Bitte geben Sie hier das monatliche Nettoeinkommmen des gesamten Haushalts ein. Bitte geben Sie nur
                regelmäßig wiederkehrende Einkünfte an.
              </Text>

              <Field
                component={InputField}
                name='netRentalIncomeMonthly'
                type='number'
                label='Netto-Mieteinnahme monatlich'
                placeholder='Bitte eingeben'
              />
              <Text fontSize={14} mb={4}>
                Bitte geben Sie hier die Mieteinnahme des zu vermietenden Objektes ein. Falls noch kein Mietvertrag
                besteht, geben Sie bitte die zu erwartende Einnahme an.
              </Text>

              <Button variant='accent' type='submit' padding={6} fontSize={20}>
                Weiter
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};
