import { Button, HStack, useMediaQuery, VStack, Text, Stack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import Image from 'next/image';
import footerItems from '../../data/footer.json';
import Link from '../Link/ChakraLink';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const items = footerItems.links.map((entry) => (
    <Link
      color='primary.blue'
      fontWeight='semibold'
      _hover={{ textDecoration: 'underline' }}
      key={`${entry.label}${entry.id}`}
      href={entry.href}
      target='_self'
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
              <VStack spacing={4} mb={4}>
                <SimpleGrid
                  py={4}
                  spacingX={8}
                  spacing={3}
                  columns={2}
                  justifyContent='center'
                  alignItems='center'
                  textAlign='center'
                >
                  {items}
                </SimpleGrid>
                <Image src='/brands/geotrust-secured.png' alt='certificate-image' width={150} height={100} />
              </VStack>
            ) : (
              <HStack justify='space-evenly' align='flex-start'>
                <VStack w='40%' h='full' justifyContent='space-between'>
                  <HStack pb={10} spacing={8} justifyContent='center' alignItems='center' textAlign='center'>
                    {items}
                  </HStack>
                  <Image src='/brands/geotrust-secured.png' alt='certificate-image' width={150} height={100} />
                </VStack>
              </HStack>
            )}
          </VStack>
          <Stack direction={isMobile ? 'column' : 'row'} justify='space-between' alignItems='center'>
            <Text fontSize={['sm', 'md']}>
              {new Date().getFullYear()} ©{' '}
              <a href='/'>
                <Button variant='link'>Zins-runter.de</Button>
              </a>
            </Text>
          </Stack>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Footer;
