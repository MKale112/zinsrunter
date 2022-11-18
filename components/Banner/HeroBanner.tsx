import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import BannerText from './BannerText';
import { ResponsiveContainer } from '../Containers';

const defaultHeroBannerImage = '/defaultHeroBanner.png';

export enum ContentPosition {
  LEFT = 'flex-start',
  CENTER = 'center',
  RIGHT = 'flex-end',
}

export interface HeroBannerProps {
  children: ReactNode;
  heroImage?: string;
  contentPosition?: ContentPosition;
}

export const HeroBanner = (props: HeroBannerProps) => {
  const { heroImage = defaultHeroBannerImage, contentPosition = ContentPosition.RIGHT, children, ...rest } = props;
  return (
    <ResponsiveContainer>
      <Flex
        justifyContent={contentPosition}
        bgImage={heroImage}
        alignItems={'center'}
        h='20rem'
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        {...rest}
      >
        <BannerText>{children}</BannerText>
      </Flex>
    </ResponsiveContainer>
  );
};

export default HeroBanner;
