import React, { ReactNode } from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';
export interface ResponsiveContainerProps extends ContainerProps {
  children: ReactNode;
  bgImgUrl?: string;
  bgImgRepeat?: string;
}
export const ResponsiveContainer = (props: ResponsiveContainerProps) => {
  const { bgImgUrl, bgImgRepeat, children, ...rest } = props;
  return (
    <Container
      px={[4, 8, 16, 20]}
      maxWidth={['container.sm', 'container.md', 'container.xl', 'container.2xl']}
      bgImage={bgImgUrl}
      bgSize='contain'
      bgRepeat={bgImgRepeat}
      {...rest}
    >
      {children}
    </Container>
  );
};
export default ResponsiveContainer;
