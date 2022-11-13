import React, { ReactNode } from 'react';
import { Container } from '@chakra-ui/react';

export interface ContainerProps {
  children: ReactNode;
  bgImgUrl?: string;

  bgImgRepeat?: string;
}

export const ResponsiveContainer = (props: ContainerProps) => {
  const { bgImgUrl, bgImgRepeat, children, ...rest } = props;
  return (
    <Container px={[4, 12, 16, 20]} bgImage={bgImgUrl} bgSize='contain' bgRepeat={bgImgRepeat} {...rest}>
      {children}
    </Container>
  );
};

export default ResponsiveContainer;
