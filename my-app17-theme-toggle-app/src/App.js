
import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';


const ToggleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '8px',
  padding: '0.5rem 1.5rem',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {

  const [darkMode, setDarkMode] = useState(false);

 
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
    },
  });

  const handleToggle = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
     
      <CssBaseline />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <Typography variant="h4">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <ToggleButton variant="contained" onClick={handleToggle}>
          Toggle Theme
        </ToggleButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
