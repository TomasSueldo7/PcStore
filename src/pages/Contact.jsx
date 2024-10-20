import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert
} from '@mui/material';
import { PermContactCalendar} from '@mui/icons-material';

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState('')
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    country: '',
    consulta: '',
    novedades: false,
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const { nombre, apellido, correo, telefono, consulta } = formData;
    if (!nombre || !apellido || !correo || !telefono || !consulta) {
      setAlertMessage('Por favor completa todos los campos requeridos.');
      setOpenError(true);
      return;
    }

    if(telefono.length < 7){
      setAlertMessage('Teléfono inválido, verifica el campo correspondiente')
      setOpenError(true);
      return
    }
    
    // Si las validaciones son exitosas, abre el Snackbar de éxito
    setOpenSuccess(true);
  };

  const handleClean = () => {
    setFormData({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      country: '',
      consulta: '',
      novedades: false,
    });
  }

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3, paddingTop: 8, paddingBottom: 8}}>
        <Box sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
          <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
            <PermContactCalendar /> Contacto
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Completa el siguiente formulario con tus datos para que podamos ayudarte.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <TextField
              label="Apellido"
              variant="outlined"
              fullWidth
              margin="normal"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
            <TextField
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              required
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              fullWidth
              margin="normal"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>País</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <MenuItem value="argentina">Argentina</MenuItem>
                <MenuItem value="brazil">Brasil</MenuItem>
                <MenuItem value="chile">Chile</MenuItem>
                <MenuItem value="peru">Perú</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Escribi tu consulta"
              variant="outlined"
              fullWidth
              margin="normal"
              name="consulta"
              value={formData.consulta}
              onChange={handleChange}
              required
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.novedades}
                  onChange={handleChange}
                  name="novedades"
                  color="primary"
                />
              }
              label="¿Desea recibir novedades de nuestras promociones?"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Button type="reset" variant="outlined" color="secondary" onClick={handleClean}>
                Limpiar campos
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Enviar consulta
              </Button>
            </Box>
          </form>
          <Snackbar 
            open={openSuccess} 
            autoHideDuration={6000} 
            onClose={handleCloseSuccess}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Posiciona el Snackbar de éxito
          >
            <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
              ¡Consulta enviada con éxito!
            </Alert>
          </Snackbar>
          <Snackbar 
            open={openError} 
            autoHideDuration={6000} 
            onClose={handleCloseError}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Posiciona el Snackbar de error
          >
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
              {alertMessage}
            </Alert>
          </Snackbar>
        </Box>
    </Box>
  );
};

export default Contact;