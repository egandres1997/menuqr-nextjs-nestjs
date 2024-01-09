// ** MUI Theme Provider
import { deepmerge } from '@mui/utils';
import { ThemeOptions } from '@mui/material';

// ** Type Import
import { Settings } from '@/core/context/settingsContext';

// ** Theme Override Imports
import palette from './palette';
import spacing from './spacing';
import shadows from './shadows';
import overrides from './overrides';
import typography from './typography';
import breakpoints from './breakpoints';

const themeOptions = (
  settings: Settings,
): ThemeOptions => {
  const themeConfig: ThemeOptions = {
    breakpoints: breakpoints(),
    components: overrides(),
    palette: palette(),
    ...spacing,
    shape: {
      borderRadius: 10,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
    shadows: shadows(),
    typography,
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...palette().primary,
      },
    },
  });
};

export default themeOptions;
