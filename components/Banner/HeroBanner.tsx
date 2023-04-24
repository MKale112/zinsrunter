import React from 'react';
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
    <FullWidthContainer
      bgImgUrl={heroImage}
      bgImgRepeat={'no-repeat'}
      bgImgSize='cover'
      h={{ base: '24rem', md: '45rem' }}
    >
      <ResponsiveContainer
        h='full'
        w='full'
        display='flex'
        justifyContent={'space-around'}
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <Stack
          w='full'
          mt={{ base: 5, md: 0 }}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'space-around' }}
          spacing={{ base: 3, sm: 10 }}
          backdropFilter={'blur(1px)'}
          backgroundColor={{ base: 'blackAlpha.400', sm: 'rgba(0, 0, 0, 0.30)' }}
        >
          <Teaser />
          {!isMobile && <BannerText />}
        </Stack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default HeroBanner;
