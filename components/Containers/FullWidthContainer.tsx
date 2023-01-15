import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export interface FullWidthContainerProps extends BoxProps {
  bgImgUrl?: string;
  bgImgPosition?: string;
  bgImgRepeat?: string;
  bgImgSize?: string;
  children: ReactNode;
}

export const FullWidthContainer = (props: FullWidthContainerProps) => {
  const { bgImgUrl, bgImgPosition, bgImgRepeat, bgImgSize = 'cover', children, ...rest } = props;
  return (
    <Box bgImage={bgImgUrl} bgSize={bgImgSize} bgRepeat={bgImgRepeat} bgPosition={bgImgPosition} {...rest}>
      {children}
    </Box>
  );
};

export default FullWidthContainer;
