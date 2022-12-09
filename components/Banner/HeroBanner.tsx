import React, { ReactNode } from 'react';
import BannerText from './BannerText';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';

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
    <FullWidthContainer bgImgUrl={heroImage} bgRepeat={'no-repeat'} bgSize='cover' h={['10rem', '42rem']}>
      <ResponsiveContainer h='full' display='flex' justifyContent={contentPosition} alignItems='center' {...rest}>
        <BannerText spacing={6} w={['100%', '100%', '75%', '50%']} ml='auto'>
          {children}
        </BannerText>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default HeroBanner;
