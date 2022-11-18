import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  useMediaQuery,
  VStack,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import Image from 'next/image';
import { Facebook, Instagram, Reddit, Twitter } from '../icons';
import Link from '../Link/ChakraLink';

const footerLinks = [
  { id: 1, label: 'Zinsrunter', href: '/' },
  { id: 2, label: 'Impressum', href: '/impressum' },
];

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const items = footerLinks.map((entry) => (
    <a
      key={`${entry.label}${entry.id}`}
      href={entry.href}
      target={entry.label !== 'Zinsrunter' ? '_blank' : '_self'}
      rel='noreferrer'
    >
      <Button variant='link'>{entry.label}</Button>
    </a>
  ));
  return (
    <FullWidthContainer>
      <ResponsiveContainer>
        <VStack>
          <VStack spacing={8} alignItems='start'>
            <Heading as='h3' alignSelf='center'>
              Some text
            </Heading>
            <Divider />
            <Image src='/mobile-logo.svg' alt={'Logo Image'} width={50} height={50} />
            {isMobile ? (
              <VStack>
                <VStack spacing={4}>
                  <Heading as={'h5'}>About Zinsrunter</Heading>
                  <Text fontSize={['md']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Text>
                  <Text fontSize={['md']}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </Text>
                  <VStack spacing={4} mb='8'>
                    <Heading as={'h6'}>Find us on</Heading>
                    <HStack justify='center' mx='auto' w='full' spacing={8}>
                      <Facebook height={48} width={48} />
                      <Instagram height={48} width={48} />
                      <Reddit height={48} width={48} />
                      <Twitter height={48} width={48} />
                    </HStack>
                  </VStack>
                </VStack>
                <Accordion w='full' allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Construction Financing
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Morgage Calculator
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Interest Charges
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Credit
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </VStack>
            ) : (
              <HStack justify='space-between' align='flex-start' gap={4}>
                <VStack w={['50%', '40%']} spacing={4}>
                  <Heading as={'h2'} fontSize={['lg', 'xl']} alignSelf='start'>
                    About Zinsrunter
                  </Heading>
                  <Text fontSize={['xs', 'sm', 'md']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Text>
                  <Text fontSize={['xs', 'sm', 'md']}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </Text>
                  <VStack spacing={4} mb='8'>
                    <Heading as={'h2'} fontSize={['lg', 'xl']}>
                      Find us on
                    </Heading>
                    <HStack justify='center' w='full' wrap='wrap'>
                      <Facebook height={32} width={32} text={true} />
                      <Instagram height={32} width={32} text={true} />
                      <Reddit height={32} width={32} text={true} />
                      <Twitter height={32} width={32} text={true} />
                    </HStack>
                    <Heading as={'h2'} fontSize={['lg', 'xl']}>
                      For Partners
                    </Heading>
                    <HStack justify='center' w='full' wrap='wrap'>
                      <Link href='#' variant='link'>
                        Partner Link 1
                      </Link>
                      <span>-</span>
                      <Link href='#' variant='link'>
                        Partner Link 2
                      </Link>
                    </HStack>
                  </VStack>
                </VStack>
                <Grid
                  w={['50%', '60%']}
                  templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                  templateRows={{ base: 'repeat(2, 1fr)', lg: 'none' }}
                  gap={4}
                  textAlign='center'
                >
                  <GridItem w='100%' flexDirection='column'>
                    <Heading as={'h6'} size='sm' mb={4}>
                      Construction Financing
                    </Heading>
                    <VStack>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                    </VStack>
                  </GridItem>
                  <GridItem w='100%' flexDirection='column'>
                    <Heading as={'h6'} size='sm' mb={4}>
                      Mortgage Calculator
                    </Heading>
                    <VStack>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                    </VStack>
                  </GridItem>
                  <GridItem w='100%' flexDirection='column'>
                    <Heading as={'h6'} size='sm' mb={4}>
                      Interest Charges
                    </Heading>
                    <VStack>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                    </VStack>
                  </GridItem>
                  <GridItem w='100%' flexDirection='column'>
                    <Heading as={'h6'} size='sm' mb={4}>
                      Credit
                    </Heading>
                    <VStack>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                      <Link href={'#'} variant='link'>
                        Link
                      </Link>
                    </VStack>
                  </GridItem>
                </Grid>
              </HStack>
            )}
          </VStack>
          <Stack direction={isMobile ? 'column' : 'row'} justify='space-between' alignItems='center'>
            <Text fontSize={['sm', 'md']}>
              © 2022 Copyright:{' '}
              <a href='/'>
                <Button variant='link'>Zinsrunter.de</Button>
              </a>
            </Text>
            <HStack>{items}</HStack>
          </Stack>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Footer;
