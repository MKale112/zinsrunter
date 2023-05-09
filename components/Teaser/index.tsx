import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Popup from '../Popups';
const ReactReveal = require('react-reveal');

const Teaser = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!router.isReady) return;
  }, []);

  const date = new Date();
  const options = { day: 'numeric' as const, month: 'numeric' as const, year: 'numeric' as const };
  const formattedDate = date.toLocaleDateString('de-DE', options).replace(/\.\s*$/, '');

  return (
    <ReactReveal.Fade duration={1000} right>
      <VStack
        //h='full'
        justifyContent='center'
        spacing={2}
        padding={[4, 6, 8]}
        fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
        textShadow='0px 1px 3px rgba(0,0,0,0.3)'
        color='gray.200'
        border='1px'
        borderColor={{ base: 'rgba(200, 200, 200, 0.50)', sm: 'rgba(200, 200, 200, 0.50)' }}
        borderRadius={{ sm: 'xl' }}
        backgroundColor={{ base: 'rgba(0, 40, 60, 0.30)', sm: 'rgba(0, 40, 60, 0.30)' }}
        ml={{ base: 0, md: 0 }}
        mt={{ base: '110', md: '0', lg: '0' }}
      >
        <Text
          color='primary.acid'
          fontSize={{ base: '2xl', md: '2xl', lg: '4xl' }}
          fontWeight='bold'
          textShadow={'0px 1px 3px rgba(0,0,0,0.8)'}
          pb={[1, 0]}
        >
          Top-Zins
        </Text>
        <HStack
          justifyContent='center'
          alignItems='center'
          fontSize={{ base: '2xl', md: '2xl', lg: '4xl' }}
          fontWeight='bold'
          textShadow={'0px 1px 3px rgba(0,0,0,0.8)'}
          color='primary.acid'
        >
          <Text>ab</Text>
          <Box id='sollzins' />
          <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} popupContent={'Repräsentatives Zins-Beispiel'} />
        </HStack>
        <HStack justifyContent='center' alignItems='center'>
          <Text>Stand heute {formattedDate}</Text>
        </HStack>
        <HStack justifyContent='center' alignItems='center' fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
          <Text textDecoration='underline' onClick={() => setIsOpen(true)} cursor='pointer' fontWeight='bold'>
            Repräsentatives Beispiel
          </Text>
        </HStack>
      </VStack>
    </ReactReveal.Fade>
  );
};

export default Teaser;
