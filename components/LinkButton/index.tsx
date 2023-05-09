import React from 'react';
import { Button, keyframes } from '@chakra-ui/react';

const linkButtonStyle = keyframes`
0% {
    -webkit-box-shadow: 0 0 0 0 rgba(150, 150, 150, 0.6);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(150, 150, 150, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(150, 150, 150, 0);
  }
  from {
    background-repeat:no-repeat;
    background-image:-webkit-linear-gradient(
        top left,
        rgba(255, 255, 255, 0.0) 0%,
        rgba(255, 255, 255, 0.0) 35%,
        rgba(255, 255, 255, 0.1) 48%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.1) 52%,
        rgba(255, 255, 255, 0.0) 57%,
        rgba(255, 255, 255, 0.0) 100%
    );
    background-position:-400px -250px;
    background-size: 600px 600px
  }
  to {
      background-repeat:no-repeat;
      background-position:250px 250px;
  }
`;
export interface buttonTextProps {
  buttonText?: string;
}
const linkButtonAnimation = `${linkButtonStyle} infinite 5s`;
const AnimationButton = (props: buttonTextProps) => {
  const { buttonText } = props;
  return (
    <Button
      variant='accent'
      fontSize={{ base: 'xl', md: '2xl' }}
      _hover={{
        bg: '#719B00',
        animationPlayState: 'paused',
      }}
      animation={linkButtonAnimation}
    >
      {buttonText}
    </Button>
  );
};

export default AnimationButton;
