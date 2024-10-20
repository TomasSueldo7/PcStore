import * as React from 'react';
import {Box, IconButton, Drawer, List, ListItemButton} from '@mui/material';
import {KeyboardArrowLeft, Menu} from '@mui/icons-material'; // Cambia esto si no tienes el ícono de cierre
import {Link} from 'react-router-dom'

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      {/* Botón para abrir el Drawer */}
      <IconButton color="white" onClick={() => setOpen(true)}>
        <Menu sx={{ color: 'white' }}/>
      </IconButton>

      {/* Drawer */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 240,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Cerrar Drawer */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <IconButton onClick={() => setOpen(false)}>
              <KeyboardArrowLeft />
            </IconButton>
          </Box>

          {/* Lista de navegación */}
          <List component="nav">
            <ListItemButton component={Link} to="/" onClick={() => setOpen(false)}>
              Inicio
            </ListItemButton>
            <ListItemButton component={Link} to="/promotions" onClick={() => setOpen(false)}>
              Promociones
            </ListItemButton>
            <ListItemButton component={Link} to="/about" onClick={() => setOpen(false)}>
              Quienes somos
            </ListItemButton>
            <ListItemButton component={Link} to="/contact" onClick={() => setOpen(false)}>
              Contactános
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}