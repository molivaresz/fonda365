import React from 'react'
import { useContext, useEffect } from "react";
import { Fonda365Context } from '../context/Fonda365ContextProvider';
import { useParams } from 'react-router';

const DetalleProducto = () => {

  const {dataProducto, getComentariosxProducto, dataComentarios} = useContext(Fonda365Context)
  const { idproducto } = useParams()

  useEffect(() => {
    getComentariosxProducto(idproducto)
  }, [])  

  return (
  <>
  {
  dataProducto && 
  dataProducto.map((dataProd,index) => {
    if (dataProd.Id_Producto == idproducto) {
      return (
          <div key={"a" + {index}} className="card mt-3">
              <div key={"b" + {index}} className="row g-0">
                  <div key={"c" + {index}} className="col-md-4">
                      <img src={dataProd.Imagen} className="img-fluid rounded-start" alt={dataProd.Nombre_Producto}/>
                  </div>
                  <div key={"d" + {index}} className="col-md-8">
                      <div key={"e" + {index}} className="card-body">
                          <h2 className="card-title">{dataProd.Nombre_Producto}</h2>
                          <h4 className="card-text">Precio: {dataProd.Precio}</h4>
                          <p>Ciudad: {dataProd.Ciudad}</p>
                          <p>Comuna: {dataProd.Nombre_Comuna}</p>
                          <p>Local: {dataProd.Nombre_Local}</p>
                          <p>Descripción: {dataProd.Descripcion}</p>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
  })
  }

  <h3>Comentarios:</h3>
  <div className="accordion" id="accordionExample">
  {

  dataComentarios && 
  dataComentarios.map((datacoment,index) => {
    return (
      <div key={"ai" + {index}} className="accordion-item">
      <h2 key={"ah" + {index}} className="accordion-header" id="headingOne">
        <button key={"b" + {index}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {datacoment.Correo}
        </button>
      </h2>
      <div key={"ac" + {index}} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div key={"ab" + {index}} className="accordion-body">
          {datacoment.Comentario}
        </div>
      </div>
    </div>
  
    )
  })
  }

  </div>

  </>
  )
}

export default DetalleProducto