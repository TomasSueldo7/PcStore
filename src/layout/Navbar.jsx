import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DrawerMobileNavigation from './DrawerMobileNavigation';
import { Link } from 'react-router-dom';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

const Navbar = () => {
  return (
    <Box sx={{ position: 'fixed',top:0, width: '100%', backgroundColor: '#228be6', p:1, zIndex:10 }}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
        <DrawerMobileNavigation />
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <ImportantDevicesIcon sx={{ fontSize: 30, color:'white' }} />
          <Typography variant="h6" sx={{ marginLeft: '8px', color:'white' }}>
            PcStore
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;