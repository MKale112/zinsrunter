import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    white: '#FFF',
    black: '#000',
    blue: '#143474',
    darkBlue: '#1c3c6c',
    mutedBlue: '#2c5464',
    acid: '#9bc31c',
    darkAcid: '#5c8444',
  },
  primaryFontColor: baseTheme.colors.gray['800'],
  secondaryFontColor: baseTheme.colors.gray['600'],
  ternaryFontColor: baseTheme.colors.gray['400'],
};

const customTheme = extendTheme({
  colors,
  sizes: {
    ...baseTheme.space,
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
          bg: colors.primary.acid,
          color: colors.primary.white,
          fontSize: ['xl', '2xl'],
          padding: [6, 8],
          _hover: {
            bg: colors.primary.darkAcid,
          },
        },
        link: {
          fontSize: ['lg', 'xl'],
          _hover: {
            color: colors.primary.blue,
            textDecoration: 'none',
          },
        },
      },
    },
    Link: {
      _hover: {
        // color: colors.primary.teal,
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          width: '20px',
          height: '20px',
          borderColor: 'primary.acid',
          borderWidth: '2px',
          mr: 'xxs',
          _checked: {
            bg: 'primary.acid',
            border: 'none',
          },
          _disabled: {
            _checked: {
              border: 'none',
              bg: 'gray.300',
            },
            borderColor: 'gray.500',
            bg: 'white',
          },
          _focus: {
            _checked: {
              border: 'none',
              bg: 'primary.acid',
            },
            borderColor: 'primary.acid',
            boxShadow: 'none',
          },
        },
        label: {
          mx: '4',
          fontWeight: 'medium',
          _disabled: {
            opacity: 1,
          },
        },
      },
    },
  },
});

export default customTheme;
