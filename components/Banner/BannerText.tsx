import React, { ReactNode } from 'react';
import { VStack } from '@chakra-ui/react';

export interface BannerTextProps {
  children: ReactNode;
}

export const BannerText = (props: BannerTextProps) => {
  const { children, ...rest } = props;
  return (
    <VStack
      backdropFilter={'blur(2px)'}
      boxShadow={'0 0 5px 5px #ffffff'}
      fontWeight={'bold'}
      textShadow={'2px 1px black'}
      padding={'10'}
      {...rest}
    >
      {children}
    </VStack>
  );
};

export default BannerText;
