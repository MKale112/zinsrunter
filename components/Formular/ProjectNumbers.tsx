import React from 'react';
import { Center, VStack, Button, Text, Box, HStack } from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import HInputField from './FormModels/HInputField';
import { IconObject } from '../icons/iconObject';
import HSelectField from './FormModels/HSelectField';
import { AddIcon } from '@chakra-ui/icons';
import { EuroIcon } from '../icons/EuroIcon';
import { EqualsIcon } from '../icons/EqualsIcon';

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
    <Center w='60%'>
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
              alignItems='flex-start'
            >
              <Field
                component={HInputField}
                name='landPrice'
                type='number'
                label='Land price'
                placeholder='Please specify'
                width='50%'
                backIcon={IconObject.euro}
              />

              <Field
                component={HSelectField}
                name='paid'
                type='select'
                label='Already paid?'
                default='No'
                options={['No', 'Yes - paid with equity', 'Yes - paid with a bank financing']}
                placeholder='Please select'
                width='50%'
              />

              <Field
                component={HInputField}
                name='buildingCosts'
                type='text'
                label='Building costs'
                placeholder='Please enter'
                width='50%'
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
              />

              <HStack w='full'>
                <Box w='5%'>
                  <AddIcon />
                </Box>
                <HStack justifyContent='space-between' w={'full'}>
                  <Text>Notary & land register</Text>
                  <HStack>
                    <Text fontSize={12}>(2.00%)</Text>
                    <Text>0</Text>
                    <Box w='5%'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </HStack>
              </HStack>

              <HStack w='full'>
                <Box w='5%'>
                  <AddIcon />
                </Box>
                <HStack justifyContent='space-between' w={'full'}>
                  <Text>Property transfer tax</Text>
                  <HStack>
                    <Text fontSize={12}>(4.50%)</Text>
                    <Text>0</Text>
                    <Box w='5%'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </HStack>
              </HStack>
              <Text fontSize={11} mb={4}>
                These amounts are for the state Hamburg stipulated by law and are therefore determined automatically.
              </Text>

              <Field
                component={HInputField}
                name='broker'
                type='number'
                label='Broker'
                placeholder='Please enter'
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
                width='50%'
              />

              <Text fontSize={11} mb={4}>
                The suggested brokerage fee corresponds to the usual regional level. However, you can change them if
                necessary or even omit them completely.
              </Text>

              <Field
                component={HInputField}
                name='equityCapital'
                type='number'
                label='Equity capital'
                placeholder='Please enter'
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
                width='50%'
              />

              <Box w='full' h='2px' bgColor='primary.acid' />

              <HStack w='full'>
                <Box w='5%'>
                  <EqualsIcon />
                </Box>
                <HStack justifyContent='space-between' w={'full'}>
                  <Text>Loan amount</Text>
                  <HStack>
                    <Text>0</Text>
                    <Box w='5%'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </HStack>
              </HStack>
              <Text fontSize={11} mb={4}>
                Loan amounts are rounded to the nearest 1,000 euros.
              </Text>

              <Box bgColor='gray.400' w='full' h='1px' />

              <Button alignSelf='center' variant='accent' type='submit' py={6} px={16} fontSize={20}>
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
