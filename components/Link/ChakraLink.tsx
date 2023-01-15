import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

type ChakraAndNextProps = LinkProps & ChakraLinkProps;

const Link = ({ href, children, ...rest }: ChakraAndNextProps) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <ChakraLink {...rest} _hover={{ textDecoration: 'none' }}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
