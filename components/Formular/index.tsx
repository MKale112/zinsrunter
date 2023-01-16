import { Box, Button, Center, Progress, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import InputField from './FormModels/InputField';
import SelectField from './FormModels/SelectField';

const errorMessages = {
  fieldRequired: 'Field is required',
  notNegative: 'Field cannot have negative value',
  isNum: 'Field must be a number',
  minVal: 'This stat can have a minimum value of 3',
  maxVal: 'This stat can have a maximum value of 30',
  min: 'Field must have minimal value of 10',
  levels: 'Levels go from 1 to 20!',
};

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

const Formular = () => {
  const [step, setStep] = useState<number>(1);
  console.log(setStep);
  const numberOfSteps = 5;
  const progress = (step / numberOfSteps) * 100;
  return (
    <FullWidthContainer bg={'gray.100'}>
      <Progress
        bgColor='gray.200'
        colorScheme='green'
        size='sm'
        hasStripe={step === numberOfSteps ? false : true}
        value={progress}
      />
      <ResponsiveContainer>
        <VStack minHeight='75vh' py={16}>
          <Offer />
          <Region />
          <ProjectNumbers />
          {/* <VStack py={10}>
            <Heading as='h3' fontSize={['xl', '2xl']} pb={8}>
              Kostenloses Finanzierungsangebot
            </Heading>
            <Text color='secondaryFontColor'>Vergleichen Sie mit uns mehr als 450 Anbieter für Baufinanzierungen.</Text>
            <Text color='secondaryFontColor'>Profitieren Sie von günstigen Zinsen und kompetenter Beratung.</Text>
          </VStack>
          <Box bgColor='gray.400' w='75%' h='1px' />
          <VStack py={10}>
            <Heading as='h3' fontSize={['lg', 'xl']} pb={8}>
              Kostenloses Finanzierungsangebot
            </Heading>
            <SimpleGrid columns={3} spacing='50px' w='full'>
              {financeOffer.map((entry) => {
                return (
                  <Center
                    key={entry.key}
                    bg='white'
                    borderRadius='2xl'
                    border='1px'
                    borderColor='gray.300'
                    height='100px'
                    w={300}
                    _hover={{ cursor: 'pointer' }}
                  >
                    <VStack>
                      {React.createElement(entry.icon, { h: '24px', w: '24px' })}
                      <Text>{entry.text}</Text>
                    </VStack>
                  </Center>
                );
              })}
            </SimpleGrid>
            </VStack> */}
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Formular;
