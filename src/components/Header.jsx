import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Code, PhoneIphone } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Code />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Blog de Desarrollo Web & Mobile
        </Typography>
        <IconButton color="inherit">
          <PhoneIphone />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;