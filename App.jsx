import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Hidden } from '@mui/material';
import Navbar from './src/layout/Navbar';
import Footer from './src/layout/Footer';
import Home from './src/pages/Home'; // Asegúrate de crear este componente
import Promotions from './src/pages/Promotions'; // Asegúrate de crear este componente
import AboutUs from './src/pages/AboutUs'; // Asegúrate de crear este componente
import Contact from './src/pages/Contact'; // Asegúrate de crear este componente

const App = () => {
  return (
    <Router basename='/PcStore'>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} /> 
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      <Hidden mdDown>
        <Footer />
      </Hidden>
    </Router>
  );
};

export default App;