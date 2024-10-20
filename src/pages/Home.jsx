import React from 'react';
import { Box, Typography, Grid2, Card, CardContent } from '@mui/material';
import { ElectricBolt, LocalOffer, LocalShipping, Payments, TaskAlt} from '@mui/icons-material';
import CustomCarousel from '../components/CustomCarousel';

const Home = () => {
  const items = [
    {
      id: 1,
      img: "https://imagenes.compragamer.com/bannerPrincipal/DC_20240708173518_5nnoYZK7.jpg",
      alt: "Novedades 1"
    },
    {
      id: 2,
      img: "https://imagenes.compragamer.com/bannerPrincipal/DC_20240610172739_6qw0yVem.jpg",
      alt: "Novedades 2"
    },
    {
      id: 3,
      img: "https://imagenes.compragamer.com/bannerPrincipal/DC_20240715121956_rTYCzSAI.jpg",
      alt: "Novedades 3"
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 3, paddingTop: 8, paddingBottom: 8}}>
      {/* Novedades Section */}
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        <ElectricBolt /> Novedades
      </Typography>
      <br />
      <Box>
        <CustomCarousel items={items}/>
      </Box>
      

      {/* Compra con nosotros Section */}
      <Typography variant="h4" sx={{ margin: '2rem 0' }}>
        <LocalOffer /> Compra con nosotros
      </Typography>
      <Grid2 container spacing={4}>
        <Grid2  size={{ xs: 12, md: 6 }}>
          <Card display="flex" alignItems="center" width={'100%'}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4">
                <Payments /> Pagos
              </Typography>
              <br />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{display:'flex', flexDirection: 'row'}}>
                  <TaskAlt sx={{marginRight: 1}}/>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    Recibimos todos los medios de pagos
                  </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row'}}>
                  <TaskAlt sx={{marginRight: 1}}/>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    Productos hasta en 12 cuotas sin interés
                  </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row'}}>
                  <TaskAlt sx={{marginRight: 1}}/>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    Devoluciones gratuitas
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card display="flex" alignItems="center" width={'100%'}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4">
                <LocalShipping /> Envíos
              </Typography>
              <br />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{display:'flex', flexDirection: 'row'}}>
                  <TaskAlt sx={{marginRight: 1}}/>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    Envíos a todo el país
                  </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row'}}>
                  <TaskAlt sx={{marginRight: 1}}/>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    Seguimiento en tiempo real a través de las compañias de envíos puerta a puerta
                  </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row'}}>
                  <TaskAlt sx={{marginRight: 1}}/>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    Entrega en menos de 10 días
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Home;