import React from 'react';

import { ThemeProvider, CssBaseline, Theme } from '@mui/material';

import { ColorModeContext, useMode } from './theme';

import { Topbar } from './scenes/global/Topbar';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as IColorMode}>
      <ThemeProvider theme={theme as Partial<Theme>}>
        <CssBaseline />
        <div className='app'>
          <main className='content'>
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
