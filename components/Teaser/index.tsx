import React, { useEffect, useState } from 'react';
import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Popup from '../Popups';

const Teaser = ({ isMobile }: { isMobile: boolean }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!router.isReady) return;
  }, []);

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

      <SimpleGrid
        columns={isMobile ? 2 : 4}
        // spacing={6}
        bgColor='gray.200'
        color='black'
        py={1}
        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
      >
        <HStack justifyContent='center' alignItems='center' color='red.600'>
          <Text>ab</Text>
          <Box fontWeight='bold' className='baufilead_beste_kondition_sollzins' />
          <QuestionOutlineIcon onClick={() => setIsOpen(true)} cursor='pointer' />
          <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} popupContent={'Reprasentatives'} />
        </HStack>
        <HStack justifyContent='center' alignItems='center'>
          <Text>Sollzins (gebunden)</Text>
          <Box fontWeight='bold' className='baufilead_beste_kondition_sollzins' />
        </HStack>
        <HStack justifyContent='center' alignItems='center'>
          <Text>Sollzinsbindung</Text>
          <Box fontWeight='bold' className='baufilead_beste_kondition_zinsbindung' />
        </HStack>
        <HStack justifyContent='center' alignItems='center'>
          <Text>Effektiver Jahreszins</Text>
          <Box fontWeight='bold' className='baufilead_beste_kondition_effektivzins' />
        </HStack>
      </SimpleGrid>
    </>
  );
};

export default Teaser;
