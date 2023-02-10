import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, ScopedCssBaseline } from '@mui/material';
import { Theme } from '@mui/system';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as IColorMode}>
      <ThemeProvider theme={theme as Partial<Theme>}>
        <ScopedCssBaseline />
        <div className='app'>
          <main className='content'></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
