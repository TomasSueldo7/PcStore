import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

const CustomCarousel = ({ items}) => {
  return (
    <Carousel
      interval={5000}
      animation="slide"
      sx={{ position: 'relative', zIndex: 1 }}
    >
      {items.map((item) => (
        <Box key={item.id} sx={{ display:'flex', justifyContent:'center', overflow: 'hidden', alignItems: 'center' }}>
          <img
            src={item.img}
            alt={item.alt}
            style={{
              width: '50%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
};

// Validación de PropTypes
CustomCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      img: PropTypes.string.isRequired, 
      alt: PropTypes.string.isRequired, 
    })
  ).isRequired, 
};

export default CustomCarousel;