import { extendTheme, theme } from '@chakra-ui/react';

const colors = {
  primary: {
    white: '#FFF',
    black: '#000',
    teal: '#3fd2c7',
    darkTeal: '#539D96',
  },
  secondary: {
    sky: '#e3fffc',
    cloud: '#e8f3f1',
  },
};

const customTheme = extendTheme({
  colors,
  sizes: {
    ...theme.space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1600px',
      '3xl': '1920px',
    },
  },
  components: {
    Button: {
      variants: {
        accent: {
          bg: colors.primary.teal,
          color: colors.primary.white,
          fontSize: ['lg', 'xl'],
          padding: ['4', '6'],
          _hover: {
            bg: colors.primary.darkTeal,
          },
        },
      },
    },
    Heading: {
      color: colors.primary.darkTeal,
    },
  },
});

export default customTheme;
