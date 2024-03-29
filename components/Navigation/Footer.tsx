import { Button, HStack, useMediaQuery, VStack, Text, Stack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import Image from 'next/image';
import footerItems from '../../data/footer.json';
import Link from '../Link/ChakraLink';
import ChakraLink from '../Link/ChakraLink';
import { useRouter } from 'next/router';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const router = useRouter();
  const isOnForm = router.asPath.includes('/formular');
  const items = footerItems.links.map((entry) => (
    <Link key={`${entry.label}${entry.id}`} href={entry.href} target='_self' rel='noreferrer'>
      <Button variant='link' fontWeight='normal' fontSize='sm'>
        {entry.label}
      </Button>
    </Link>
  ));
  const brands = footerItems.brands.map((entry) => (
    <Image key={entry.id} src={entry.path} alt={entry.alt} width={isOnForm || isMobile ? 75 : 150} height={100} />
  ));
  return (
    <FullWidthContainer pt={[8, 0]} pb={[2, 4]} bgColor={router.pathname.includes('formular') ? 'gray.100' : 'white'}>
      <ResponsiveContainer>
        <Stack
          py={[4, 8, 10]}
          direction={'row'}
          justifyContent={{ base: 'space-evenly', sm: 'center' }}
          alignItems={'center'}
          spacing={{ base: 4, sm: 12 }}
          wrap='wrap'
        >
          {brands}
        </Stack>
        <VStack>
          <VStack spacing={8} alignItems='start'>
            {isMobile ? (
              <VStack spacing={4} mb={4}>
                <SimpleGrid
                  py={4}
                  spacingX={8}
                  spacing={3}
                  columns={3}
                  justifyContent='center'
                  alignItems='center'
                  textAlign='center'
                >
                  {items}
                </SimpleGrid>
                <SimpleGrid
                  py={4}
                  spacingX={10}
                  spacing={4}
                  columns={2}
                  justifyContent='center'
                  alignItems='center'
                  textAlign='center'
                >
                  <Image src='/brands/geotrust-secured.png' alt='certificate-image' width={150} height={100} />
                  <Image src='/brands/nextGenerationEU.png' alt='nextGenerationEU' width={150} height={50} />
                </SimpleGrid>
              </VStack>
            ) : (
              <HStack justify='space-evenly' align='flex-start'>
                <VStack w='40%' h='full' justifyContent='space-between'>
                  <HStack pb={8} spacing={8} justifyContent='center' alignItems='center' textAlign='center'>
                    {items}{' '}
                  </HStack>
                  <HStack pb={8} spacing={8} justifyContent='center' alignItems='center' textAlign='center'>
                    <Image src='/brands/geotrust-secured.png' alt='certificate-image' width={150} height={100} />
                    <Image src='/brands/nextGenerationEU.png' alt='nextGenerationEU' width={256} height={61} />
                  </HStack>
                </VStack>
              </HStack>
            )}
          </VStack>

          <Text fontSize='sm' pt={4}>
            {new Date().getFullYear()} ©{' '}
            <ChakraLink href='/'>
              <Button fontSize='sm' variant='link'>
                Zins-runter.de
              </Button>
            </ChakraLink>
          </Text>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Footer;
