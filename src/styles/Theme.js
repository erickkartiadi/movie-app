import { createMuiTheme } from '@material-ui/core/styles';

const CUSTOM_THEME = createMuiTheme({
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
    },
    secondary: {
      light: '#6ab7ff',
      main: '#01579b',
      dark: '#005cb2',
    },
  },
  typography: {
    title: {
      fontFamily: 'Raleway',
      fontWeight: 'bold',
    },
  },
});

export default CUSTOM_THEME;
