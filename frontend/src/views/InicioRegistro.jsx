import React from 'react'
import RegistroUsuario from '../components/RegistroUsuario'
import InicioSesion from '../components/InicioSesion'


const InicioRegistro = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-evenly bg-secondary bg-opacity-10'>
        <InicioSesion />
        <RegistroUsuario />
    </div>
    </>
  )
}

export default InicioRegistro