import React from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, X, Instagram} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 2,
        backgroundColor: '#228be6',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex:10
      }}
    >
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
        <Typography variant="body2" color="white">Autor: Tomas Sueldo</Typography>
        <Typography variant="body2" color="white">
          © 2024 PcStore. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
              <Facebook sx={{color:'white'}}/>
              <X sx={{color:'white'}}/>
              <Instagram sx={{color:'white'}}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;