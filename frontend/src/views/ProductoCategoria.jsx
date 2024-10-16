import Card from 'react-bootstrap/Card';
import React, { useContext } from 'react'
import { Fonda365Context } from '../context/Fonda365ContextProvider'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';

const ProductoCategoria = () => {

    const {dataProducto} = useContext(Fonda365Context)
    const { idcategoria } = useParams()
    const navigate = useNavigate()


    const hClick = (idproducto) => {
        navigate(`/DetalleProducto/${idproducto}`)
    }

    return (
        <>
        <div className="galeriahome container-fluid">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
        {
        dataProducto && 
        dataProducto.map((dataProd,index) => {
        if (dataProd.Id_Categoria == idcategoria) {
            return (
                <Card key={"c" + dataProd.Id_Producto}>
                <Card.Img className='imgcard' key={"ci" + dataProd.Id_Producto} variant="top" src={dataProd.Imagen} />
                <Card.Body key={"cb" + dataProd.Id_Producto}>
                    <Card.Title className='border-bottom border-secondary' key={"ct" + dataProd.Id_Producto}>{dataProd.Nombre_Producto}</Card.Title>
                    <div className='text-center'>
                        <h4>Precio: ${dataProd.Precio}</h4>
                    </div>
                    <div className='border-bottom border-secondary' key={"ctxt" + dataProd.Id_Producto}>
                        <p>Ciudad: {dataProd.Ciudad}</p>
                        <p>Comuna: {dataProd.Nombre_Comuna}</p>
                        <p>Local: {dataProd.Nombre_Local}</p>
                    </div>
                    <div className='text-center pt-2'>
                        <button type="button" onClick={() => hClick(dataProd.Id_Producto)} className="btn btn-info me-1">Ver Detalle 👀</button>
                    </div>
                </Card.Body>
            </Card>
            )
            }
        })
        }
        </div>
        </div>
    </>
        )
    }

export default ProductoCategoria