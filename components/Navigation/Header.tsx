import React from 'react';
import {
  HStack,
  Button,
  Text,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Flex,
  VStack,
  SystemStyleObject,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import navigationJSON from '../../data/navigationLinks.json';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import ChakraLink from '../Link/ChakraLink';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface TabsInterface {
  color?: string;
  hoverObj?: SystemStyleObject;
  closeDrawer?: () => void;
}

const Tabs = ({ color = 'primary.blue', hoverObj = { color: 'primary.mutedBlue' }, closeDrawer }: TabsInterface) => {
  const tabs = navigationJSON.subNav.map((entry) => (
    <ChakraLink key={entry.id} href={entry.href} onClick={closeDrawer}>
      <Button
        variant='link'
        px={[4, 8, 12, 16]}
        py={2}
        fontSize={['2xl', '3xl', '4xl', 'lg']}
        color={color}
        _hover={hoverObj}
      >
        {entry.label}
      </Button>
    </ChakraLink>
  ));

  return <>{tabs}</>;
};

const Header = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const willRenderNav = useRouter();

  const links = navigationJSON.topNav.map((entry) => (
    <ChakraLink key={entry.id} href={entry.href} rel='noreferrer' w={{ base: '100%', sm: 'fit-content' }}>
      <Button
        variant='outline'
        borderRadius='2xl'
        borderWidth='medium'
        borderColor='primary.acid'
        color='primary.acid'
        _hover={{ bgColor: 'primary.acid', color: 'white' }}
        fontWeight='bold'
        fontSize={['md', 'lg']}
        w='full'
        p={6}
      >
        {entry.label}
      </Button>
    </ChakraLink>
  ));

  return (
    <FullWidthContainer>
      <ResponsiveContainer>
        <HStack py={1} justifyContent='flex-end'>
          <Image src='/icons/phone.webp' alt='Call us!' height={isMobile ? 15 : 25} width={isMobile ? 15 : 25} />
          <Text as='b' color='primary.blue' fontSize={{ base: 'xs', md: 'sm' }}>
            Gebührenfreie Hotline: 0800 36 40000
          </Text>
        </HStack>
        <HStack py={{ base: 2, lg: 4 }} justify='space-between'>
          <HStack spacing={6} alignItems='flex-end'>
            <ChakraLink href='/'>
              <Image src='/logo.webp' alt='Logo Image' height={isMobile ? 100 : 125} width={isMobile ? 120 : 150} />
            </ChakraLink>

            <Text
              display={{ base: 'none', lg: 'block' }}
              fontSize={['xs', 'md', 'lg', 'lg', 'xl', '2xl']}
              color='secondaryFontColor'
            >
              Kein Versprechen - sondern unsere Motivation!
            </Text>
          </HStack>

          {!willRenderNav.pathname.includes('forumlar') && (
            <HamburgerIcon
              display={{ lg: 'none' }}
              color={'primary.blue'}
              onClick={onOpen}
              boxSize='12'
              border='2px'
              borderRadius='lg'
              borderColor={'primary.blue'}
              padding={2}
            />
          )}
          <HStack display={{ base: 'none', sm: 'flex' }} spacing={8}>
            {links}
          </HStack>

          <Drawer isOpen={isOpen} placement='right' onClose={onClose} size={{ base: 'xs', sm: 'md' }}>
            <DrawerOverlay />
            <DrawerContent overflowY='scroll'>
              <DrawerCloseButton color={'primary.blue'} border='2px' borderColor={'primary.blue'} size='lg' top={4} />
              <DrawerHeader></DrawerHeader>

              <DrawerBody>
                <VStack h='100%' justifyContent='center'>
                  <VStack h='50%'>
                    <Tabs closeDrawer={onClose} hoverObj={{ color: 'primary.acid' }} />
                  </VStack>
                  <VStack>{links}</VStack>
                </VStack>
              </DrawerBody>

              <DrawerFooter color='secondaryFontColor' justifyContent='center'>
                {new Date().getFullYear()} ©{' '}
                <ChakraLink href='/'>
                  <Button variant='link'>Zins-runter.de</Button>
                </ChakraLink>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </HStack>

        <Flex py={1} display={{ base: 'block', sm: 'none' }}>
          <Text as='b' fontSize={['sm', 'lg', 'lg', 'xl']} color='secondaryFontColor'>
            Kein Versprechen - sondern unsere Motivation!
          </Text>
        </Flex>
      </ResponsiveContainer>

      <Flex
        display={{ base: 'none', lg: 'block' }}
        bgColor='primary.blue'
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <ResponsiveContainer display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
          {willRenderNav.pathname === '/' && <Tabs color='primary.white' hoverObj={{ color: 'primary.acid' }} />}
        </ResponsiveContainer>
      </Flex>
    </FullWidthContainer>
  );
};

export default Header;
