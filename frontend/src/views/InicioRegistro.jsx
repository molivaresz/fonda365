import React from 'react'
import InicioSesion from '../components/iniciosesion'
import RegistroUsuario from '../components/RegistroUsuario'


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