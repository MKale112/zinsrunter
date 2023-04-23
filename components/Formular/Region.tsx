import React, { useEffect, useState } from 'react';

import { VStack, Button, Text, SimpleGrid } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field, useFormikContext } from 'formik';
import countryData from '../../data/formular/zipcodes.json';

import { RegionData } from './types';
import * as yup from 'yup';
import InputField from './FormModels/InputField';
import SelectField from './FormModels/SelectField';
import AutocompleteField from './FormModels/AutocompleteField';
import NumberInput from './FormModels/NumberInput';

import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';
import { AutocompleteMapEntry, ZipcodeEntry } from '@/core/types';
import { nutzung } from 'data/form';
import { formatNumber } from '@/core/utils';

export const Region = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [input, setInput] = useState<string>('');
  const [options, setOptions] = useState<AutocompleteMapEntry[]>([]);
  const [bundesland, setBundesland] = useState(step[1]?.region?.bundesland);

  const isRental = step[1].nutzung === nutzung.data[0].text;
  const alreadyDecided = ['Anschlussfinanzierung', 'Modernisieren', 'Kapitalbeschaffung'].includes(
    step[1].finanzierungszweck,
  );

  const handleSelectedOption = (value: AutocompleteMapEntry) => {
    setBundesland(value.entry ? value.entry.region : '');
  };
  const generateOptions = (input: string) => {
    const mappedOptions = (countryData as ZipcodeEntry[])
      .map((entry) => {
        if (
          Number(input) >= Number(entry.startsAt.substring(0, input.length)) &&
          Number(input) <= Number(entry.endsAt.substring(0, input.length))
        ) {
          const num = `${input}${entry.startsAt.substring(input.length)}`;
          return {
            value: input,
            label: (input.length === 5 ? num : `(${num}-${entry.endsAt})`) + ` (${entry.region})`,
            entry: entry,
          };
        }
      })
      .filter((entry) => entry !== undefined);

    return mappedOptions.filter((item, index) => mappedOptions.indexOf(item) === index) as AutocompleteMapEntry[];
  };

  useEffect(() => {
    const autocompleteOptions = input.length === 5 ? generateOptions(input) : [];
    setOptions(autocompleteOptions);
  }, [input]);

  const zipcodeRegex = /^[0-9]{1,6}$/;

  const validationSchema = yup.object().shape({
    standort_plz: yup
      .string()
      .matches(zipcodeRegex, errorMessages.zipcodeInvalidInput)
      .required(errorMessages.fieldRequired),
    // location: yup.string().required(errorMessages.fieldRequired),
    familienstand: yup.string().required(errorMessages.fieldRequired),
    berufsstatus: yup.string().required(errorMessages.fieldRequired),
    objektgefunden: alreadyDecided ? yup.string().nullable() : yup.string().required(errorMessages.fieldRequired),
    haushaltseinkommen: yup
      .number()
      .transform((_, value) => formatNumber(value))
      .required(errorMessages.fieldRequired)
      .typeError(errorMessages.isNum),
    mieteinnahmen: isRental
      ? yup.number().nullable()
      : yup
          .number()
          .transform((_, value) => formatNumber(value))
          .required(errorMessages.fieldRequired)
          .typeError(errorMessages.isNum)
          .positive()
          .integer(),
  });
  const initialValues: RegionData = {
    standort_plz: step[1].region?.standort_plz,
    bundesland: step[1].region?.bundesland ?? '',
    familienstand: step[1].region?.familienstand || '',
    berufsstatus: step[1].region?.berufsstatus || '',
    objektgefunden: step[1].region?.objektgefunden,
    haushaltseinkommen: step[1].region?.haushaltseinkommen,
    mieteinnahmen: step[1].region?.mieteinnahmen,
  };
  return (
    <VStack w={['95%', '95%', '80%', '50%']} spacing={8}>
      <VStack textAlign='center'>
        <Text color='secondaryFontColor'>
          Es gibt Kreditinstitute, die nur regional auftreten (Sparkassen und Volksbanken).
        </Text>
        <Text>
          Damit diese Banken in der Angebotserstellung berücksichtigt werden können, geben Sie bitte auch den Standort
          Ihres Finanzierungsvorhabens an.
        </Text>
      </VStack>
      <Formik
        // eslint-disable-next-line
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={(values) => {
          setStep((currValue) => [4, { ...currValue[1], region: {} as RegionData }]);
          setStep((currValue) => [4, { ...currValue[1], region: { ...values, bundesland } }]);
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
              <SimpleGrid w='full' columns={{ base: 1, sm: 2 }} spacing={6}>
                <AutocompleteField
                  name='standort_plz'
                  label='Postleitzahl des Vorhabens'
                  placeholder='Bitte eingeben'
                  options={options}
                  value={{ value: values.standort_plz, label: values.standort_plz }}
                  onChangeInput={setInput}
                  onSelectOption={handleSelectedOption}
                />

                <Field
                  component={InputField}
                  name='bundesland'
                  type='text'
                  label='Bundesland'
                  placeholder='Wird vorgeschlagen'
                  value={bundesland}
                  isDisabled
                />
              </SimpleGrid>

              <SimpleGrid w='full' columns={{ base: 1, sm: 2 }} spacing={6}>
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
                  name='berufsstatus'
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

              {!alreadyDecided && (
                <Field
                  component={SelectField}
                  name='objektgefunden'
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
              )}

              <SimpleGrid spacing={6} columns={{ base: 1, sm: isRental ? 1 : 2 }}>
                <VStack w={{ base: 'full', sm: !isRental ? 'full' : '50%' }} alignItems='flex-start'>
                  <Field
                    component={NumberInput}
                    name='haushaltseinkommen'
                    type='number'
                    label='Haushaltsnettoeinkommen monatlich'
                    placeholder='Bitte eingeben'
                    value={values.haushaltseinkommen}
                  />
                  <Text fontSize={14} mb={4}>
                    Bitte geben Sie hier das monatliche Nettoeinkommmen des gesamten Haushalts ein. Bitte geben Sie nur
                    regelmäßig wiederkehrende Einkünfte an.
                  </Text>
                </VStack>

                {!isRental && (
                  <VStack w='full' alignItems='flex-start'>
                    <Field
                      component={NumberInput}
                      name='mieteinnahmen'
                      type='number'
                      label='Netto-Mieteinnahme monatlich'
                      placeholder='Bitte eingeben'
                      value={values.mieteinnahmen}
                    />
                    <Text fontSize={14} mb={4}>
                      Bitte geben Sie hier die Mieteinnahme des zu vermietenden Objektes ein. Falls noch kein
                      Mietvertrag besteht, geben Sie bitte die zu erwartende Einnahme an.
                    </Text>
                  </VStack>
                )}
              </SimpleGrid>

              <Button variant='accent' type='submit' padding={6} fontSize={20}>
                Weiter
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};
