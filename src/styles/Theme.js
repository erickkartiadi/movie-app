import { createMuiTheme } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';

const CUSTOM_THEME = createMuiTheme({
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
    },
    secondary: {
      light: '#6ab7ff',
      main: '#1e88e5',
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
