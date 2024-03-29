import React, { useEffect, useState } from 'react';
import {
  VStack,
  Button,
  Text,
  Box,
  HStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Select,
  Stack,
} from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import HInputField from './FormModels/HInputField';
import RadioField from './FormModels/RadioField';

import { IconObject } from '../icons/iconObject';
import { AddIcon, EditIcon, InfoIcon } from '@chakra-ui/icons';
import { EuroIcon } from '../icons/EuroIcon';
import { EqualsIcon } from '../icons/EqualsIcon';

import { ProjectNumbersData } from './types';
import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';
import grunderAndMaklerData from '../../data/formular/grunderAndMakler.json';
import { formatNumber } from '@/core/utils';

const regionSelectOptions = grunderAndMaklerData.map((entry) => (
  <option key={entry.city} value={entry.city}>
    {entry.city}
  </option>
));

const ProjectNumbers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useRecoilState(stepState);
  const [location, setLocation] = useState(step[1].region.bundesland!);
  const [variables, setVariables] = useState<{ grunder: number; maklerprovision: number | string }>();
  const [isEligible, setEligible] = useState(false);
  const [calculations, setCalculations] = useState({
    notarAndGrundbuchAmount: 0,
    grunderAmount: 0,
    maklerAmount: 0,
    kreditsumme: 0,
  });

  useEffect(() => {
    const { grunder, maklerprovision } = findGrunderAndMakler(location);
    setVariables({ grunder: grunder!, maklerprovision: maklerprovision! });
  }, []);

  useEffect(() => {
    const { grunder, maklerprovision } = findGrunderAndMakler(location);
    setVariables({ grunder: grunder!, maklerprovision: maklerprovision! });
    console.log(step[1].projectNumbers);
    step[1].projectNumbers &&
      calculatePrices(
        step[1].projectNumbers.kaufpreis,
        step[1].projectNumbers.modernisierungskosten,
        step[1].projectNumbers.eigenkapital,
      );
  }, [location]);

  const findGrunderAndMakler = (location: string) => {
    const result = grunderAndMaklerData.find((entry) => entry.city === location);
    return { grunder: result!.grunderwerbsteuer, maklerprovision: result!.maklerprovision };
  };

  const { grunder, maklerprovision } = findGrunderAndMakler(location);

  const calculatePrices = (
    kaufpreis?: number,
    modernisierungskosten?: number,
    eigenkapital?: number,
    newMaklerAmount?: number,
  ) => {
    if (!location) {
      console.log('no variables');
    } else {
      const { grunder, maklerprovision } = findGrunderAndMakler(location);
      const formattedKaufpreis = formatNumber(kaufpreis);
      const formattedModernisierungs = formatNumber(modernisierungskosten);
      const formattedEigenkapital = formatNumber(eigenkapital);
      const formattedMaklerAmount = formatNumber(newMaklerAmount);

      const grunderAmount = Number.parseFloat(((formattedKaufpreis ?? 0) * (grunder ?? 0)).toFixed(2));
      const maklerAmount =
        formattedMaklerAmount ??
        Number.parseFloat(
          ((formattedKaufpreis ?? 0) * (typeof maklerprovision === 'string' ? 0 : maklerprovision ?? 0)).toFixed(0),
        );
      const notarAndGrundbuchAmount = Number.parseFloat(((formattedKaufpreis ?? 0) * 0.02).toFixed(2));
      const kreditsumme =
        Math.ceil(
          (+(formattedKaufpreis ?? 0) +
            +(formattedModernisierungs ?? 0) +
            +grunderAmount +
            +maklerAmount +
            +notarAndGrundbuchAmount -
            +(formattedEigenkapital ?? 0)) /
            1000,
        ) * 1000;
      setCalculations((prevCalculations) => ({
        ...prevCalculations,
        notarAndGrundbuchAmount: notarAndGrundbuchAmount,
        grunderAmount: grunderAmount,
        maklerAmount: maklerAmount,
        kreditsumme: kreditsumme,
      }));
      kreditsumme > 50000 ? setEligible(true) : setEligible(false);
    }
  };

  const validationSchema = yup.object().shape({
    kaufpreis: yup
      .number()
      .transform((_, value) => formatNumber(value))
      .required(errorMessages.fieldRequired)
      .integer(),
    modernisierungskosten: yup
      .number()
      .integer()
      .transform((_, value) => formatNumber(value))
      .typeError(errorMessages.isNum)
      .nullable(),
    maklerprovision: yup
      .number()
      .transform((_, value) => formatNumber(value))
      .typeError(errorMessages.isNum)
      .integer()
      .nullable(),
    eigenkapital: yup
      .number()
      .transform((_, value) => formatNumber(value))
      .integer(),
    immobilienbesitz: yup.string().required(errorMessages.fieldRequired),
  });

  const initialValues: ProjectNumbersData = {
    kaufpreis: step[1].projectNumbers?.kaufpreis,
    modernisierungskosten: step[1].projectNumbers?.modernisierungskosten,
    maklerprovision: step[1].projectNumbers?.maklerprovision,
    eigenkapital: step[1].projectNumbers?.eigenkapital,
    immobilienbesitz: step[1].projectNumbers?.immobilienbesitz,
    kreditsumme: 0,
  };

  return (
    <VStack w={['95%', '95%', '80%', '50%']} spacing={8} alignItems='center'>
      <Formik
        // eslint-disable-next-line
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={(values) => {
          setStep((currValue) => [
            6,
            {
              ...currValue[1],
              projectNumbers: {
                ...values,
                kaufpreis: Math.round(formatNumber(values.kaufpreis)!) || 0,
                eigenkapital: Math.round(formatNumber(values.eigenkapital)!) || 0,
                modernisierungskosten: Math.round(formatNumber(values.modernisierungskosten)!) || 0,
                maklerprovision: Math.round(Number(calculations.maklerAmount.toString().replace(',', '.'))),
                kreditsumme: calculations.kreditsumme,
              },
            },
          ]);
        }}
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <VStack
              bgColor='white'
              p={[6, 8, 8, 10]}
              boxShadow='2xl'
              borderRadius='lg'
              border='1px'
              borderColor='gray.200'
              spacing={6}
              alignItems='flex-start'
            >
              <HInputField
                name='kaufpreis'
                label='Kaufpreis'
                placeholder='0'
                width='100%'
                value={values.kaufpreis}
                backIcon={IconObject.euro}
                onInputChange={(kaufpreis) => {
                  calculatePrices(kaufpreis as unknown as number, values.modernisierungskosten, values.eigenkapital);
                }}
              />
              <HInputField
                name='modernisierungskosten'
                label='Evtl. Modernisierungskosten'
                placeholder='0'
                width='100%'
                value={values.modernisierungskosten}
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
                onInputChange={(modernisierungskosten) =>
                  calculatePrices(values.kaufpreis, modernisierungskosten as unknown as number, values.eigenkapital)
                }
              />

              <HStack w='full'>
                <Box w='5%' alignSelf='flex-start'>
                  <AddIcon />
                </Box>
                <Stack direction={{ base: 'column', sm: 'row' }} justifyContent='space-between' w={'full'}>
                  <HStack>
                    <Text fontSize={14} mb={0}>
                      Notar & Grundbuch
                    </Text>
                    <Text fontSize={12}>(2.00%)</Text>
                  </HStack>
                  <HStack alignSelf='flex-end'>
                    <Text>
                      {calculations.notarAndGrundbuchAmount.toLocaleString('de-DE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Text>
                    <Box w='fit-content'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </Stack>
              </HStack>

              <HStack w='full' alignItems={{ base: 'flex-start', sm: 'center' }}>
                <Box w='5%' alignSelf='flex-start'>
                  <AddIcon />
                </Box>
                <Stack direction={{ base: 'column', sm: 'row' }} justifyContent='space-between' w={'full'}>
                  <HStack>
                    <Text fontSize={14} mb={0}>
                      Grunderwerbsteuer
                    </Text>
                    <Text fontSize={12}>({((variables?.grunder ?? 0) * 100).toFixed(2)}%)</Text>
                  </HStack>
                  <HStack alignSelf='flex-end'>
                    <Text>
                      {Number.parseFloat(
                        ((formatNumber(values.kaufpreis) ?? 0) * (grunder ?? 0)).toFixed(2),
                      ).toLocaleString('de-DE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {calculations.grunderAmount.toLocaleString('de-DE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} */}
                    </Text>
                    <Box w='fit-content'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </Stack>
              </HStack>

              <Text fontSize={11} mb={4} w='full'>
                Diese Beträge sind für das Bundesland{' '}
                <Button
                  variant='link'
                  color={'black'}
                  fontWeight='extrabold'
                  textDecoration='underline'
                  py={0}
                  fontSize='xs'
                  onClick={onOpen}
                >
                  {location} <EditIcon />
                </Button>{' '}
                gesetzlich vorgegeben und werden deshalb automatisch ermittelt.
              </Text>

              <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton color='white' boxSize={12} />
                  <DrawerHeader bgColor={'primary.acid'} color={'primary.white'} fontSize={{ base: 'xl', md: '2xl' }}>
                    Bundesland ändern
                  </DrawerHeader>

                  <DrawerBody>
                    <Select
                      defaultValue={location}
                      size='lg'
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setLocation((e.target as HTMLSelectElement).value);
                        const { maklerprovision } = findGrunderAndMakler((e.target as HTMLSelectElement).value);
                        calculatePrices(
                          values.kaufpreis,
                          values.modernisierungskosten,
                          values.eigenkapital,
                          Number((formatNumber(values.kaufpreis)! * maklerprovision).toFixed(2)),
                        );
                      }}
                    >
                      {regionSelectOptions}
                    </Select>
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant='accent' onClick={onClose}>
                      Schließen
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <HInputField
                key='maklerprovision'
                name='maklerprovision'
                label={`Makler (${(
                  (typeof variables?.maklerprovision === 'string' ? 0 : variables?.maklerprovision ?? 0) * 100
                ).toFixed(2)}%) `}
                placeholder='0'
                width='100%'
                value={values.maklerprovision === '' ? undefined : values.maklerprovision ?? calculations.maklerAmount}
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
                onInputChange={(maklerprovision) =>
                  calculatePrices(
                    values.kaufpreis,
                    values.modernisierungskosten,
                    values.eigenkapital,
                    maklerprovision as unknown as number,
                  )
                }
              />

              <Text fontSize={11} mb={4}>
                Die vorgeschlagene Maklercourtage entspricht der regional üblichen Höhe. Sie können diese jedoch bei
                Bedarf verändern oder auch komplett entfallen lassen.
              </Text>

              <HInputField
                name='eigenkapital'
                type='number'
                label='Eigenkapital'
                placeholder='0'
                width='100%'
                value={values.eigenkapital}
                frontIcon={IconObject.minus}
                backIcon={IconObject.euro}
                onInputChange={(eigenkapital) => {
                  calculatePrices(values.kaufpreis, values.modernisierungskosten, eigenkapital as unknown as number);
                }}
              />

              {!values.eigenkapital && (
                <VStack
                  w='full'
                  py={2}
                  px={2}
                  alignItems='flex-start'
                  border='2px'
                  borderColor='primary.blue'
                  borderRadius='lg'
                >
                  <Text fontSize={'xs'}>
                    <InfoIcon boxSize={3} color='primary.blue' /> Banken vergeben ihre Darlehen aktuell sehr restriktiv.
                    Bitte beachten Sie, dass für Darlehen ohne Eigenkapital gegenwärtig mit höheren Tilgungssätzen zu
                    rechnen ist. Gleichzeitig werden auch höhere Anforderungen an die Bonität respektive
                    Kapitaldienstfähigkeit gestellt. <br />
                    <br />
                    <strong>Wichtig:</strong> <br />
                    Sollten Sie Eigenkapital besitzen, das Sie aber nicht einsetzen möchten, so möchten wir Sie dennoch
                    eindringlich darum bitten dieses hier anzugeben. Ihr Berater bespricht mit Ihnen alle zur Verfügung
                    stehenden Möglichkeiten.
                  </Text>
                </VStack>
              )}

              <Box w='full' h='2px' bgColor='primary.acid' />

              <HStack w='full'>
                <Box w='5%' alignSelf='flex-start'>
                  <EqualsIcon />
                </Box>
                <Stack direction={{ base: 'column', sm: 'row' }} justifyContent='space-between' w={'full'}>
                  <Text>Darlehensbetrag</Text>
                  <HStack alignSelf='flex-end'>
                    <Text>
                      {calculations.kreditsumme.toLocaleString('de-DE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Text>
                    <Box w='fit-content'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </Stack>
              </HStack>
              <Text fontSize={11} mb={4}>
                Darlehensbeträge werden auf volle 1.000 Euro gerundet.
              </Text>

              {!isEligible && (
                <VStack
                  w='full'
                  py={2}
                  px={2}
                  alignItems='flex-start'
                  border='2px'
                  borderColor={isEligible ? 'primary.blue' : 'red.300'}
                  borderRadius='lg'
                >
                  <Text fontSize={'xs'}>
                    <InfoIcon boxSize={3} color='red' /> Das Mindestdarlehen beträgt 50.000 Euro.
                  </Text>
                </VStack>
              )}

              <Box bgColor='gray.400' w='full' h='1px' />

              <VStack w='full'>
                <Field
                  component={RadioField}
                  name='immobilienbesitz'
                  label='Besitzen Sie möglicherweise bereits eine andere Immobilie die als zusätzliche Sicherheit für den
                  Immobilienkredit dienen könnte?'
                />
                <Text fontSize={11} mb={4}>
                  Für die Bank bedeutet diese zusätzliche Sicherheit für einen Immobilienkredit ein verringertes Risiko
                  von Zahlungsausfällen. Eine Baufinanzierung hält meist über mehrere Jahrzehnte an, in denen sich Ihre
                  finanzielle Situation stets verändern kann. <br />
                  <br />
                  Besteht von Seiten der Bank ein geringes finanzielles Risiko von Zahlungsausfällen, honoriert sie das
                  mit niedrigen Zinsen. Das bedeutet: <br />
                  <br />
                  Je geringer das Risiko von Zahlungsausfällen, dass heißt{' '}
                  <strong>
                    je mehr Sicherheiten vorhanden sind, desto bessere Zinsen wird Ihnen die Bank anbieten.
                  </strong>
                </Text>
              </VStack>

              <Box bgColor='gray.400' w='full' h='1px' />

              <Button
                w='full'
                isDisabled={!isEligible}
                _hover={!isEligible ? {} : { bgColor: 'primary.darkAcid' }}
                alignSelf='center'
                variant='accent'
                type='submit'
                py={6}
                px={16}
                fontSize={[14, 18]}
              >
                Werte übernehmen und weiter
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default ProjectNumbers;
