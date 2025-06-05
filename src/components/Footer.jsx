import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" p={3} mt={4}>
      <Typography variant="body1" align="center">
        Blog de Desarrollo Web & Mobile © {new Date().getFullYear()}
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <IconButton color="inherit" href="https://github.com" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com" target="_blank">
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;