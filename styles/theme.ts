import { extendTheme } from '@chakra-ui/react';

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
  components: {
    Button: {
      variants: {
        accent: {
          bg: colors.primary.teal,
          color: colors.primary.white,
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
