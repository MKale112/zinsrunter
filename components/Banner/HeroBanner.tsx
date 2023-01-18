import React, { ReactNode } from 'react';
import BannerText from './BannerText';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';

const ReactReveal = require('react-reveal');

const defaultHeroBannerImage = '/hero-min.webp';

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
    <FullWidthContainer bgImgUrl={heroImage} bgImgRepeat={'no-repeat'} bgImgSize='cover' h={['28rem', '42rem']}>
      <ResponsiveContainer h='full' display='flex' justifyContent={contentPosition} alignItems='center' {...rest}>
        <ReactReveal.Fade right>
          <BannerText spacing={6} w={['100%', '100%', '75%']} ml='auto'>
            {children}
          </BannerText>
        </ReactReveal.Fade>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default HeroBanner;
