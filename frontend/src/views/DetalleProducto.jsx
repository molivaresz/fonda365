import React from 'react'
import { useContext } from "react";
import { Fonda365Context } from '../context/Fonda365ContextProvider';
import { useParams } from 'react-router';

const DetalleProducto = () => {

  const { idproducto } = useParams()

  return (
    <div>DetalleProducto {idproducto}</div>

  )
}

export default DetalleProducto