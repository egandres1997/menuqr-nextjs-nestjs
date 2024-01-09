// ** React Imports
import { ReactNode } from 'react';

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

// ** Type Imports
import { Settings } from '@/core/context/settingsContext';

// ** Theme Config
import themeConfig from '@/configs/themeConfig';

// ** Theme
import themeOptions from './theme.options';

// ** Global Styles
import GlobalStyling from './theme.global-styles';

interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props;

  // ** Pass merged ThemeOptions (of core and user) to createTheme function
  let theme = createTheme(themeOptions(settings));

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
