import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './views/home';
import Fonda365ContextProvider from './context/Fonda365ContextProvider';
import DetalleProducto from './views/DetalleProducto';
import Footer from './components/Footer';
import Contacto from './views/Contacto';
import InfoDespacho from './views/InfoDespacho';
import PreguntasFrecuentes from './views/PreguntasFrecuentes';
import QuienesSomos from './views/QuienesSomos';
import TerminosCondiciones from './views/TerminosCondiciones';
import ProductoCategoria from './views/ProductoCategoria';
import Nbmenu from './components/nbmenu';
import InicioRegistro from './views/InicioRegistro';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fonda365ContextProvider>
        <Nbmenu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/InicioRegistro" element={<InicioRegistro />}/>
          <Route path="/DetalleProducto/:idproducto" element={<DetalleProducto />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/informacionDespacho" element={<InfoDespacho />}/>
          <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />}/>
          <Route path="/quienesSomos" element={<QuienesSomos />}/>
          <Route path="/terminosCondiciones" element={<TerminosCondiciones />}/>
          <Route path="/ProductoCategoria/:idcategoria" element={<ProductoCategoria />}/>
        </Routes>
        <Footer />
      </Fonda365ContextProvider>
    </>
  )
}

export default App
