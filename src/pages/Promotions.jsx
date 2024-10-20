import React, { useState, useEffect }  from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CardActions, CardActionArea, CardMedia, TextField} from '@mui/material';
import { ElectricBolt, LocalOffer, TaskAlt} from '@mui/icons-material';
import CustomCarousel from '../components/CustomCarousel'; 
import AddProductModal from '../components/AddProductModal';

const Promotions = () => {
  const [open, setOpen] = useState(false);

  // Recuperar productos del localStorage o usar un valor predeterminado
  const initialProducts = JSON.parse(localStorage.getItem('featuredProducts')) || [
    {
      id: 1,
      name: 'MSI Pulse',
      description: 'MSI Pulse 15 B13VFK-448XES Intel Core i9-13900H/32GB/1TB SSD/RTX 4060/15.6"',
      imgSrc: 'https://thumb.pccomponentes.com/w-530-530/articles/1071/10719530/1257-msi-pulse-15-b13vfk-448xes-intel-core-i9-13900h-32gb-1tb-ssd-rtx-4060-156.jpg',
      price: 100000,
      border: '#FFFFFF',
      background: '#FFFFFF'
    },
    {
      id: 2,
      name: 'Omen by HP',
      description: 'HP Omen Gaming Laptop 15.6” Full HD, Intel Core i7-8750H...',
      imgSrc: 'https://images.fravega.com/f500/7787cab2501ada42327f5dde7bffd5d6.jpg',
      price: 200000,
      border: '#FFFFFF',
      background: '#FFFFFF'
    },
    {
      id: 3,
      name: 'Razer Blade Pro',
      description: 'Intel Core i7-10875H de 8 núcleos, NVIDIA GeForce RTX 3060...',
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71tps3mq8tL._MCnd_AC_SR462,462_.jpg',
      price: 100800,
      border: '#FFFFFF',
      background: '#FFFFFF'
    },
  ];

  const [featuredProducts, setFeaturedProducts] = useState(initialProducts);

  // Guardar productos en el localStorage cuando se actualice el estado
  useEffect(() => {
    localStorage.setItem('featuredProducts', JSON.stringify(featuredProducts));
  }, [featuredProducts]);

  const items = [
    {
      id: 1,
      img: "https://http2.mlstatic.com/D_NQ_NP_760191-MLA76402960114_052024-O.webp",
      alt: "Promoción 1"
    },
    {
      id: 2,
      img: "https://eventop.org/wp-content/uploads/pc-gamer.jpg",
      alt: "Promoción 2"
    },
    {
      id: 3,
      img: "https://oechsle.vteximg.com.br/arquivos/ids/16322673-1500-1500/image-3dd13d30a3b84710b769c3de1772266c.jpg?v=638313100342730000",
      alt: "Promoción 3"
    }
  ];

  const otherProducts = [
    {
      id:1,
      img:'https://fullh4rd.com.ar/img/productos/1/micro-intel-core-i9-12900-cvideo-ccooler-s1700-oferta-a-precio-i7-0.jpg',
      alt: 'Producto 1'
    },
    {
      id:2,
      img:'https://www.megatecnologia.com.ar/thumb/PROCESADOR-INTEL-CORE-I3-10105F-3-7-GHz-10-GEN-(LGA-1200)1620966094878_400x400.jpg',
      alt: 'Producto 1'
    },
    {
      id:3,
      img:'https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_2.jpeg?v671?v267?v98',
      alt: 'Producto 1'
    },
    {
      id:4,
      img:'https://static.gigabyte.com/StaticFile/Image/Global/2c0c9cf1f6a90c50e3522ec881f0e88d/Product/32095/png/300',
      alt: 'Producto 1'
    },
    {
      id:5,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBaYZSIfIiuIpmsAUMKOV9YZ5RM2IMfDiTw&s',
      alt: 'Producto 1'
    },
    {
      id:6,
      img:'https://acdn.mitiendanube.com/stores/001/018/096/products/1019-producto-rog-strix-b650e-f-gaming-wifi-01-975911-bf80dd52928e35d31816729493326251-640-0.jpg',
      alt: 'Producto 1'
    },
    {
      id:7,
      img:'https://http2.mlstatic.com/D_NQ_NP_628823-MLA43940856163_102020-O.webp',
      alt: 'Producto 1'
    },
    {
      id:8,
      img:'https://dcdn.mitiendanube.com/stores/001/516/300/products/fuente-gamemax1-14a9592775b342257116195338186598-640-0.jpg',
      alt: 'Producto 1'
    },
    {
      id:9,
      img:'https://i0.wp.com/www.mastertech.com.py/wp-content/uploads/2024/04/Fuente-de-alimentacion-Corsair-HX1500i-1500W-ATX-Modular-80-Plus-Platinum-CP-9020215-NA.png?resize=300%2C300&ssl=1',
      alt: 'Producto 1'
    }
  ]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addProduct = (newProduct) => {
    setFeaturedProducts((prev) => [...prev, newProduct]);
  };

  // Función para manejar el cambio del color del borde
  const handleBorderColor = (color, index) => {
    const newProducts = [...featuredProducts];
    newProducts[index].border = color; 
    setFeaturedProducts(newProducts); 
  };

  // Función para manejar el cambio del color de fondo
  const handleBackgroundColor = (color, index) => {
    const newProducts = [...featuredProducts];
    newProducts[index].background = color; // Actualiza el color de fondo para el producto correspondiente
    setFeaturedProducts(newProducts); // Actualiza el estado
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3, paddingTop: 8, paddingBottom: 8}}>
      <Box id="promociones" sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1">
          <ElectricBolt /> Promociones
        </Typography>
        <br />
        <CustomCarousel items={items} />
      </Box>

      <Box id="productos-destacados" sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1" sx={{ margin: '2rem 0' }}>
          <LocalOffer /> Productos destacados
        </Typography>
        <Grid container spacing={4}>
        {featuredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ 
              maxWidth: 345, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              border: `3px solid ${product.border}`,
            }}>
              <CardActionArea>
                <Box sx={{
                    display:'flex', 
                    justifyContent:'center', 
                    backgroundColor: `${product.background || 'white'}` 
                  }}>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={product.imgSrc}
                    alt={product.name}
                    sx={{ 
                      width: '80%',
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{display:'flex', justifyContent:'space-around', flexDirection:'column', gap:2}}>
                <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'row', width:'100%', gap: 1}}>
                  <TextField
                    type='color'
                    label="Color de borde"
                    onChange={(e) => {handleBorderColor(e.target.value, index)}}
                    value={product.border || '#FFFFFF'}
                    sx={{ 
                      width:'50%'
                    }}
                  />
                  <TextField
                    type='color'
                    label="Color de fondo"
                    value={product.background || '#FFFFFF'}
                    onChange={(e) => {handleBackgroundColor(e.target.value, index)}}
                    sx={{
                      width:'50%'
                    }}
                  />
                </Box>
                <Button variant='contained' size="small" color="primary">
                  Agregar al carrito
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
        <br />
        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
          <Button variant="contained" onClick={handleClickOpen}>Agregar producto</Button>
        </Box>
        <AddProductModal open={open} lastId={featuredProducts.length} handleClose={handleClose} addProduct={addProduct} />
      </Box>

      <Box id="otros-productos" sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1" sx={{ margin: '2rem 0' }}>
          <TaskAlt /> Otros productos
        </Typography>
        <Grid container spacing={1}>
          {/* Aquí puedes añadir imágenes adicionales */}
          {otherProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img src={product.img} alt={product.alt} style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Promotions;