import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import IndexPage from './pages/IndexPage';
import CUSTOM_THEME from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={CUSTOM_THEME}>
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
