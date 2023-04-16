import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Script from 'next/script';
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
    <>
      <Script
        id='baufi-lead-script-1'
        type='text/javascript'
        src='https://www.baufi-lead.de/baufilead/partner/PkGvpMTcO4DxDy0gEBGuq9c2NYTZ1Q/imports.js'
      />
      <Script id='baufi-lead-script-2' type='text/javascript'>
        var baufilead_kampagne = &quot;Zins-runter.de Europace Formulare&quot;;
      </Script>
      <Script id='baufi-lead-script-3' type='text/javascript'>
        var baufilead_tippgeber_id = &quot;TQJ25&quot;;
      </Script>

      <ReactReveal.Fade duration={1000} right>
        <VStack
          h='full'
          justifyContent='center'
          spacing={2}
          color='white'
          padding={[4, 6, 10]}
          fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
        >
          <Text color='primary.acid' fontWeight='bold' textShadow={'2px 1px black'} pb={[1, 1, 4]}>
            Top -Zins
          </Text>
          <HStack
            justifyContent='center'
            alignItems='center'
            fontSize={{ base: '2xl', md: '2xl', lg: '4xl' }}
            fontWeight='bold'
            textShadow={'2px 1px black'}
            color='primary.acid'
          >
            <Text>ab</Text>
            <Box className='baufilead_beste_kondition_sollzins' />
            <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} popupContent={'Repräsentatives Zins-Beispiel'} />
          </HStack>
          <HStack justifyContent='center' alignItems='center'>
            <Text>Stand heute {formattedDate}</Text>
          </HStack>
          <HStack justifyContent='center' alignItems='center' fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            <Text textDecoration='underline' onClick={() => setIsOpen(true)} cursor='pointer'>
              Repräsentatives Beispiel anzeigen
            </Text>
          </HStack>
        </VStack>
      </ReactReveal.Fade>
    </>
  );
};

export default Teaser;
