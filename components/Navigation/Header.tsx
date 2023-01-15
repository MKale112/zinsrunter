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
  Image,
  Center,
  VStack,
  SystemStyleObject,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import navigationJSON from '../../data/navigationLinks.json';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import ChakraLink from '../Link/ChakraLink';

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
        py={4}
        fontSize={['2xl', '3xl', '4xl', '2xl', '2xl', '2xl']}
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
  const [isTablet] = useMediaQuery('(max-width: 1000px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = navigationJSON.topNav.map((entry) => (
    <ChakraLink key={entry.id} href={entry.href} rel='noreferrer'>
      <Button
        variant='outline'
        borderRadius='2xl'
        borderWidth='medium'
        borderColor='primary.acid'
        color='primary.acid'
        _hover={{ bgColor: 'primary.acid', color: 'white' }}
        fontWeight='bold'
        fontSize='lg'
        p={6}
      >
        {entry.label}
      </Button>
    </ChakraLink>
  ));

  return (
    <FullWidthContainer>
      <ResponsiveContainer>
        <HStack py={isMobile ? 2 : 4} justify='space-between'>
          <HStack spacing={6} alignItems='flex-end'>
            <Image src='/logo.png' alt={'Logo Image'} width={isMobile ? 120 : 150} />
            {!isTablet && (
              <Text as='b' fontSize={['xs', 'md', 'lg', 'lg']} color='secondaryFontColor'>
                Das ist kein Versprechen - sondern unsere Motivation!
              </Text>
            )}
          </HStack>
          {isTablet ? (
            <>
              <HamburgerIcon
                onClick={onOpen}
                boxSize='12'
                border='1px'
                borderRadius='lg'
                borderColor={'gray.300'}
                padding={2}
              ></HamburgerIcon>
              <Drawer isOpen={isOpen} placement='right' onClose={onClose} size={isMobile ? 'xs' : 'md'}>
                <DrawerOverlay />
                <DrawerContent overflowY='scroll'>
                  <DrawerCloseButton size='lg' top={4} />
                  <DrawerHeader></DrawerHeader>

                  <DrawerBody>
                    <VStack h='100%' justifyContent='center'>
                      <VStack h='50%'>
                        <Tabs closeDrawer={onClose} hoverObj={{ color: 'primary.acid' }} />
                      </VStack>
                      <Center>{links}</Center>
                    </VStack>
                    {/* <Input placeholder='Type here...' /> */}
                  </DrawerBody>

                  <DrawerFooter justifyContent='center'>
                    {new Date().getFullYear()} ©{' '}
                    <a href='/'>
                      <Button variant='link'>Zinsrunter.de</Button>
                    </a>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
          ) : (
            <HStack px={4} spacing={8}>
              {/* <SearchBar /> */}
              {links}
            </HStack>
          )}
        </HStack>
        {isTablet && (
          <Flex py={1}>
            <Text as='b' fontSize={['xs', 'md', 'lg', 'lg']} color='secondaryFontColor'>
              Das ist kein Versprechen - sondern unsere Motivation!
            </Text>
          </Flex>
        )}
      </ResponsiveContainer>
      {!isTablet && (
        <Flex bgColor='primary.blue' direction='row' justifyContent='center' alignItems='center'>
          <ResponsiveContainer display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
            <Tabs color='primary.white' hoverObj={{ color: 'primary.acid' }} />
          </ResponsiveContainer>
        </Flex>
      )}
    </FullWidthContainer>
  );
};

export default Header;
