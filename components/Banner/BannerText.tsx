import React, { ReactNode } from 'react';
import { StackProps, VStack } from '@chakra-ui/react';

export interface BannerTextProps extends StackProps {
  children: ReactNode;
}

export const BannerText = (props: BannerTextProps) => {
  const { children, ...rest } = props;
  return (
    <VStack
      w={'50%'}
      backdropFilter={'blur(2px)'}
      backgroundColor='blackAlpha.300'
      fontWeight={'bold'}
      textShadow={'2px 1px black'}
      padding={10}
      {...rest}
    >
      {children}
    </VStack>
  );
};

export default BannerText;
