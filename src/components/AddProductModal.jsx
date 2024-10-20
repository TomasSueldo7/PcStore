// AddProductModal.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Snackbar,
  Alert
} from '@mui/material';
import defaultImage from '../assets/defaultImage.jpg'; 

const AddProductModal = ({ open, lastId, handleClose, addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [borderColor, setBorderColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#000000')
  const [alertMessage, setAlertMessage] = useState('')
  const [openError, setOpenError] = useState(false);

  const handleSubmit = () => {

    if(!name || !description){
      setAlertMessage('Por favor completa todos los campos requeridos.');
      setOpenError(true);
      return;
    }

    const newProduct = {
      id: lastId + 1, 
      name,
      description,
      imgSrc: imgSrc || defaultImage,
      border: borderColor,
      background: backgroundColor
    };
    addProduct(newProduct);
    handleClean()
    handleClose(); // Cierra el modal
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  const handleClean = () =>{
    setName('')
    setDescription('')
    setImgSrc('')
    setBorderColor('#000000')
    setBackgroundColor('#000000')
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Agregar Producto</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Título"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Descripción"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="URL de la imagen"
          fullWidth
          variant="outlined"
          value={imgSrc}
          onChange={(e) => setImgSrc(e.target.value)}
        />
        <TextField
          type='color'
          margin="dense"
          label="Color de borde"
          fullWidth
          variant="outlined"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />
        <TextField
          type='color'
          margin="dense"
          label="Color de fondo"
          fullWidth
          variant="outlined"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Agregar
        </Button>
      </DialogActions>
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
    </Dialog>
  );
};

export default AddProductModal;
