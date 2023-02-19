import React, { useEffect, useState } from 'react';

import { Center, VStack, Button, Text } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import InputField from './FormModels/InputField';
import countryData from '../../data/formular/zipcodes.json';

import * as yup from 'yup';
import { RegionData } from './types';
import SelectField from './FormModels/SelectField';

import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';
import { AutocompleteMapEntry, ZipcodeEntry } from '@/core/types';
import AutocompleteField from './FormModels/AutocompleteField';

export const Region = () => {
  const [step, setStep] = useRecoilState(stepState);

  const [input, setInput] = useState<string>('');
  console.log(setInput);
  const [options, setOptions] = useState<AutocompleteMapEntry[]>([]);

  const generateOptions = (input: string) => {
    const mappedOptions = (countryData as ZipcodeEntry[])
      .map((entry) => {
        if (
          Number(input) >= Number(entry.startsAt.substring(0, input.length)) &&
          Number(input) <= Number(entry.endsAt.substring(0, input.length))
        ) {
          return { value: entry, label: entry.region };
        }
      })
      .filter((entry) => entry !== undefined);

    console.log(mappedOptions);
    return mappedOptions.filter((item, index) => mappedOptions.indexOf(item) === index) as AutocompleteMapEntry[];
  };

  useEffect(() => {
    const autocompleteOptions = generateOptions(input);
    setOptions(autocompleteOptions);
  }, [input]);

  const validationSchema = yup.object().shape({
    zipcode: yup.string().required(errorMessages.fieldRequired),
    location: yup.string().required(errorMessages.fieldRequired),
    searchStatus: yup.string(),
    householdNetMonthly: yup.number().required(errorMessages.fieldRequired).positive().integer(),
    netRentalIncomeMonthly: yup.number().required(errorMessages.fieldRequired).positive().integer(),
  });
  const initialValues: RegionData = {
    zipcode: step[1].region?.zipcode ?? '',
    location: step[1].region?.location ?? '',
    searchStatus: step[1].region?.searchStatus ?? '',
    householdNetMonthly: step[1].region?.householdNetMonthly ?? '',
    netRentalIncomeMonthly: step[1].region?.netRentalIncomeMonthly ?? '',
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
                component={AutocompleteField}
                name='zipcode'
                label='Postleitzahl Wohnort heute'
                placeholder='Bitte eingeben'
                type='number'
                options={options}
              />
              {/* <Field
                component={InputField}
                name='zipcode'
                type='number'
                label='Postleitzahl Wohnort heute'
                placeholder='Bitte eingeben'
                min='0'
                max='99999'
                onChangeInput={setInput}
              /> */}

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
