import React, { useEffect, useState } from 'react';
import {
  Center,
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
} from '@chakra-ui/react';
import { errorMessages } from 'data/errorMessages';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import HInputField from './FormModels/HInputField';
import { IconObject } from '../icons/iconObject';
import { AddIcon, EditIcon, InfoIcon } from '@chakra-ui/icons';
import { EuroIcon } from '../icons/EuroIcon';
import { EqualsIcon } from '../icons/EqualsIcon';
import { ProjectNumbersData } from './types';
import { useRecoilState } from 'recoil';
import { stepState } from '@/core/atoms';
import grunderAndMaklerData from '../../data/formular/grunderAndMakler.json';
import CheckboxField from './FormModels/CheckboxField';
import RadioField from './FormModels/RadioField';
import { validateConfig } from 'next/dist/server/config-shared';

const regionSelectOptions = grunderAndMaklerData.map((entry) => (
  <option key={entry.city} value={entry.city}>
    {entry.city}
  </option>
));

const ProjectNumbers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useRecoilState(stepState);
  const [location, setLocation] = useState(step[1].region.bundesland!);
  const [variables, setVariables] = useState<{ grunder: number; makler: number | string }>();
  const [isEligible, setEligible] = useState(false);
  const [calculations, setCalculations] = useState({
    notarAndGrundbuchAmount: 0,
    grunderAmount: 0,
    maklerAmount: 0,
    darlehensbetrag: 0,
  });

  useEffect(() => {
    const { grunder, makler } = findGrunderAndMakler(location);
    setVariables({ grunder: grunder!, makler: makler! });
  }, []);

  useEffect(() => {
    const { grunder, makler } = findGrunderAndMakler(location);
    setVariables({ grunder: grunder!, makler: makler! });
    step[1].projectNumbers &&
      calculatePrices(
        step[1].projectNumbers.kaufpreis,
        step[1].projectNumbers.modernisierungs,
        step[1].projectNumbers.eigenkapital,
      );
  }, [location]);

  const findGrunderAndMakler = (location: string) => {
    const result = grunderAndMaklerData.find((entry) => entry.city === location);
    return { grunder: result!.grunderwerbsteuer, makler: result!.makler };
  };

  const calculatePrices = (
    kaufpreis?: number,
    modernisierungs?: number,
    eigenkapital?: number,
    newMaklerAmount?: number,
  ) => {
    if (!location) {
      console.log('no variables');
    } else {
      const { grunder, makler } = findGrunderAndMakler(location);

      const grunderAmount = Number.parseFloat(((kaufpreis ?? 0) * (grunder ?? 0)).toFixed(2));
      const maklerAmount =
        newMaklerAmount ??
        Number.parseFloat(((kaufpreis ?? 0) * (typeof makler === 'string' ? 0 : makler ?? 0)).toFixed(2));
      const notarAndGrundbuchAmount = Number.parseFloat(((kaufpreis ?? 0) * 0.02).toFixed(2));
      const darlehensbetrag =
        Math.ceil(
          (+(kaufpreis ?? 0) +
            +(modernisierungs ?? 0) +
            +grunderAmount +
            +maklerAmount +
            +notarAndGrundbuchAmount -
            +(eigenkapital ?? 0)) /
            1000,
        ) * 1000;
      setCalculations({ notarAndGrundbuchAmount, grunderAmount, maklerAmount, darlehensbetrag });
      darlehensbetrag > 50000 ? setEligible(true) : setEligible(false);
    }
  };

  const validationSchema = yup.object().shape({
    kaufpreis: yup.number().required(errorMessages.fieldRequired).positive().integer(),
    modernisierungs: yup.number().typeError(errorMessages.isNum).integer(),
    makler: yup.number().typeError(errorMessages.isNum).positive().integer().nullable(),
    eigenkapital: yup.number().integer(),
    besitzenMoglicherweise: yup.string().required(errorMessages.fieldRequired),
  });

  const initialValues: ProjectNumbersData = {
    kaufpreis: step[1].projectNumbers?.kaufpreis,
    modernisierungs: step[1].projectNumbers?.modernisierungs,
    makler: step[1].projectNumbers?.makler,
    eigenkapital: step[1].projectNumbers?.eigenkapital,
    besitzenMoglicherweise: step[1].projectNumbers?.besitzenMoglicherweise || undefined,
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
          console.log(values);
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
              alignItems='flex-start'
            >
              <HInputField
                name='kaufpreis'
                label='Kaufpreis'
                placeholder='0'
                width='50%'
                value={values.kaufpreis}
                backIcon={IconObject.euro}
                onInputChange={(kaufpreis) => calculatePrices(kaufpreis, values.modernisierungs, values.eigenkapital)}
              />
              <HInputField
                name='modernisierungs'
                label='Evtl. Modernisierungskosten'
                placeholder='0'
                width='50%'
                value={values.modernisierungs}
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
                onInputChange={(modernisierungs) =>
                  calculatePrices(values.kaufpreis, modernisierungs, values.eigenkapital)
                }
              />

              <HStack w='full'>
                <Box w='5%'>
                  <AddIcon />
                </Box>
                <HStack justifyContent='space-between' w={'full'}>
                  <Text fontSize={14} mb={0}>
                    Notar & Grundbuch
                  </Text>
                  <HStack>
                    <Text fontSize={12}>(2.00%)</Text>
                    <Text>{calculations.notarAndGrundbuchAmount}</Text>
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
                  <Text fontSize={14} mb={0}>
                    Grunderwerbsteuer
                  </Text>
                  <HStack>
                    <Text fontSize={12}>({((variables?.grunder ?? 0) * 100).toFixed(2)}%)</Text>
                    <Text>{calculations.grunderAmount}</Text>
                    <Box w='5%'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </HStack>
              </HStack>
              <Text fontSize={11} mb={4}>
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
                        const { makler } = findGrunderAndMakler((e.target as HTMLSelectElement).value);
                        calculatePrices(
                          values.kaufpreis,
                          values.modernisierungs,
                          values.eigenkapital,
                          Number((values.kaufpreis * makler).toFixed(2)),
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
                name='makler'
                label={`Makler (${((typeof variables?.makler === 'string' ? 0 : variables?.makler ?? 0) * 100).toFixed(
                  3,
                )}%) `}
                placeholder='0'
                width='50%'
                value={values.makler === '' ? undefined : values.makler || calculations.maklerAmount}
                frontIcon={IconObject.plus}
                backIcon={IconObject.euro}
                onInputChange={(makler) =>
                  calculatePrices(values.kaufpreis, values.modernisierungs, values.eigenkapital, makler)
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
                width='50%'
                value={values.eigenkapital}
                frontIcon={IconObject.minus}
                backIcon={IconObject.euro}
                onInputChange={(eigenkapital) =>
                  calculatePrices(values.kaufpreis, values.modernisierungs, eigenkapital)
                }
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
                <Box w='5%'>
                  <EqualsIcon />
                </Box>
                <HStack justifyContent='space-between' w={'full'}>
                  <Text>Darlehensbetrag</Text>
                  <HStack>
                    <Text>{calculations.darlehensbetrag}</Text>
                    <Box w='5%'>
                      <EuroIcon />
                    </Box>
                  </HStack>
                </HStack>
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

              <VStack>
                <Field
                  component={RadioField}
                  name='besitzenMoglicherweise'
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
                  Je geringer das Risiko von Zahlungsausfällen, das heißt{' '}
                  <strong>
                    je mehr Sicherheiten vorhanden sind, desto bessere Zinsen wird Ihnen die Bank anbieten.
                  </strong>
                </Text>
              </VStack>

              <Box bgColor='gray.400' w='full' h='1px' />

              <Button
                isDisabled={!isEligible}
                _hover={!isEligible ? {} : { bgColor: 'primary.darkAcid' }}
                alignSelf='center'
                variant='accent'
                type='submit'
                py={6}
                px={16}
                fontSize={20}
              >
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
