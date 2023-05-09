import React from 'react';

import { ArrowUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const TopButton = () => {
  return (
    <IconButton
      borderRadius='full'
      bgColor='primary.acid'
      _hover={{ bgColor: 'primary.darkAcid' }}
      color='white'
      px={8}
      py={6}
      position='fixed'
      bottom='40px'
      right='16px'
      fontSize='md'
      border='1px'
      borderColor={{ base: 'primary.darkAcid)', sm: 'primary.darkAcid' }}
      icon={<ArrowUpIcon boxSize={8} />}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      size='lg'
      aria-label={''}
    />
  );
};

export default TopButton;
