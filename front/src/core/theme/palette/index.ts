// ** Type Imports
import { Palette } from '@mui/material';

const DefaultPalette = (): Palette => {
  const whiteColor = '#FFF';

  const secondaryMain = '#B576FF';
  const secondaryLight = '#F8F1FF';

  const primaryMain = '#6439FD';
  const primaryLight = '#BDACFD';

  return {
    primary: {
      main: primaryMain,
      dark: primaryMain,
      light: primaryLight,
      contrastText: whiteColor,
    },
    secondary: {
      main: secondaryMain,
      dark: secondaryMain,
      light: secondaryLight,
      contrastText: whiteColor,
    },
    error: {
      light: '#FF625F',
      main: '#FF4D49',
      dark: '#E04440',
      contrastText: whiteColor,
    },
    warning: {
      light: '#FDBE42',
      main: '#FDB528',
      dark: '#DF9F23',
      contrastText: whiteColor,
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
      contrastText: whiteColor,
    },
    success: {
      light: '#83E542',
      main: '#72E128',
      dark: '#64C623',
      contrastText: whiteColor,
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161',
    },
    text: {
      primary: `rgba(${primaryMain}, 0.87)`,
      secondary: `rgba(${primaryMain}, 0.6)`,
      disabled: `rgba(${primaryMain}, 0.38)`,
    },
    divider: `rgba(${primaryMain}, 0.12)`,
    background: {
      paper: whiteColor,
      default: whiteColor,
    },
    action: {
      active: `rgba(${primaryMain}, 0.54)`,
      hover: `rgba(${primaryMain}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${primaryMain}, 0.08)`,
      disabled: `rgba(${primaryMain}, 0.26)`,
      disabledBackground: `rgba(${primaryMain}, 0.12)`,
      focus: `rgba(${primaryMain}, 0.12)`,
    },
  } as Palette;
};

export default DefaultPalette;
