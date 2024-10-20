import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import { Attribution} from '@mui/icons-material';
import Selfie from '../assets/Selfie.jpg'
import About from '../assets/About.webp'

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3, paddingTop: 8, paddingBottom: 8}}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        <Attribution /> Quienes somos
      </Typography>
      <Typography variant="body" sx={{ marginBottom: 2 }}>
        Soy un estudiante de 24 años de ingeniería en sistemas de información apasionado por la tecnología. Actualmente trabajo como QA Automation en una empresa de primera linea.
        Siempre me gustó aprender nuevas habilidades y es así como conocí la programación, actualmente manejo diversas tecnologías pero no soy experto en ningún stack. Por ello, me propuse
        aprender MERN este año.
      </Typography>

      <Hidden mdUp>
        {/* Muestra esta imagen en pantallas pequeñas */}
        <Box className="selfie-container" sx={{display:'flex', justifyContent:'center', mt:5}}>
          <img 
            id="selfie" 
            src={Selfie}
            alt="Selfie"
            style={{ width: '50%', borderRadius: '8px' }} // Agrega estilos si es necesario
          />
        </Box>
      </Hidden>
      
      <Hidden smDown>
        {/* Muestra esta imagen en pantallas medianas y grandes */}
        <Box className="landing-container" sx={{display:'flex', justifyContent:'center', mt:5}}>
          <img 
            id="landing" 
            src={About}
            alt="About"
            style={{ width: '50%', borderRadius: '8px' }} // Agrega estilos si es necesario
          />
        </Box>
      </Hidden>
    </Box>
  );
};

export default AboutUs;