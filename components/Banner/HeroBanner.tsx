import React, { ReactNode } from 'react';
import BannerText from './BannerText';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';
import Teaser from '../Teaser';
import { Stack, useMediaQuery } from '@chakra-ui/react';

const defaultHeroBannerImage = '/hero-image.webp';

export interface HeroBannerProps {
  heroImage?: string;
}

export const HeroBanner = (props: HeroBannerProps) => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const { heroImage = defaultHeroBannerImage } = props;

  return (
    <FullWidthContainer bgImgUrl={heroImage} bgImgRepeat={'no-repeat'} bgImgSize='cover' h={['36rem', '45rem']}>
      <ResponsiveContainer h='full' w='full' display='flex' justifyContent='space-around' alignItems='center'>
        <Stack
          w='full'
          direction={isMobile ? 'column' : 'row'}
          justifyContent={isMobile ? 'center' : 'space-around'}
          spacing={isMobile ? 3 : 10}
          backdropFilter={'blur(2px)'}
          backgroundColor={isMobile ? 'blackAlpha.400' : 'blackAlpha.500'}
        >
          <Teaser />
          <BannerText />
        </Stack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default HeroBanner;
