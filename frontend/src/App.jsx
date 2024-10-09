import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Nbmenu from './components/nbmenu';
import Home from './views/home';
import Fonda365ContextProvider from './context/Fonda365ContextProvider';
import DetalleProducto from './views/DetalleProducto';
import Footer from './components/Footer';
import Contacto from './views/Contacto';
import InfoDespacho from './views/InfoDespacho';
import PreguntasFrecuentes from './views/PreguntasFrecuentes';
import QuienesSomos from './views/QuienesSomos';
import TerminosCondiciones from './views/TerminosCondiciones';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fonda365ContextProvider>
        <Nbmenu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/DetalleProducto/:id" element={<DetalleProducto />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/informacionDespacho" element={<InfoDespacho />}/>
          <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />}/>
          <Route path="/quienesSomos" element={<QuienesSomos />}/>
          <Route path="/terminosCondiciones" element={<TerminosCondiciones />}/>
        </Routes>
        <Footer />
      </Fonda365ContextProvider>
    </>
  )
}

export default App
