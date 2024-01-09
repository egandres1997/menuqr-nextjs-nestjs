// ** Type Import
import { OwnerStateThemeType } from '.';

const AppBar = () => {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => {
          return {};
        },
      },
    },
  };
};

export default AppBar;
