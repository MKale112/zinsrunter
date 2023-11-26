// components/ResponsiveCarousel.tsx
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import partnersData from 'data/partners.json';

const ResponsiveCarousel: React.FC = () => {
  const carouselItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const partnerImageStyle: React.CSSProperties = {
    verticalAlign: 'middle',
    maxWidth: '100%', // Ensure the image doesn't exceed its container
    maxHeight: '100%', // Ensure the image doesn't exceed its container
  };

  const arrowStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    background: 'none',
    color: '#000000',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1,
  };

  const CustomArrow: React.FC<CustomArrowProps & { direction: 'prev' | 'next' }> = ({
    arrowStyle,
    direction,
    onClick,
  }) => {
    const arrowContainerStyle: React.CSSProperties = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [direction === 'prev' ? 'left' : 'right']: 0,
      cursor: 'pointer',
      padding: '10px',
    };

    const arrowIconStyle: React.CSSProperties = {
      color: '#000000',
      fontSize: '18px',
    };

    return (
      <div
        className={`custom-arrow custom-${direction}`}
        style={{ ...arrowContainerStyle, ...arrowStyle }}
        onClick={onClick}
      >
        {direction === 'prev' ? (
          <ChevronLeftIcon w={8} h={8} color='primary.blue' />
        ) : (
          <ChevronRightIcon w={8} h={8} color='primary.blue' />
        )}
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <CustomArrow direction='prev' arrowStyle={arrowStyle} />,
    nextArrow: <CustomArrow direction='next' arrowStyle={arrowStyle} />,
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ position: 'relative' }}>
      <Slider {...settings}>
        {partnersData.partners.map((partner) => (
          <div key={partner.id} style={carouselItemStyle}>
            <img src={partner.path} alt={`Partner ${partner.id}`} style={partnerImageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

interface CustomArrowProps {
  arrowStyle: React.CSSProperties;
  onClick?: () => void;
}

export default ResponsiveCarousel;
