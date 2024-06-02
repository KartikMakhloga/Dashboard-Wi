import React, { useState } from 'react';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import data from './data.json'; 

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);  // State to manage sidebar visibility

  const handleDrawerToggle = () => {
    console.log('Toggling sidebar', !mobileOpen);
    setMobileOpen(!mobileOpen);  // Toggle function
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
        >
          <Toolbar />
          <MainContent data={data} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
