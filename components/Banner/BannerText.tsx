import React, { ReactNode } from 'react';
import { StackProps, useMediaQuery, VStack } from '@chakra-ui/react';

export interface BannerTextProps extends StackProps {
  children: ReactNode;
}

export const BannerText = (props: BannerTextProps) => {
  const { children, ...rest } = props;
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  return (
    <VStack
      w={'50%'}
      backdropFilter={'blur(2px)'}
      backgroundColor={isMobile ? 'blackAlpha.600' : 'blackAlpha.500'}
      fontWeight={'bold'}
      textShadow={'2px 1px black'}
      padding={10}
      alignItems='flex-start'
      {...rest}
    >
      {children}
    </VStack>
  );
};

export default BannerText;
