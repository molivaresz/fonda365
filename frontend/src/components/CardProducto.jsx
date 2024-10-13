import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';


const CardProducto = (props) => {

    const navigate = useNavigate()
//    const {agregaPizza_a_carro} = useContext(PizzasContext)

    const hClick = (idproducto) => {
        navigate(`/DetalleProducto/${idproducto}`)
    }

    return (
        <>
        <Card key={"c" + props.dproducto.Id_Producto}>
            <Card.Img className='imgcard' key={"ci" + props.dproducto.Id_Producto} variant="top" src={props.dproducto.Imagen} />
            <Card.Body key={"cb" + props.dproducto.Id_Producto}>
                <Card.Title className='border-bottom border-secondary' key={"ct" + props.dproducto.Id_Producto}>{props.dproducto.Nombre_Producto}</Card.Title>
                <div className='text-center'>
                    <h4>Precio: ${props.dproducto.Precio}</h4>
                </div>
                <div className='border-bottom border-secondary' key={"ctxt" + props.dproducto.Id_Producto}>
                    <p>Ciudad: {props.dproducto.Ciudad}</p>
                    <p>Comuna: {props.dproducto.Nombre_Comuna}</p>
                    <p>Local: {props.dproducto.Nombre_Local}</p>
                </div>
                <div className='text-center pt-2'>
                    <button type="button" onClick={() => hClick(props.dproducto.Id_Producto)} className="btn btn-info me-1">Ver Detalle 👀</button>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

    export default CardProducto