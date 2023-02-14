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
import { ProjectNumbersData } from './types';
import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';

const ProjectNumbers = () => {
  const [_step, setStep] = useRecoilState(stepState);

  const validationSchema = yup.object().shape({
    landPrice: yup.number().required(errorMessages.fieldRequired).positive().integer(),
    paid: yup.string().required(errorMessages.fieldRequired),
    buildingCosts: yup.number().required(errorMessages.fieldRequired).positive().integer(),
    broker: yup.number().positive().integer(),
    equityCapital: yup.number().required(errorMessages.fieldRequired).positive().integer(),
  });
  const initialValues: ProjectNumbersData = {
    landPrice: null,
    paid: '',
    buildingCosts: 0,
    broker: null,
    equityCapital: null,
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
          setStep((currValue) => [6, { ...currValue[1], projectNumbers: values }]);
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
                label='Kaufpreis'
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
                  <Text>Notar & Grundbuch</Text>
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
                  <Text>Grunderwerbsteuer</Text>
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
                Diese Beträge sind für das Bundesland ###### gesetzlich vorgegeben und werden deshalb automatisch
                ermittelt.
              </Text>

              <Field
                component={HInputField}
                name='broker'
                type='number'
                label='Makler'
                placeholder='Please enter'
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
                width='50%'
              />

              <Text fontSize={11} mb={4}>
                Die vorgeschlagene Maklercourtage entspricht der regional üblichen Höhe. Sie können diese jedoch bei
                Bedarf verändern oder auch komplett entfallen lassen.
              </Text>

              <Field
                component={HInputField}
                name='equityCapital'
                type='number'
                label='Eigenkapital'
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
                  <Text>Darlehensbetrag</Text>
                  <HStack>
                    <Text>0</Text>
                    <Box w='5%'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </HStack>
              </HStack>
              <Text fontSize={11} mb={4}>
                Darlehensbeträge werden auf volle 1.000 Euro gerundet.
              </Text>

              <Box bgColor='gray.400' w='full' h='1px' />

              <Button alignSelf='center' variant='accent' type='submit' py={6} px={16} fontSize={20}>
                Werte übernehmen und weiter zum letzten Schritt
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default ProjectNumbers;
