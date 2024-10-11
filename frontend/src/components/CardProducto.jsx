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
        <Card key={"c" + props.dproducto.id_producto}>
            <Card.Img className='imgcard' key={"ci" + props.dproducto.id_producto} variant="top" src={props.dproducto.img} />
            <Card.Body key={"cb" + props.dproducto.id_producto}>
                <Card.Title className='border-bottom border-secondary' key={"ct" + props.dproducto.id_producto}>{props.dproducto.nombre_producto}</Card.Title>
                <div className='text-center'>
                    <h4>Precio: ${props.dproducto.precio}</h4>
                </div>
                <div className='border-bottom border-secondary' key={"ctxt" + props.dproducto.id_producto}>
                    <p>Ciudad: {props.dproducto.ciudad}</p>
                    <p>Comuna: {props.dproducto.comuna}</p>
                    <p>Local: {props.dproducto.local}</p>
                </div>
                <div className='text-center pt-2'>
                    <button type="button" onClick={() => hClick(props.dproducto.id_producto)} className="btn btn-info me-1">Ver Detalle 👀</button>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

    export default CardProducto