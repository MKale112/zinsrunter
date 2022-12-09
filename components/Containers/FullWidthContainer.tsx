import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export interface FullWidthContainerProps extends BoxProps {
  bgImgUrl?: string;
  bgImgPosition?: string;
  bgImgRepeat?: string;
  children: ReactNode;
}

export const FullWidthContainer = (props: FullWidthContainerProps) => {
  const { bgImgUrl, children, ...rest } = props;
  return (
    <Box bgImage={bgImgUrl} bgSize='contain' bgRepeat='no-repeat' {...rest}>
      {children}
    </Box>
  );
};

export default FullWidthContainer;
