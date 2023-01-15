import { Button, Heading, HStack, useMediaQuery, VStack, Text, Stack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import Image from 'next/image';
import { Facebook, Instagram, Reddit, Twitter } from '../icons';
import footerItems from '../../data/footer.json';
import Link from '../Link/ChakraLink';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const items = footerItems.links.map((entry) => (
    <Link
      key={`${entry.label}${entry.id}`}
      href={entry.href}
      target={entry.label !== 'Zinsrunter' ? '_blank' : '_self'}
      rel='noreferrer'
      fontSize={['xs', 'md']}
    >
      <Button variant='link'>{entry.label}</Button>
    </Link>
  ));
  const brands = footerItems.brands.map((entry) => (
    <Image key={entry.id} src={entry.path} alt={entry.alt} width={isMobile ? 100 : 150} height={100} />
  ));
  return (
    <FullWidthContainer pt={[8, 0]} pb={[2, 4]}>
      <ResponsiveContainer>
        <Stack
          py={[4, 8, 10, 12, 16]}
          direction={'row'}
          justifyContent={isMobile ? 'space-evenly' : 'center'}
          alignItems={'center'}
          spacing={isMobile ? 4 : 12}
          wrap='wrap'
        >
          {brands}
        </Stack>
        <VStack pt={[8, 0]}>
          <VStack spacing={8} alignItems='start'>
            {isMobile ? (
              <VStack py={2}>
                <VStack spacing={4}>
                  <Heading as={'h5'}>About Zinsrunter</Heading>
                  <Text fontSize={['md']} color='primaryFontColor'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Text>
                  <Text fontSize={['md']} color='primaryFontColor'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </Text>
                  <VStack spacing={2} mb='8'>
                    <Heading as={'h6'}>Find us on</Heading>
                    <HStack justify='center' mx='auto' w='full' spacing={4}>
                      <Facebook height={32} width={32} />
                      <Instagram height={32} width={32} />
                      <Reddit height={32} width={32} />
                      <Twitter height={32} width={32} />
                    </HStack>
                  </VStack>
                  <SimpleGrid
                    py={4}
                    spacing={2}
                    columns={2}
                    justifyContent='center'
                    alignItems='center'
                    textAlign='center'
                  >
                    {items}
                  </SimpleGrid>
                  <Image src='/brands/geotrust-secured.png' alt='certificate-image' width={150} height={100} />
                </VStack>
              </VStack>
            ) : (
              <HStack justify='space-evenly' align='flex-start'>
                <VStack w='60%' spacing={8}>
                  <VStack>
                    <Heading as={'h2'} fontSize={['lg', 'xl']} alignSelf='start'>
                      About Zinsrunter
                    </Heading>
                    <Text fontSize={['xs', 'sm', 'md']} color='secondaryFontColor'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <Text fontSize={['xs', 'sm', 'md']} color='secondaryFontColor'>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Text>
                  </VStack>
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
                  </VStack>
                </VStack>
                <VStack w='40%' h='full' justifyContent='space-between'>
                  <SimpleGrid
                    pb={10}
                    spacing={4}
                    columns={3}
                    justifyContent='center'
                    alignItems='center'
                    textAlign='center'
                  >
                    {items}
                  </SimpleGrid>
                  <Image src='/brands/geotrust-secured.png' alt='certificate-image' width={150} height={100} />
                </VStack>
              </HStack>
            )}
          </VStack>
          <Stack direction={isMobile ? 'column' : 'row'} justify='space-between' alignItems='center'>
            <Text fontSize={['sm', 'md']}>
              {new Date().getFullYear()} ©{' '}
              <a href='/'>
                <Button variant='link'>Zinsrunter.de</Button>
              </a>
            </Text>
          </Stack>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Footer;
